(function() {

/* EYELIDS COMPONENT */

  var eyelids = {

    width: 180,
    enabled: false,

    init: function() {
      this.cacheDom();
      this.addEvent(this.bodyElement, 'keypress', this.toggle.bind(this));
    },

    cacheDom: function() {
      this.bodyElement = document.querySelector('body');
      this.top = document.createElement('div');
      this.bottom = document.createElement('div');
      this.top.classList.add('su_eyelids-top');
      this.bottom.classList.add('su_eyelids-bottom');
    },

    addEvent: function(target, eventType, eventHandler) {
      target.addEventListener(eventType, eventHandler);
    },

    removeEvent: function(target, eventType, eventHandler) {
      target.removeEventListener(eventType, eventHandler);
    },

    enable: function() {
      this.bodyElement.appendChild(this.top);
      this.bodyElement.appendChild(this.bottom);
      // this.top.style.height = 'calc(50vh - ' + this.width / 2 + 'px)';
      // this.bottom.style.top = 'calc(50vh + ' + this.width / 2 + 'px)';
      this.enabled = true;
    },

    disable: function() {
      this.top = this.bodyElement.removeChild(this.top);
      this.bottom = this.bodyElement.removeChild(this.bottom);
      this.enabled = false;
    },

    follow: function(e) {
      this.top.style.height = (e.clientY - this.width / 2) + 'px';
      this.bottom.style.top = (e.clientY + this.width / 2) + 'px';
    },

    toggle: function(e) {
      var key = e.key.toLowerCase(),
          shift = e.shiftKey;

      if ( this.enabled && (key === 's' && shift || key === 'escape') ) {
        this.disable();
        this.removeEvent(document, 'mousemove', this.follow.bind(this));
      } else if ( key === 's' && shift ) {
        this.enable();
        this.addEvent(document, 'mousemove', this.follow.bind(this));
      }
    }

  }

  eyelids.init();

})();
