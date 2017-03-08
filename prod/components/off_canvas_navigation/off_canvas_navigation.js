/* OFF CANVAS NAVIGATION COMPONENT  */

(function() {

  var offCanvasNav = {

    init: function() {
      this.cacheDom();
      this.addEvents();
    },

    cacheDom: function() {
      this.body = document.querySelector('body');
      this.navMenu = {
        'slide-in': document.querySelector('.su_offcanvas-menu-slide-in'),
        'slide-over': document.querySelector('.su_offcanvas-menu-slide-over'),
        'reveal': document.querySelector('.su_offcanvas-menu-reveal')
      };
      this.menuTriggers = document.querySelectorAll('button[data-menu-effect]');
      this.pageContent = document.querySelector('[class*="su_offcanvas-menu"] ~ .su_offcanvas-wrapper');
    },

    addEvents: function() {
      var i, len = this.menuTriggers && this.menuTriggers.length;
      if ( len ) {
        for ( i = 0; i < len; i++ ) {
          this.menuTriggers[i].addEventListener('click', this.showMenu.bind(this));
        }
      }
      this.pageContent && this.pageContent.addEventListener('click', this.closeMenu.bind(this));
    },

    closeMenu: function(e) {
      if ( !e.target.classList.contains('su_menu-triggers') ) {
        this.body.classList.remove('su_offcanvas-menu-active');
        for ( menuEffect in this.navMenu ) {
          this.navMenu[menuEffect].removeAttribute('data-menu-effect');
        }
      }
    },

    showMenu: function(e) {
      var menuEffect = e.target.dataset.menuEffect;
      e.target.classList.contains('su_menu-triggers') && this.body.classList.add('su_offcanvas-menu-active');
      this.navMenu[menuEffect].setAttribute('data-menu-effect', menuEffect);
    }

  }

  offCanvasNav.init();

})();

/* END OFF CANVAS NAVIGATION COMPONENT  */
