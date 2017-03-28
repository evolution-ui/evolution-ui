export default function() {

/* EYELIDS COMPONENT */

  var eyelids = {

    width: 180,
    step: 10,
    limitUp: 400,
    limitDown: 50,
    enabled: false,
    helperCreated: false,
    key: '1',
    modifier: 'ctrlKey',
    helpItems: [
      'Hold "Shift" and scroll mouse to resize the highlight area.',
      'Don\'t take crap from anyone!'
    ],

    init: function() {
      this.cacheDom();
      this.setShortcut();
      this.notify();
      this.addEvent(this.bodyElement, 'keydown', this.toggle.bind(this));
      this.addEvent(this.bodyElement, 'wheel', this.resize.bind(this));
      this.addEvent(this.notification, 'click', this.notify.bind(this));
    },

    cacheDom: function() {
      this.bodyElement = document.querySelector('body');
      this.notification = document.querySelector('.evo_eyelids-notification');
      this.shortcut = this.notification && this.notification.querySelector('code');
      this.top = document.createElement('div');
      this.bottom = document.createElement('div');
      this.helper = document.createElement('div');
      this.helper.classList.add('evo_eyelids-helper');
      this.top.classList.add('evo_eyelids-top');
      this.bottom.classList.add('evo_eyelids-bottom');
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

    setShortcut: function() {
      if ( this.shortcut ) {
        this.shortcut.textContent = this.modifier + ' + ' + this.key;
      }
    },

    notify: function() {
      var notification = this.notification;
      if ( notification ) {
        if ( notification.classList.contains('evo_active') ) {
          notification.classList.remove('evo_active');
          window.clearTimeout(removeClass);
        } else {
          notification.classList.add('evo_active');
          removeClass = window.setTimeout(function() {
            notification.classList.remove('evo_active');
            window.clearTimeout(removeClass);
          }, 5000);
        }
      }
    },

    enable: function() {
      this.bodyElement.appendChild(this.top);
      this.bodyElement.appendChild(this.bottom);
      // this.top.style.height = 'calc(50vh - ' + this.width / 2 + 'px)';
      // this.bottom.style.top = 'calc(50vh + ' + this.width / 2 + 'px)';
      this.enabled = true;
      this.addHelper();
    },

    disable: function() {
      this.top = this.bodyElement.removeChild(this.top);
      this.bottom = this.bodyElement.removeChild(this.bottom);
      this.enabled = false;
      this.removeHelper();
    },

    follow: function(e) {
      this.top.style.height = (e.clientY - this.width / 2) + 'px';
      this.bottom.style.top = (e.clientY + this.width / 2) + 'px';
    },

    toggle: function(e) {
      var key = e.key.toLowerCase();

      // console.log(e.key);

      if ( this.enabled && (key === this.key && e[this.modifier] || key === 'escape') ) {
        e.preventDefault();
        this.disable();
        this.removeEvent(document, 'mousemove', this.follow.bind(this));
      } else if ( key === this.key && e[this.modifier] ) {
        e.preventDefault();
        this.enable();
        this.addEvent(document, 'mousemove', this.follow.bind(this));
      }
    },

    resize: function(e) {
      if ( this.enabled && e.shiftKey ) {
        e.preventDefault();
        if ( e.deltaY > 0 ) {
          this.width += this.width < this.limitUp && this.step;
        } else {
          this.width -= this.width > this.limitDown && this.step;
        }
        this.follow(e);
      }
    },

    addHelper: function() {
      // if helper does not exist, i.e. the first run of eyelids, then create its content
      if ( !this.helperCreated ) {
        var note = document.createElement('p'),
            list = document.createElement('ul'),
            li,
            i, len = this.helpItems.length;

        for ( i = 0; i < len; i++ ) {
          li = document.createElement('li');
          li.textContent = this.helpItems[i];
          list.appendChild(li);
        }
        note.textContent = 'Eyelids help:';
        this.helper.appendChild(note);
        this.helper.appendChild(list);
        this.helperCreated = true;
      }

      // append helper to the body, this happens no matter if it's the first run or not
      this.bodyElement.appendChild(this.helper);
    },

    removeHelper: function() {
      this.helper = this.bodyElement.removeChild(this.helper);
    }

  };

  eyelids.init();

}
