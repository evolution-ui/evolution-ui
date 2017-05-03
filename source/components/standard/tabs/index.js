export default function () {

  function Tab(element) {

    var activeStatus = 'is-active';

    this.component = element;
    this._activeStatus = activeStatus;
    this.isScrollable = this._hasClassName(element, 'tab--scroll');
    this.isLateral = this._hasClassName(element, 'tab--lateral');
    this.flexDirection = this._getCompStyle(element)['flex-direction'];


    this.selectors = {
      component: '.evo_c-tab',
      tab: '[role="tab"]',
      panel: '[class*="tab__panel"]',
      list: '[class*="tab__list"]',
      item: '[class*="tab__item"]',
      scrollTabs: '[class*="tab--scroll"]',
      navigation: '[class*="tab__navigation"]',
      sticky: '[class*="tab__sticky"]',
      activeTab: '[class$="tab__item ' + activeStatus + '"]',
      activePanel: '[class$="tab__panel ' + activeStatus + '"]'
    }

    this.init();
  }

  Tab.prototype.init = function () {
    var self = this;

    this.cacheDOM = {
      tabs: self._$$(self.selectors.tab, self.component),
      panels: self._$$(self.selectors.panel, self.component),
      navigation: self._$(self.selectors.navigation, self.component),
      list: self._$(self.selectors.list, self.component),
      sticky: self._$(self.selectors.sticky, self.component),
      scrollTabs: self._$$(self.selectors.scrollTabs, self.component),
      activeTab: self._$(self.selectors.activeTab, self.component),
      activePanel: self._$(self.selectors.activePanel, self.component),
    }

    this.calculateInitSizes();
    this.initARIA();
    this.addClickListener();
    this.addKeyDownListener();

    // When a tab is scrollable we need to handle the sizes
    if (this.isScrollable) {
      this.handlePanelsHeight();
      this.addResizeListener();
    }
  };

  Tab.prototype.calculateInitSizes = function () {

    var stickyH;
    var navigationH;


    stickyH = this.cacheDOM['sticky'] &&
        this._getAbsoluteHeight(this.cacheDOM['sticky']) || 0;

    navigationH = this.cacheDOM['navigation'] &&
        this._getAbsoluteHeight(this.cacheDOM['navigation']) || 0;


    this.sizes = {
      viewportW: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      viewportH: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
      navigation: navigationH,
      sticky: stickyH,
      tallestPanel: 0
    }
  }

  Tab.prototype.initARIA = function () {

    var self = this;
    var tabs = self._toArr(self.cacheDOM['tabs']);

    self.setAriaStatus(self.cacheDOM['activeTab'], true);

    tabs.filter(function (tab) {
      return !self._hasClassName(tab, self._activeStatus);
    }).forEach(function (tab) {
      self.setAriaStatus(tab, false);
    });

  }

  Tab.prototype.addClickListener = function () {

    this.component.addEventListener('click', this.handleClick.bind(this));
  }

  Tab.prototype.addResizeListener = function () {

    var self = this;

    window.addEventListener('resize', self._throttle(function () {
      self.handleResize();
    }, 50));

  }

  Tab.prototype.handlePanelsHeight = function () {
    var self = this;
    window.addEventListener('DOMContentLoaded', function (event) {
      self._calculateTallestPanel(self.handleResize.bind(self));
    });
    window.addEventListener('load', function (event) {
      self._calculateTallestPanel(self.handleResize.bind(self));
    });
  }


  Tab.prototype.handleResize = function () {

    var viewportW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var flexD = this._getCompStyle(this.component)['flex-direction'];

    var activePanel = this.cacheDOM['activePanel'];
    var panels = this.cacheDOM['panels'];
    var tallestPanel = this.cacheDOM['tallestPanel'];
    var sticky = this.cacheDOM['sticky'];

    var tallestPanelH;
    var navigationH;
    var stickyH = this.sizes['sticky'];
    var minHeightComponent = 0;
    var panelTop = 0;


    if (!this.cacheDOM['activePanel']) {
      return;
    }

    navigationH = this._getAbsoluteHeight(this.cacheDOM['navigation']) || 0;
    tallestPanelH = this._getAbsoluteHeight(this.cacheDOM['tallestPanel']) || 0;


    // When the tab's type is lateral and the viewport width is less than or
    // equal to the media tablet, add to each panel a top position equal
    // to the navigation's heigth
    if (viewportW < 750 || !this.isLateral) {

      minHeightComponent = navigationH + stickyH + tallestPanelH;
      panelTop = navigationH + stickyH;

    } else {

      minHeightComponent = tallestPanelH + stickyH;
      panelTop = stickyH;

    }

    if (this.isLateral) {
      this._toArr(panels).forEach(function (panel) {
        panel.style.top = panelTop + 'px';
      })
    }


    this.component.style.minHeight = minHeightComponent + 'px';

    this.sizes.viewportW = viewportW;

  }

  Tab.prototype.handleClick = function (event) {

    var target = event.target;
    var targetSelector;
    var targetTab;
    var targetPanel;

    var isLink = this._hasClassName(target, 'tab__link');
    var isItem = this._hasClassName(target, 'tab__item');
    var isIcon = target.nodeName === 'I' || false;
    var tabComponent = this._getClosest(target, this.selectors['tab']);


    if (!isLink && !isItem && !isIcon) {
      return;
    }

    event.stopPropagation();
    event.preventDefault();

    if (isItem) {
      targetTab = target;
    } else {
      targetTab = this._getClosest(target, this.selectors['item']);
    }

    this.setActiveTab(targetTab);
  }

  Tab.prototype.addKeyDownListener = function () {
    this.component.addEventListener('keyup', this.handleKeyDown.bind(this));
  }

  Tab.prototype.handleKeyDown = function (event) {
    var key;
    var tabComponent;
    var targetLink;
    var tabList;
    var targetTab;
    var activeTab;


    event = event || window.event;
    targetLink = event.target;
    activeTab = targetLink.parentElement;
    tabComponent = this._getClosest(targetLink, this.selectors['tab']);
    tabList = this._getClosest(targetLink, this.selectors['list']);
    key = event.keyCode;


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
    } else if (key === 39 || key === 40) {
      // right/down arrow
      if (activeTab.nextElementSibling) {
        targetTab = activeTab.nextElementSibling;
      } else {
        targetTab = tabList.firstElementChild;
      }
    }

    if (!targetTab) {
      return;
    }

    if (key === 33 || key === 34 || key === 35 || key === 36 ||
        key === 37 || key === 38 || key === 39 || key === 40) {
      this.setActiveTab(targetTab);
    }

  }

  Tab.prototype.setAriaStatus = function (tab, status) {
    var panelId = tab.firstElementChild.getAttribute('href');
    var panel = this._$(panelId, panel);

    tab.setAttribute('aria-selected', status);
    panel && panel.setAttribute('aria-hidden', !status);
  }

  Tab.prototype.setActiveTab = function (targetTab) {

    var oldTab = this.cacheDOM['activeTab'];
    var oldPanel = this.cacheDOM['activePanel'];

    var link = targetTab && targetTab.firstElementChild;
    var targetPanelSel = link && link.getAttribute('href') || 'null';
    var targetPanel = this._$(targetPanelSel, this.component);


    if (!oldTab) {
      console.log('Your Tab component does not contain an active tab item');
    }

    if (!oldPanel) {
      console.log('Your Tab component does not contain a [default] active panel');
    }

    if (!targetPanel) {
      console.log('Your Tab component does not contain a panel with ID ' + targetPanelSel);
    }

    // When the active tab is the same as the target one, focus it and return
    if (oldTab && targetPanel && oldPanel && ( targetPanel.id === oldPanel.id )) {
      link.focus();
      return;
    }

    if (oldTab && oldPanel) {
      oldTab.classList.remove(this._activeStatus);
      oldPanel.classList.remove(this._activeStatus);
      this.setAriaStatus(oldTab, false);
    }

    if (targetTab && targetPanel) {
      targetTab.classList.add(this._activeStatus);
      targetPanel.classList.add(this._activeStatus);
      this.setAriaStatus(targetTab, true);
      targetTab.firstElementChild.focus();
    }

    //Update the cache
    this.cacheDOM['activeTab'] = targetTab;
    this.cacheDOM['activePanel'] = targetPanel;
  }

  Tab.prototype._calculateTallestPanel = function (callback) {

    var orderedTabs;
    var tallestPanel;

    orderedTabs = this._toArr(this.cacheDOM['panels']).sort(function (tabA, tabB) {
      return tabA.offsetHeight - tabB.offsetHeight;
    });

    tallestPanel = orderedTabs[orderedTabs.length - 1];

    // Store the information
    this.sizes.tallestPanel = this._getAbsoluteHeight(tallestPanel) || 0;
    this.cacheDOM.tallestPanel = tallestPanel;

    if (typeof callback === 'function') {
      callback();
    }

  }

  Tab.prototype._$ = function (selector, parent) {
    return (parent || document).querySelector(selector);
  }

  Tab.prototype._$$ = function (selector, parent) {
    return (parent || document).querySelectorAll(selector);
  }

  /**
   * Convert a List into an Array
   *
   * @param  {List}  A list
   * @return {Array}
   */

  Tab.prototype._toArr = function (list) {
    return [].slice.call(list);
  };


  Tab.prototype._getCompStyle = function (el) {
    return window.getComputedStyle(el);
  }


  Tab.prototype._hasClassName = function (node, subString) {
    return this._isNotEmptyA(this._getClassName(node, subString));
  }


  Tab.prototype._getAbsoluteHeight = function (el) {

    el = (typeof el === 'string') ? document.querySelector(el) : el;

    var styles = this._getCompStyle(el);
    var margin = parseFloat(styles['marginTop']) +
        parseFloat(styles['marginBottom']);
    var padding = parseFloat(styles['paddingTop']) +
        parseFloat(styles['paddingBottom']);

    return Math.ceil(el.offsetHeight + margin + padding);
  }

  Tab.prototype._isNotEmptyA = function (array) {
    return array.length > 0;
  }

  Tab.prototype._where = function (Arr) {

    return function (inclusionTest) {
      var results = [];
      var len = Arr.length;
      for (var i = 0; i < len; i++) {
        if (inclusionTest(Arr[i])) {
          results.push(Arr[i]);
        }
      }
      return results;
    }

  };

  Tab.prototype._getClassName = function (node, subString) {
    var list = this._toArr(node.classList);
    var where = this._where(list);

    return where(function (className) {
      return className.indexOf(subString) !== -1;
    });
  }

  /**
   * Get the closest matching element up the DOM tree.
   * @param  {Element} elem     Starting element
   * @param  {String}  selector Selector to match notwithstanding
   * @return {Boolean|Element}  Returns null if not match found
   */
  Tab.prototype._getClosest = function (elem, selector) {

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
          function (s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (i >= 0 && matches.item(i) !== this) {
              --i;
            }
            return i > -1;
          };
    }

    // Get closest match
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }

    return null;

  };

  Tab.prototype._throttle = function (fn, delay) {
    var timeout = null;
    var self = this;

    return function throttledFn() {
      window.clearTimeout(timeout);
      var ctx = this;
      var args = self._toArr(arguments);

      timeout = window.setTimeout(function callThrottledFn() {
        fn.apply(ctx, args);
      }, delay);
    }
  }

// ------------------------------------------------------------------------------


  // Get all tabs in the page
  var tabs = document.querySelectorAll('.evo_c-tab');

  [].slice.call(tabs).forEach(function (tab) {
    new Tab(tab);
  });


}

