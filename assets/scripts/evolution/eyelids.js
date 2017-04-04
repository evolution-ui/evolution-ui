export default function() {

/* EYELIDS COMPONENT */

  var eyelids = {

    width: 180,
    upperHeight: '',
    lowerTop: '',
    step: 10,
    limitUp: 400,
    limitDown: 50,
    enabled: false,
    helperCreated: false,
    transitionActive: true,
    key: '1',
    modifier: 'ctrlKey',
    helpItems: [
      'Hold "Shift" and scroll mouse to resize the highlight area.',
      'Toggle Eyelids with "Ctrl + 1"'
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
      this.notification = document.querySelector('.evo_c-eyelids-notification');
      this.shortcut = this.notification && this.notification.querySelector('code');
      this.top = document.createElement('div');
      this.bottom = document.createElement('div');
      this.helper = document.createElement('div');
      this.helper.classList.add('evo_c-eyelids-helper');
      this.top.classList.add('evo_c-eyelids--top');
      this.bottom.classList.add('evo_c-eyelids--bottom');
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
      var notification = this.notification,
          removeClass;
      if ( notification ) {
        if ( notification.classList.contains('is-active') ) {
          notification.classList.remove('is-active');
          window.clearTimeout(removeClass);
        } else {
          notification.classList.add('is-active');
          removeClass = window.setTimeout(function() {
            notification.classList.remove('is-active');
            window.clearTimeout(removeClass);
          }, 5000);
        }
      }
    },

    enable: function() {
      var _self = this;
      _self.bodyElement.appendChild(_self.top);
      _self.bodyElement.appendChild(_self.bottom);
      if ( !this.transitionActive ) {
        this.top.style.transition = 'all .2s ease-in-out 0s';
        this.bottom.style.transition = 'all .2s ease-in-out 0s';
        this.transitionActive = true;
        this.upperHeight = '0';
        this.lowerTop = '100vh';
        this.top.style.height = this.upperHeight;
        this.bottom.style.top = this.lowerTop;
      }
      var wait = window.setTimeout(function(){
        _self.upperHeight = 'calc(50vh - ' + _self.width / 2 + 'px)';
        _self.lowerTop = 'calc(50vh + ' + _self.width / 2 + 'px)';
        _self.top.style.height = _self.upperHeight;
        _self.bottom.style.top = _self.lowerTop;
        _self.enabled = true;
        _self.addHelper();
        window.clearTimeout(wait);
      }, 50);
    },

    disable: function() {
      var _self = this;
      if ( !this.transitionActive ) {
        this.top.style.transition = 'all .2s ease-in-out 0s';
        this.bottom.style.transition = 'all .2s ease-in-out 0s';
        this.transitionActive = true;
        this.upperHeight = '0';
        this.lowerTop = '100vh';
      }
      this.top.style.height = this.upperHeight;
      this.bottom.style.top = this.lowerTop;
      var wait = window.setTimeout(function(){
        _self.top = _self.bodyElement.removeChild(_self.top);
        _self.bottom = _self.bodyElement.removeChild(_self.bottom);
        _self.enabled = false;
        _self.removeHelper();
      }, 250);
    },

    follow: function(e) {
      // console.log('Follow started!');
      if ( this.transitionActive ) {
        this.top.style.transition = 'none';
        this.bottom.style.transition = 'none';
        this.transitionActive = false;
      }
      this.upperHeight = (e.clientY - this.width / 2) + 'px';
      this.lowerTop = (e.clientY + this.width / 2) + 'px';
      this.top.style.height = this.upperHeight;
      this.bottom.style.top = this.lowerTop;
    },

    toggle: function(e) {
      var key = e.key.toLowerCase(),
          followReference = this.follow.bind(this);

      // console.log(e.key);

      if ( this.enabled && (key === this.key && e[this.modifier] || key === 'escape') ) {
        e.preventDefault();
        this.disable();
        this.removeEvent(document, 'mousemove', followReference);
      } else if ( key === this.key && e[this.modifier] ) {
        e.preventDefault();
        this.enable();
        this.addEvent(document, 'mousemove', followReference);
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
