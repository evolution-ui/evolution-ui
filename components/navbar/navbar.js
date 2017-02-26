(function() {

/* NAVIGATION COMPONENT */

  var menuControl = {

    init: function() {
      this.cacheDom();
      this.addEvents(this.menuToggles, 'click', this.toggleMenu);
      this.addEvents(this.menuLinks, 'click', this.highlightLink.bind(this));
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

    toggleMenu: function() {
      this.parentElement.classList.toggle('su_is-open');
    },

    highlightLink: function(e) {
      var i, len = this.menuLinks.length;
      for ( i = 0; i < len; i++ ) {
        if ( e.target === this.menuLinks[i] ) {
          this.menuLinks[i].classList.add('su_link-active');
        } else {
          this.menuLinks[i].classList.remove('su_link-active');
        }
      }
    }

  }

  menuControl.init();

})();
