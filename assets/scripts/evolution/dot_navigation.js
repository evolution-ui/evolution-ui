export default function() {

/* DOT NAVIGATION COMPONENT */

  var dotNav = {

    init: function() {
      this.cacheDom();
      this.addEvents();
    },

    cacheDom: function() {
      this.dotNavContainers = document.querySelectorAll('.evo_c-dot-navigation');
    },

    addEvents: function() {
      var i, len = this.dotNavContainers && this.dotNavContainers.length;

      for ( i = 0; i < len; i++ ) {
        this.dotNavContainers[i].addEventListener('click', function(e) {
          var current = this.querySelector('.is-active');
          if ( e.target.tagName.toLowerCase() === 'li' && e.target !== current ) {
            current && current.classList.remove('is-active');
            e.target.classList.add('is-active');
          }
        });
      }
    }

  }

  dotNav.init();

}

