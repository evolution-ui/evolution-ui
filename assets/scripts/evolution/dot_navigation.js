(function() {

/* DOT NAVIGATION COMPONENT */

  var dotNav = {

    init: function() {
      this.cacheDom();
      this.addEvents();
    },

    cacheDom: function() {
      this.dotNavContainers = document.querySelectorAll('.evo_dot-navigation');
    },

    addEvents: function() {
      var i, len = this.dotNavContainers && this.dotNavContainers.length;

      for ( i = 0; i < len; i++ ) {
        this.dotNavContainers[i].addEventListener('click', function(e) {
          var current = this.querySelector('.evo_dot-current');
          if ( e.target.tagName.toLowerCase() === 'li' && e.target !== current ) {
            current && current.classList.remove('evo_dot-current');
            e.target.classList.add('evo_dot-current');
          }
          if ( this.classList.contains('evo_dot-navigation-jiggle') ) {
            dotNav.moveDot(e.target);
          } else if ( this.classList.contains('evo_dot-navigation-zap') ) {
            dotNav.drawLine(e.target);
          }
        });
      }

    },

    moveDot: function(target) {
      var mask = document.querySelector('#evo_dot-mask');

      if ( !mask ) {
        mask = document.createElement('span');
        mask.id = 'evo_dot-mask';
        target.parentElement.appendChild(mask);
      }

      if ( target.tagName.toLowerCase() === 'li' ) {
        mask.classList.add('moving');
        window.clearTimeout(stopMove);
        var stopMove = window.setTimeout(function() {
          mask.classList.remove('moving');
        }, 300);
        mask.style.left = target.offsetLeft + 'px';
      }

    },

    drawLine: function(target) {
      var line = document.querySelector('#evo_dot-line'),
          left;

      if ( !line ) {
        line = document.createElement('span');
        line.id = 'evo_dot-line';
        line.style.left = '23px';
        target.parentElement.appendChild(line);
      }

      if ( target.tagName.toLowerCase() === 'li' ) {
        left = 1 * line.style.left.split('px')[0];
        if ( left < target.offsetLeft ) {
          line.classList.remove('backwards');
        } else {
          line.classList.add('backwards');
        }
        line.style.right = 'calc(100% - ' + (target.offsetLeft + 10) + 'px';
        line.style.left = (target.offsetLeft + 10) + 'px';
      }

    }

  }

  dotNav.init();

})();

