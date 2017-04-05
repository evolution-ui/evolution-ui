export default function() {

  var tabs;

  var activeStatusClass = 'is-active';

  var pfx = ['webkit', 'moz', 'MS', 'o', ''];

  var $prefixedOn = function ( target, type, callback, useCapture ) {

    for ( var p = 0, length = pfx.length; p < length; p++ ) {
      if ( !pfx[p] ) {
        type = type.toLowerCase();
      }
      target.addEventListener( pfx[p]+type, callback, !!useCapture );
    }
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
    var targetTabContent;

    var isLink = hasClassName(event.target, 'tab__link');
    var isItem = hasClassName(event.target, 'tab__item');
    var activeTab = $('[class$="tab__tabcontent ' + activeStatusClass +'"]');
    var targetTab;


    if ( !isLink && !isItem ) {
      return;
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

    if ( targetTabContent ) {
      activeTab.classList.remove(activeStatusClass);
      targetTabContent.classList.add(activeStatusClass);
    }

  }



  tabs = $$('[class$="c-tab"] ');

  [].slice.call(tabs).forEach(function(tab) {
    tab.addEventListener( 'click', handleClick );
  });

}
