(function() {

/* EYELIDS COMPONENT */

  var eyelids = {

    width: 180,
    enabled: false,

    init: function() {
      this.cacheDom();
      this.notify();
      this.addEvent(this.bodyElement, 'keydown', this.toggle.bind(this));
      this.addEvent(this.notification, 'mouseenter', this.notifyStop.bind(this));
      this.addEvent(this.notification, 'click', this.notify.bind(this));
    },

    cacheDom: function() {
      this.bodyElement = document.querySelector('body');
      this.notification = document.querySelector('.su_eyelids-notification');
      this.top = document.createElement('div');
      this.bottom = document.createElement('div');
      this.top.classList.add('su_eyelids-top');
      this.bottom.classList.add('su_eyelids-bottom');
    },

    addEvent: function(target, eventType, eventHandler) {
      if ( target ) {
        target.addEventListener(eventType, eventHandler);
      } else return;
    },

    removeEvent: function(target, eventType, eventHandler) {
      if ( target ) {
        target.removeEventListener(eventType, eventHandler);
      } else return;
    },

    notify: function() {
      this.notification && this.notification.classList.add('su_active');
    },

    notifyStop: function() {
      this.notification && this.notification.classList.remove('su_active');
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

  };

  eyelids.init();

})();
