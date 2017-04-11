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
          if ( this.classList.contains('evo_c-dot-navigation--jiggle') ) {
            dotNav.moveDot(e.target);
          } else if ( this.classList.contains('evo_c-dot-navigation--zap') ) {
            dotNav.drawLine(e.target, current);
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

    drawLine: function(target, current) {
      var line = document.querySelector('#evo_dot-line'),
          dotWidth = target.offsetWidth,
          dotLeft = target.offsetLeft,
          lineLeft;

      if ( target.tagName.toLowerCase() === 'li' ) {

        if ( !line ) {
          line = document.createElement('span');
          line.id = 'evo_dot-line';
          target.parentElement.appendChild(line);
          line.style.left = (current.offsetLeft + dotWidth / 2) + 'px';
          line.style.right = 'calc(100% - ' + (target.offsetLeft + dotWidth / 2) + 'px)';
        }

        lineLeft = line.offsetLeft;
        if ( lineLeft < target.offsetLeft ) {
          line.classList.remove('backwards');
        } else {
          line.classList.add('backwards');
        }
        line.style.left = (target.offsetLeft + dotWidth / 2) + 'px';
        line.style.right = 'calc(100% - ' + (target.offsetLeft + dotWidth / 2) + 'px)';
      }

    }

  }

  dotNav.init();

}

