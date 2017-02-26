(function() {

// NAVIGATION COMPONENT

  var menuControl = {

    init: function() {
      this.cacheDom();
      this.addEvents(this.menuToggles, 'click', menuControl.action.toggleMenu);
      this.addEvents(this.menuLinks, 'click', menuControl.action.highlightLink);
    },

    cacheDom: function() {
      this.menuToggles = document.querySelectorAll('.su_menu-toggle');
      this.menuLinks = document.querySelectorAll('.su_navigation a');
    },

    addEvents: function(elements, event, eventHandler) {
      var i, len = elements.length;

      for ( i = 0; i < len; i++ ) {
        elements[i].addEventListener(event, eventHandler);
      }

    },

    action: {
      toggleMenu: function() {
        this.parentElement.classList.toggle('su_is-open');
      },
      highlightLink: function() {
        var i, len = menuControl.menuLinks.length;
        for ( i = 0; i < len; i++ ) {
          menuControl.menuLinks[i].classList.remove('su_link-active');
        }
        this.classList.add('su_link-active');
      }
    }

  }

  menuControl.init();

})();
