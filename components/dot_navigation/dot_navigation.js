(function() {

  var dotNav = {

    init: function() {
      this.cacheDom();
      this.addEvents();
    },

    cacheDom: function() {
      this.dotNavContainers = document.querySelectorAll('.su_dot-navigation');
    },

    addEvents: function() {
      var i, len = this.dotNavContainers && this.dotNavContainers.length;

      for ( i = 0; i < len; i++ ) {
        this.dotNavContainers[i].addEventListener('click', function(e) {
          var current = this.querySelector('.su_dot-current');
          if ( e.target.tagName.toLowerCase() === 'li' && e.target !== current ) {
            current && current.classList.remove('su_dot-current');
            e.target.classList.add('su_dot-current');
          }
          if ( this.classList.contains('su_dot-navigation-move') ) {
            dotNav.moveDot(e.target);
          } else if ( this.classList.contains('su_dot-navigation-line') ) {
            dotNav.drawLine(e.target);
          }
        });
      }

    },

    moveDot: function(target) {
      var mask = document.querySelector('#su_dot-mask');

      if ( !mask ) {
        mask = document.createElement('span');
        mask.id = 'su_dot-mask';
        target.parentElement.appendChild(mask);
      }

      mask.style.left = target.tagName.toLowerCase() === 'li' && target.offsetLeft + 'px';

    },

    drawLine: function(target) {
      var line = document.querySelector('#su_dot-line'),
          left;

      if ( !line ) {
        line = document.createElement('span');
        line.id = 'su_dot-line';
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
