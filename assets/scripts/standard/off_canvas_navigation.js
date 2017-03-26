(function() {

/* OFF CANVAS NAVIGATION COMPONENT  */

  var offCanvasNav = {

    init: function() {
      this.cacheDom();
      this.addEvents();
    },

    cacheDom: function() {
      this.body = document.querySelector('body');
      this.navMenu = {
        'slide-in': document.querySelector('.evo_offcanvas-menu-slide-in'),
        'slide-over': document.querySelector('.evo_offcanvas-menu-slide-over'),
        'reveal': document.querySelector('.evo_offcanvas-menu-reveal')
      };
      this.menuTriggers = document.querySelectorAll('button[data-menu-effect]');
      this.pageContent = document.querySelector('[class*="evo_offcanvas-menu"] ~ .evo_offcanvas-wrapper');
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
      if ( !e.target.classList.contains('evo_menu-triggers') ) {
        this.body.classList.remove('evo_offcanvas-menu-active');
        for ( menuEffect in this.navMenu ) {
          this.navMenu[menuEffect].removeAttribute('data-menu-effect');
        }
      }
    },

    showMenu: function(e) {
      var menuEffect = e.target.dataset.menuEffect;
      e.target.classList.contains('evo_menu-triggers') && this.body.classList.add('evo_offcanvas-menu-active');
      this.navMenu[menuEffect].setAttribute('data-menu-effect', menuEffect);
    }

  }

  offCanvasNav.init();

})();
