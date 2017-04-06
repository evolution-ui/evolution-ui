export default function() {

  var tabs;

  var activeStatusClass = 'is-active';
  var selectors = {
    tab: '.evo_c-tab'
  };

  var pfx = ['webkit', 'moz', 'MS', 'o', ''];

  var $prefixedOn = function ( target, type, callback, useCapture ) {

    for ( var p = 0, length = pfx.length; p < length; p++ ) {
      if ( !pfx[p] ) {
        type = type.toLowerCase();
      }
      target.addEventListener( pfx[p]+type, callback, !!useCapture );
    }
  };

  /**
   * Get the closest matching element up the DOM tree.
   * @param  {Element} elem     Starting element
   * @param  {String}  selector Selector to match notwithstanding
   * @return {Boolean|Element}  Returns null if not match found
   */
  var getClosest = function ( elem, selector ) {

    // When elem is a Text node, get its parent node
    if (elem.nodeType === 3) {
        elem = elem.parentNode;
    }

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;
        };
    }

    // Get closest match
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.matches( selector ) ) return elem;
    }

    return null;

  };

  Array.prototype.where = function ( inclusionTest ) {
    var results = [];
    for (var i = 0; i<this.length; i++) {
      if ( inclusionTest(this[i]) ) {
        results.push(this[i]);
      }
    }
    return results;
  };

  function getClassName(node, subString) {
    return [].slice.call(node.classList).where(function(className) {
      return className.indexOf(subString) !== -1;
    });
  }

  function isNotEmpty( array ) {
    return array.length > 0;
  }

  function hasClassName(node, subString) {
    return isNotEmpty(getClassName(node, subString));
  }

  function $(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  function $$(selector, parent) {
    return (parent || document).querySelectorAll(selector);
  }

  function handleClick( event ) {

    event.stopPropagation();
    event.preventDefault();

    var targetSelector;
    var targetItem;
    var targetTab;
    var targetTabContent;

    var isLink = hasClassName(event.target, 'tab__link');
    var isItem = hasClassName(event.target, 'tab__item');
    var tab    = getClosest(event.target, selectors.tab);
    var activeItem = $('[class$="tab__item ' + activeStatusClass +'"]', tab);
    var activeTab = $('[class$="tab__tabcontent ' + activeStatusClass +'"]', tab);


    if ( !isLink && !isItem ) {
      return;
    }

    if ( isItem ) {
      targetItem = event.target;
    } else {
      targetItem = event.target.parentElement;
    }

    if ( isLink ) {
      targetSelector = event.target.getAttribute( 'href' );
    } else {
      targetSelector = event.target.firstElementChild.getAttribute( 'href' );
    }

    // Get the reference to the target Tab Content
    targetTabContent = $( targetSelector );

    // When the active tab is the same as the target one, simply returns
    if ( activeTab && ( targetTabContent.id === activeTab.id )) {
      return;
    }

    if ( activeItem ) {
      activeItem.classList.remove(activeStatusClass);
    }

    targetItem.classList.add(activeStatusClass);

    if ( targetTabContent ) {
      activeTab.classList.remove(activeStatusClass);
      targetTabContent.classList.add(activeStatusClass);
    }

  }


  // Get all tabs in the page
  tabs = $$(selectors.tab);

  [].slice.call(tabs).forEach(function(tab) {
    tab.addEventListener( 'click', handleClick );
  });

}
