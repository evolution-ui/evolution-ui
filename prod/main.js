// (function() {
//   var activeBellow;

//   document.querySelector('.su_bellow').addEventListener('click', function(event) {
//     console.log(event.target);
//     console.log(event.target.tagName + ' is checked? ' + event.target.checked);
//     if (event.target.tagName === "INPUT" && event.target.classname === 'su_active-bellow') {
//       event.target.checked = false;
//       event.target.classList.remove('su_active-bellow');
//       console.log('class was found');
//     } else if (event.target.tagName === "INPUT" && event.target.classname !== 'su_active-bellow') {
//       event.target.classname = 'su_active-bellow';
//       event.target.checked = true;
//       console.log('class wasn\'t found.');
//     }
//   });

// })();

(function() {

  document.querySelector('body').addEventListener('mouseenter', function() {

    var alertClose = document.querySelectorAll('.su_alert-close');

    if (alertClose) {
      for (var i = 0; i < alertClose.length; i++) {
        alertClose[i].addEventListener('click', function() {
          var that = this;
          this.parentNode.classList.add('su_transparent');
          setTimeout(function() {
            that.parentNode.remove();
          }, 200);
        })
      }
    }
  });


})();

(function() {
  var currentSlide = 0;
  var carousel = document.querySelector('.su_carousel');
  var slides = document.querySelectorAll('.su_carousel-item');

  if (carousel) {
    function next() {
      slides[currentSlide].classList.remove('su_carousel-visible');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('su_carousel-visible');
    }

    function previous() {
      slides[currentSlide].classList.remove('su_carousel-visible');
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      slides[currentSlide].classList.add('su_carousel-visible');
    }

    document.querySelector('.su_carousel-next').addEventListener('click', function() {
      next();
    })

    document.querySelector('.su_carousel-prev').addEventListener('click', function() {
      previous();
    })
  }
})();

(function() {
	//logic

})();

(function() {
	//logic

})();

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

(function() {
	//logic

})();

(function() {
	//logic

})();

(function() {

  var modal = {

    init: function() {
      this.cacheDom();
      this.addEvents();
    },

    cacheDom: function() {
      this.modalTriggers = document.querySelectorAll('[data-modal-trigger]');
      this.simpleModal = document.querySelector('.su_modal-simple');
      this.imageModal = document.querySelector('.su_modal-image');
      this.videoModal = document.querySelector('.su_modal-video');
      this.modalClose = document.querySelectorAll('.su_modal-close');
    },

    addEvents: function() {
      var i, len = this.modalTriggers && this.modalTriggers.length;

      for ( i = 0; i < len; i++ ) {
        this.modalTriggers[i].addEventListener('click', this.showModal.bind(this));
      }

      len = this.modalClose.length;
      for ( i = 0; i < len; i++ ) {
        this.modalClose[i].addEventListener('click', this.hideModal.bind(this));
      }

    },

    showModal: function(e) {
      var modalType = e.target.dataset.modalTrigger,
          simpleModal = (modalType === 'simple') && this.simpleModal,
          imageModal = (modalType === 'image') && this.imageModal,
          videoModal = (modalType === 'video') && this.videoModal,
          modalContent = e.target.dataset.info,
          modalContentContainer;

      if ( simpleModal ) {
        modalContentContainer = simpleModal.querySelector('.su_modal-content');
        modalContentContainer.textContent = modalContent;
        simpleModal.classList.add('su_modal-active');
      }

      // Code for other modal types will go here

    },

    hideModal: function(e) {
      e.target.parentElement.classList.remove('su_modal-active');
    }

  }

  modal.init();

})();

(function() {

/* NAVIGATION COMPONENT */

  var menuControl = {

    init: function() {
      this.cacheDom();
      this.addEvents(this.menuToggles, 'click', this.toggleMenu);
      this.addEvents(this.menuLinks, 'click', this.highlightLink.bind(this));
    },

    cacheDom: function() {
      this.menuToggles = document.querySelectorAll('.su_menu-toggle');
      this.menuLinks = document.querySelectorAll('.su_navigation a');
    },

    addEvents: function(elements, event, eventHandler) {
      var i, len = elements && elements.length;

      for ( i = 0; i < len; i++ ) {
        elements[i].addEventListener(event, eventHandler);
      }

    },

    toggleMenu: function() {
      this.parentElement.classList.toggle('su_is-open');
    },

    highlightLink: function(e) {
      var i, len = this.menuLinks && this.menuLinks.length;
      for ( i = 0; i < len; i++ ) {
        if ( e.target === this.menuLinks[i] ) {
          this.menuLinks[i].classList.add('su_link-active');
        } else {
          this.menuLinks[i].classList.remove('su_link-active');
        }
      }
    }

  }

  menuControl.init();

})();

(function() {
	//logic

})();

(function() {
	//logic

})();

(function() {
	//logic

})();

(function() {
	//logic

})();

(function() {
	//logic

})();

(function() {
	//logic

})();
