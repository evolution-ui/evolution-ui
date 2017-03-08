/* ACCORDION COMPONENT */
(function() {
  var bellows = document.querySelector('.su_accordion');

  bellows && bellows.addEventListener('click', function(event) {
    if (event.target.tagName === "INPUT") {
      if (!(event.target.className === "su_active-bellow-flag")) {
        event.target.classList.add("su_active-bellow-flag");
      } else if (event.target.className === "su_active-bellow-flag") {
        event.target.checked = false;
        event.target.classList.remove("su_active-bellow-flag");
        event.target.blur();
      }
    }
  });
})();
/* END ACCORDION COMPONENT */

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
  var slides = document.querySelectorAll('.su_carousel-wrap .su_carousel-item');

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

  var carouselSlide = document.querySelector('.su_carousel-slide');

  if (carouselSlide) {
    var slideList = document.querySelectorAll('.su_carousel-slide .su_carousel-item');

    function getCurrentIndex() {
      for (var i = 0; i < slideList.length; i++) {
        if (slideList[i] === document.querySelector('.su_carousel-slide .current')) {
          return i;
        }
      }
    }
    var currentIndex = getCurrentIndex();
    var prevIndex = (getCurrentIndex() - 1 + slideList.length) % slideList.length;
    var nextIndex = (getCurrentIndex() + 1) % slideList.length;

    function updateIndices() {
      currentIndex = getCurrentIndex();
      prevIndex = (getCurrentIndex() - 1 + slideList.length) % slideList.length;
      nextIndex = (getCurrentIndex() + 1) % slideList.length;
    }

    slideCarouselPrev = document.querySelector('.su_carousel-slide-wrap .su_carousel-prev');
    slideCarouselNext = document.querySelector('.su_carousel-slide-wrap .su_carousel-next');

    slideCarouselPrev.addEventListener('click', function() {
      slideList[currentIndex].classList.add('reversing');
      slideList[currentIndex].classList.remove('current');
      slideList[prevIndex].classList.add('current');
      setTimeout(function() {
        slideList[currentIndex].classList.remove('reversing');
        updateIndices();
      }, 500)
    })

    slideCarouselNext.addEventListener('click', function() {
      slideList[currentIndex].classList.add('advancing');
      slideList[currentIndex].classList.remove('current');
      slideList[nextIndex].classList.add('current');
      setTimeout(function() {
        slideList[currentIndex].classList.remove('advancing');
        updateIndices();
      }, 500)
    })
  }

  var multiCarousel = document.querySelector('.su_multi-carousel');

  if (multiCarousel) {
    var mslideList = document.querySelectorAll('.su_multi-carousel .su_carousel-item');

    function mgetCurrentIndex() {
      for (var i = 0; i < mslideList.length; i++) {
        if (mslideList[i] === document.querySelector('.su_multi-carousel .current')) {
          return i;
        }
      }
    }
    var mcurrentIndex = mgetCurrentIndex();
    var mprevIndex = (mgetCurrentIndex() - 1 + mslideList.length) % mslideList.length;
    var mnextIndex = (mgetCurrentIndex() + 1) % mslideList.length;

    function mupdateIndices() {
      mcurrentIndex = mgetCurrentIndex();
      mprevIndex = (mgetCurrentIndex() - 1 + mslideList.length) % mslideList.length;
      mnextIndex = (mgetCurrentIndex() + 1) % mslideList.length;
    }

    mslideCarouselPrev = document.querySelector('.su_multi-carousel-wrap .su_carousel-prev');
    mslideCarouselNext = document.querySelector('.su_multi-carousel-wrap .su_carousel-next');

    mslideCarouselPrev.addEventListener('click', function() {
      mslideList[mcurrentIndex].classList.add('reversing');
      mslideList[mcurrentIndex].classList.remove('current');
      mslideList[mprevIndex].classList.add('current');
      setTimeout(function() {
        mslideList[mcurrentIndex].classList.remove('reversing');
        mupdateIndices();
      }, 500)
    })

    mslideCarouselNext.addEventListener('click', function() {
      mslideList[mcurrentIndex].classList.add('advancing');
      mslideList[mcurrentIndex].classList.remove('current');
      mslideList[mnextIndex].classList.add('current');
      setTimeout(function() {
        mslideList[mcurrentIndex].classList.remove('advancing');
        mupdateIndices();
      }, 500)
    })
  }

})();

;(function() {

  function $(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  function $$(selector, parent) {
    return (parent || document).querySelectorAll(selector);
  }

  function hasClass(target, className) {
    return target.classList.contains(className);
  }

  var crumbleList = $$( '.su_crumble__list' );

  function CrumbleList( element ) {
    this.element = element;
    this.handleClick();
  }

  CrumbleList.prototype.handleClick = function() {

    this.element.addEventListener( 'click', function( event ) {

      event.stopPropagation();

      var target = event.target;

      if ( hasClass(target,'su_crumble__icon--expand') ) {

        target = target.parentElement.parentElement;

        $('.su_crumble__span' , target).classList.toggle('su_crumble__span--isActive');
        $('.su_crumble_inner' , target).classList.toggle('su_crumble_inner--isActive');

        $('.su_crumble_inner__header', target).classList.toggle('js_crumble_rotate_initial');
        $('.su_crumble_inner__body', target).classList.toggle('js_crumble_rotate_initial');

      } else if ( hasClass(target, 'su_crumble__icon--close') ) {
        target.parentElement.classList.remove('js_crumble_rotate_initial');
        target.parentElement.nextElementSibling.classList.remove('js_crumble_rotate_initial');
        target.parentElement.parentElement.classList.remove('su_crumble_inner--isActive');
        target.parentElement.parentElement.previousElementSibling.classList.remove('su_crumble__span--isActive');
      }
    });
  };

  if ( crumbleList.length === 0 ) {
    return;
  }

  [].slice.call(crumbleList).forEach( function(element) {
      new CrumbleList(element);
  });

})();

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
          if ( this.classList.contains('su_dot-navigation-jiggle') ) {
            dotNav.moveDot(e.target);
          } else if ( this.classList.contains('su_dot-navigation-zap') ) {
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

      if ( target.tagName.toLowerCase() === 'li' ) {
        mask.classList.add('moving');
        clearTimeout(stopMove);
        var stopMove = setTimeout(function() {
          mask.classList.remove('moving');
        }, 300);
        mask.style.left = target.offsetLeft + 'px';
      }

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
      this.modalTypes = document.querySelectorAll('[data-modal-type]');
      this.modal = document.querySelector('.su_modal');
      this.modalClose = document.querySelector('.su_modal-close');
    },

    addEvents: function() {
      var i, len = this.modalTypes && this.modalTypes.length;

      // if there are no modals on the page, do not add listeners
      if ( !len ) return;

      for ( i = 0; i < len; i++ ) {
        this.modalTypes[i].addEventListener('click', this.showModal.bind(this));
      }

      this.modalClose.addEventListener('click', this.hideModal.bind(this));

    },

    showModal: function(e) {
      var modal = this.modal,
          modalType = e.target.dataset.modalType,
          modalTextContent = e.target.dataset.modalTitle,
          modalMediaContent = e.target.dataset.modalMedia,
          modalContentContainer;

      if ( modal ) {
        modalMediaContentContainer = modal.querySelector('.su_modal-media');
        modalMediaContentContainer.innerHTML = '';
        modalMediaContentContainer.appendChild(this.addMedia[modalType](modalMediaContent, e));
        modalTextContentContainer = modal.querySelector('.su_modal-title');
        modalTextContentContainer.textContent = modalTextContent;
        modal.classList.add('su_modal-active');
      }

    },

    addMedia: {
      simple: function(content, e) {
        console.log(content);
        var element = document.createElement('p');
        element.innerHTML = content || 'No content provided!';
        return element;
      },
      image: function(content, e) {
        var element = document.createElement('img'),
        // if the image url is explicitly provided through 'data-modal-media' attribute, use that url
        // else use the 'src' attribute from the 'img' tag, and if that somehow does not exist, use placeholder image
            url = content || e.target.getAttribute('src') || '../img/no_image.png';
        element.setAttribute('src', url);
        return element;
      },
      video: function(content, e) {
        var element = document.createElement('div'),
            iframe = document.createElement('iframe'),
            url = content || 'https://www.youtube.com/embed/Sw5TfUi5rtQ'; // read url from 'data-modal-media' attribute, or fall back to this video
        iframe.setAttribute('src', url);
        iframe.setAttribute('frameborder', 0);
        element.classList.add('su_video_container');
        element.appendChild(iframe);
        return element;
      }
    },

    hideModal: function(e) {
      e.target.parentElement.classList.remove('su_modal-active');
    }

  };

  modal.init();

})();

(function() {
  var clipboard = document.createElement('textarea');
  clipboard.id = 'clipboard';
  clipboard.style.position = 'absolute';
  clipboard.style.top = '0px';
  clipboard.style.left = '9999px';

  document.querySelector('body').appendChild(clipboard);

  function notification(x, y) {
    var notification = document.createElement('span');
    notification.classList.add('su_multi-copy');
    notification.style.top = (y - 50) + 'px';
    notification.style.left = (x - 30) + 'px';
    notification.innerHTML = 'Copied!';
    document.querySelector('body').appendChild(notification);
    setTimeout(function() {
      document.querySelector('body').removeChild(notification);
    }, 1000)
  }

  document.querySelector('body').addEventListener('click', function(e) {
    if (window.getSelection().toString() !== "") {
      clipboard.value += window.getSelection().toString() + '\n\n';
      clipboard.select();
      document.execCommand('copy');

      notification(e.clientX, e.clientY);
    }
  });
})();

/* NAVIGATION COMPONENT */

(function() {

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

  };

  menuControl.init();

})();

/* END NAVIGATION COMPONENT */

/* OFF CANVAS NAVIGATION COMPONENT  */

(function() {

  var offCanvasNav = {

    init: function() {
      this.cacheDom();
      this.addEvents();
    },

    cacheDom: function() {
      this.body = document.querySelector('body');
      this.navMenu = {
        'slide-in': document.querySelector('.su_offcanvas-navigation-slide-in'),
        'slide-over': document.querySelector('.su_offcanvas-navigation-slide-over'),
        'reveal': document.querySelector('.su_offcanvas-navigation-reveal')
      };
      this.menuTriggers = document.querySelectorAll('button[data-menu-effect]');
      this.pageContent = document.querySelector('[class*="su_offcanvas-navigation"] ~ .su_content-wrapper');
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
      if ( !e.target.classList.contains('su_menu-triggers') ) {
        this.body.classList.remove('su_offcanvas-navigation-active');
        for ( menuEffect in this.navMenu ) {
          this.navMenu[menuEffect].removeAttribute('data-menu-effect');
        }
      }
    },

    showMenu: function(e) {
      var menuEffect = e.target.dataset.menuEffect;
      e.target.classList.contains('su_menu-triggers') && this.body.classList.add('su_offcanvas-navigation-active');
      this.navMenu[menuEffect].setAttribute('data-menu-effect', menuEffect);
    }

  }

  offCanvasNav.init();

})();

/* END OFF CANVAS NAVIGATION COMPONENT  */

/* PAGINATION COMPONENT */

(function() {
  var paginationBlocks = document.querySelectorAll('.su_pagination'),
      i, len = paginationBlocks && paginationBlocks.length,
      paginationItems,
      j, size;

  function applyDisabledStyles(node) {
    node.style.backgroundColor = '#f0f0ed';
    node.style.color = '#c4c4b3';
    node.style.border = '1px solid #c4c4b3';
    node.style.pointerEvents = 'none';
  }

  for ( i = 0; i < len; i++ ) {
    paginationItems = paginationBlocks[i].querySelectorAll('li');
    size = paginationItems && paginationItems.length;
    for ( j = 0; j < size; j++ ) {
      if ( paginationItems && paginationItems[j].classList.contains('su_current-page') ) {
        if ( j === 1 ) {
          applyDisabledStyles(paginationItems[j - 1]);
        } else if ( j === size - 2 ) {
          applyDisabledStyles(paginationItems[size - 1]);
        }
      }
    }
  }

})();

/* END PAGINATION COMPONENT */

(function() {
	//logic

})();

/** SCROLLSPY COMPONENT **/
(function() {
  var heading1 = document.getElementById('heading1');
  var heading2 = document.getElementById('heading2');
  var heading3 = document.getElementById('heading3');
  var heading4 = document.getElementById('heading4');
  var heading5 = document.getElementById('heading5');
  var tab1 = document.getElementById('tab1');
  var tab2 = document.getElementById('tab2');
  var tab3 = document.getElementById('tab3');
  var tab4 = document.getElementById('tab4');
  var tab5 = document.getElementById('tab5');
  var scrollSpyDiv = document.querySelector('.su_scrollspy-container');

  scrollSpyDiv && scrollSpyDiv.addEventListener('scroll', function() {
      var currentActiveTab = document.querySelector('.su_scrollspy-active');

      if (Math.abs(heading1.getBoundingClientRect().top - tab1.getBoundingClientRect().bottom) <= 7) {
        if (currentActiveTab !== null) {
          currentActiveTab.classList.remove('su_scrollspy-active');
        }
        tab1.classList.add('su_scrollspy-active');
      }

      if (Math.abs(heading2.getBoundingClientRect().top - tab1.getBoundingClientRect().bottom) <= 7) {
        if (currentActiveTab !== null) {
          currentActiveTab.classList.remove('su_scrollspy-active');
        }
        tab2.classList.add('su_scrollspy-active');
      }

      if (Math.abs(heading3.getBoundingClientRect().top - tab1.getBoundingClientRect().bottom) <= 7) {
        if (currentActiveTab !== null) {
          currentActiveTab.classList.remove('su_scrollspy-active');
        }
        tab3.classList.add('su_scrollspy-active');
      }

      if (Math.abs(heading4.getBoundingClientRect().top - tab1.getBoundingClientRect().bottom) <= 7) {
        if (currentActiveTab !== null) {
          currentActiveTab.classList.remove('su_scrollspy-active');
        }
        tab4.classList.add('su_scrollspy-active');
      }

      if (Math.abs(heading5.getBoundingClientRect().top - tab1.getBoundingClientRect().bottom) <= 7) {
        if (currentActiveTab !== null) {
          currentActiveTab.classList.remove('su_scrollspy-active');
        }
        tab5.classList.add('su_scrollspy-active');
      }
    });
})();
/** END SCROLLSPY COMPONENT **/

(function() {
	//logic

})();

/** STICKY COMPONENT **/
(function() {
  var stickyElement = document.querySelector('.su_stick');
  var stickyElementLeftPosition = stickyElement && elementAbsolutePosition(stickyElement).docLeftDistance;
  var stickyElementTopPosition = stickyElement && elementAbsolutePosition(stickyElement).docTopDistance;
  var stickyElementEnd = document.querySelector('.su_stick-end');
  var stickyElementEndTopPosition = stickyElement && elementAbsolutePosition(stickyElementEnd).docTopDistance;
  var stuckFlag = false;

  if (stickyElement && stickyElementEnd) {
    window.onscroll = function(e) {
      var elementRelativePosition = stickyElement.getBoundingClientRect();
      if ((window.pageYOffset || document.documentElement.scrollTop) >= stickyElementTopPosition) {
        stickyElement.style.position = "fixed";
        stickyElement.style.top = 0;
        stickyElement.style.left = stickyElementLeftPosition + "px";
      } else if ((window.pageYOffset || document.documentElement.scrollTop) < stickyElementTopPosition) {
        stickyElement.style.position = "initial";
      }
      if ((window.pageYOffset || document.documentElement.scrollTop) >= stickyElementEndTopPosition - elementRelativePosition.height) {
        stickyElement.style.position = "absolute";
        stickyElement.style.top = elementAbsolutePosition(stickyElementEnd).docTopDistance - elementRelativePosition.height + "px";
        stickyElement.style.left = elementAbsolutePosition(stickyElement).docLeftDistance + "px";
      }
    };
  }
  function elementAbsolutePosition(element) {
    var elementBoundingBox = element.getBoundingClientRect();
    var scrolledLeftPosition = window.pageXOffset || document.documentElement.scrollLeft;
    var scrolledTopPosition = window.pageYOffset || document.documentElement.scrollTop;
    return  {
      docLeftDistance: elementBoundingBox.left + scrolledLeftPosition,
      docTopDistance: elementBoundingBox.top + scrolledTopPosition,
      docBottomDistance: elementBoundingBox.top + scrolledTopPosition
    };
  }
})();
/** END STICKY COMPONENT **/

(function() {
	//logic

})();

(function() {
	//logic

})();

(function() {
	//logic

})();

;(function() {

  function $(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  function offset( element ) {
    var rect = element.getBoundingClientRect();
    var scrollTop = window.pageYOffset                 ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop            ||
                    0;
    var scrollLeft = window.pageXOffset                  ||
                     document.documentElement.scrollLeft ||
                     document.body.scrollLeft            ||
                     0;

    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }

  function Wave( element, type ) {
    this.element = element;
    this.type = type;
    this.handleWave();
  }

  Wave.prototype.handleWave = function() {
    this.element.addEventListener('click' , function(event) {

      var target = event.target;

      var clientRect = target.getBoundingClientRect();
      var posX       = offset(target).left;
      var posY       = offset(target).top;
      var eleWidth   = Math.round(clientRect.width);
      var eleHeight  =  Math.round(clientRect.height);

      var newWave = null;

      var previousW = $( '.su_wave_inner' );
      var wave = document.createElement('SPAN');

      wave.classList.add('su_wave_inner');

      if ( previousW ) {
        // Remove any previous wave
        previousW.remove();
      }

      // Append the new Wave element
      target.append(wave);

      // Since the .su_wave_inner class has a border radius of 50%
      // Make the width and height the same so that we get a perfect circle
      if ( eleWidth >= eleHeight ) {
        eleHeight = eleWidth;
      } else {
        eleWidth = eleHeight;
      }

      // Get the center of the element
      var x = event.pageX - posX - eleWidth / 2;
      var y = event.pageY - posY - eleHeight / 2;

      newWave = $( '.su_wave_inner' );

      if ( !newWave ) {
        return;
      }

      newWave.style.width = eleWidth + 'px';
      newWave.style.height = eleWidth + 'px';
      newWave.style.top = y + 'px';
      newWave.style.left = x + 'px';
      newWave.classList.add('su_wave__effect');
    });
  };

  var waves = document.querySelectorAll( '.su_wave' );

  [].slice.call(waves).forEach(function(wave) {
    new Wave(wave);
  });
})();
