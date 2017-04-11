export default function() {

  var tabs, scrollTabs;

  var activeStatusClass = 'is-active';
  var selectors = {
    tab: '.evo_c-tab',
    list: '[class*="tab__list"]',
    item: '[class*="tab__item"]',
    scrollTabs: '[class*="tab--scroll"]',
    navigation: '[class*="tab__navigation"]',
    sticky: '[class*="tab__sticky"]'
  };

  var mediaTablet = 750;

  /**
   * Convert an Object List to an Array
   * @param  {Object}   list An Object list
   * @return {Array}
   */

  var toArr = function ( list ) {
      return [].slice.call( list );
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

  function setAriaStatus(tab, status) {
    var panelId = tab.firstElementChild.getAttribute('href');
    var panel   = $(panelId, panel);
    tab.setAttribute('aria-selected', status);
    panel && panel.setAttribute('aria-hidden', !status);
  }

  function initAriaStatus(tabComponent) {

    var tabs = toArr($$('[role="tab"]', tabComponent));
    var activeTab = $('[class$="tab__item ' + activeStatusClass +'"]', tabComponent);

    setAriaStatus(activeTab, true);

    tabs.filter(function(tab) {
      return !hasClassName(tab, activeStatusClass);
    }).forEach(function(tab) {
      setAriaStatus(tab, false);
    });

  }

  function handleKeyDown(event) {
    var key;
    var tabComponent;
    var targetLink;
    var tabList;
    var targetTab;
    var activeTab;


    event = event || window.event;
    targetLink = event.target;
    activeTab = targetLink.parentElement;
    tabComponent = getClosest(targetLink, selectors.tab);
    tabList    = getClosest(targetLink, selectors.list);
    key   = event.keyCode;


    if (key === 34 || key === 35) {
        // end / page down
        targetTab = tabList.lastElementChild;
    } else if (key === 33 || key === 36) {
        // home / page up
        targetTab = tabList.firstElementChild;
    } else if (key === 37 || key === 38) {
        // left/up arrow
        if (activeTab.previousElementSibling) {
            targetTab = activeTab.previousElementSibling;
        } else {
            targetTab = tabList.lastElementChild;
        }
    }  else if (key === 39 || key === 40) {
        // right/down arrow
        if (activeTab.nextElementSibling) {
            targetTab = activeTab.nextElementSibling;
        } else {
            targetTab = tabList.firstElementChild;
        }
    }

    if (key === 33 || key === 34 || key === 35 || key === 36 ||
        key === 37 || key === 38 || key === 39 || key === 40) {
        setActiveTab(tabComponent, targetTab);
    }

  }

  function setActiveTab(tabComponent, targetTab) {
    var oldActiveTab   = $('[class$="tab__item ' + activeStatusClass +'"]', tabComponent);
    var oldActivePanel = $('[class$="tab__panel ' + activeStatusClass +'"]', tabComponent);
    var link = targetTab && targetTab.firstElementChild;
    var targetPanelSel = link && link.getAttribute('href') || 'null';
    var targetPanel    = $( targetPanelSel, tabComponent );


    // When the active tab is the same as the target one, focus it and return
    if ( oldActiveTab && ( targetPanel.id === oldActivePanel.id )) {
      link.focus();
      return;
    }

    if (oldActiveTab && oldActivePanel) {
      oldActiveTab.classList.remove(activeStatusClass);
      oldActivePanel.classList.remove(activeStatusClass);
      setAriaStatus(oldActiveTab, false);
    }

    if (targetTab && targetPanel) {
      targetTab.classList.add(activeStatusClass);
      targetPanel.classList.add(activeStatusClass);
      setAriaStatus(targetTab, true);
      targetTab.firstElementChild.focus();
    }
  }


  function handleClick(event) {

    event.stopPropagation();
    event.preventDefault();

    var target = event.target;
    var targetSelector;
    var targetTab;
    var targetPanel;

    var isLink = hasClassName(target, 'tab__link');
    var isItem = hasClassName(target, 'tab__item');
    var isIcon = target.nodeName === 'I' || false;
    var tabComponent = getClosest(target, selectors.tab);
    var activeTab = $('[class$="tab__item ' + activeStatusClass +'"]', tabComponent);
    var activePanel = $('[class$="tab__panel ' + activeStatusClass +'"]', tabComponent);


    if (!isLink && !isItem && !isIcon) {
      // focus the link of the active tab
      activeTab.firstElementChild.focus();
      return;
    }

    if ( isItem ) {
      targetTab = target;
    } else {
      targetTab = getClosest(target, selectors.item);
    }

    setActiveTab(tabComponent, targetTab);
  }

  function getCompStyle(el) {
    return window.getComputedStyle(el);
  }

  function getAbsoluteHeight(el) {

    el = (typeof el === 'string') ? document.querySelector(el) : el;

    var styles = getCompStyle(el);
    var margin = parseFloat(styles['marginTop']) +
                 parseFloat(styles['marginBottom']);
    var padding = parseFloat(styles['paddingTop']) +
                  parseFloat(styles['paddingBottom']);

    return Math.ceil(el.offsetHeight + margin + padding);
  }

  function calculateMinHeight(scrollTab) {

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var navigation = $(selectors.navigation, scrollTab);
    var navigationH = navigation && getAbsoluteHeight(navigation) || 0;
    var sticky = $(selectors.sticky, scrollTab);
    var stickyH = sticky && getAbsoluteHeight(sticky) || 0;
    var isLateral = hasClassName(scrollTab, 'tab--lateral');
    var scrollTabs = $$('[class*="tab__panel"]', scrollTab);
    var activeItem = $('[class$="tab__item ' + activeStatusClass +'"]', scrollTab);
    var activeTabContent = $('[class$="tab__panel ' + activeStatusClass +'"]', scrollTab);
    var tallerTabContent;
    var firstTabContent = scrollTabs && scrollTabs[0];
    var scrollTabHeight = 0;


    scrollTabs = toArr(scrollTabs).sort(function(tabA, tabB) {
      return tabA.offsetHeight - tabB.offsetHeight;
    });


    tallerTabContent = scrollTabs[scrollTabs.length-1];

    // When the tab's type is lateral remove the top property (if any)
    if (isLateral) {
      scrollTabs.forEach(function(tab) {
        tab.style.top = null;
      })
    } else if (stickyH > 0) {
      // When there exists a sticky element, place the tab under it
      scrollTabs.forEach(function(tab) {
        var styles = getCompStyle(tab);
        var margin = parseFloat(styles['marginTop']);
        var padding = parseFloat(styles['paddingTop']);
        tab.style.top += stickyH + margin + padding + 'px';
      })
    }


    // When the tab's type is lateral and the viewport width is less than or
    // equal to the media tablet, add to each panel a top position equal
    // to the navigation's heigth
    if (isLateral && w <= mediaTablet) {
      scrollTabs.forEach(function(tab) {
        tab.style.top = navigationH +  stickyH + 'px';
      });
      scrollTabHeight = navigationH + stickyH + getAbsoluteHeight(tallerTabContent);
    } else {
      scrollTabHeight = getAbsoluteHeight(tallerTabContent) + stickyH;
    }

    scrollTab.style.minHeight = scrollTabHeight + 'px';

    // On load ad the status class on the first tab content
    if (!activeTabContent) {
      firstTabContent.classList.add(activeStatusClass);
    }

  }


  // Get all tabs in the page
  tabs       = $$(selectors.tab);
  scrollTabs = $$(selectors.scrollTabs);


  toArr(tabs).forEach(function(tab) {
    tab.addEventListener( 'click', handleClick );
  });

  // When all the content as been load, resize the min-height property
  // of scrollTabs
  window.addEventListener('load', function (event) {
    toArr(scrollTabs).forEach(function(scrollTab) {
        calculateMinHeight(scrollTab);
      });
  });

  window.addEventListener('DOMContentLoaded', function (event) {
    toArr(tabs).forEach(function(tab) {
        initAriaStatus(tab);
        tab.addEventListener('keyup', handleKeyDown );
      });
  });

  window.addEventListener('resize', function (event) {
    toArr(scrollTabs).forEach(function(scrollTab) {
        calculateMinHeight(scrollTab);
      });
  });

}
