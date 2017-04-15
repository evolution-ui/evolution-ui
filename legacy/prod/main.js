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

;(function() {

  function $$(selector, parent) {
    return (parent || document).querySelectorAll(selector);
  }

  function isPropertySupported( property ) {
    return property in document.body.style;
  }

  function isAnimation( attribute ) {
    return /^data-animation/.test(attribute.nodeName);
  }

  function applyAttributes( element ) {

    [].slice.call(element.attributes).filter(isAnimation).forEach(function(attribute) {

      var style;
      var propertyName = attribute.nodeName.replace(/^data-/, '');
      var value = attribute.nodeValue;
      var currentStyle = element.getAttribute( 'style') || '';

      if ( !isPropertySupported( propertyName )) {
        return;
      }

      style = propertyName + ':' + value;

      if ( isPropertySupported( '-webkit-' + propertyName ) ) {
        style += ';-webkit-' + propertyName + ':' + value;
      }

      element.setAttribute( 'style', style + ';' + currentStyle);

    });
  }

  document.addEventListener('DOMContentLoaded', function () {

    var animations = $$( '[class*=su_anim]' );

    [].slice.call(animations).forEach(applyAttributes);
  });

})();

(function() {

	'use strict';

  var suAudio = {
    player: '#audioplayer',
    track: 'audio',
    playback: '.su_track',
    playerIcons: {
      play: 'play_arrow',
      pause: 'pause',
      volumeOn: 'volume_up',
      volumeOff: 'volume_off'
    },

    getPlayer: function () {
      return document.querySelector(this.player);
    },

    getAudioTrack: function () {
      return this.getPlayer().querySelector(this.track);
    },

    changeIcon: function (el, icon) {
      el.textContent = icon;
    },

    play: function () {

      var track = this.getAudioTrack(),
          playButtonIcon = this.getPlayer()
                               .querySelector(this.playback + ' button i');

      if (track && playButtonIcon) {

        if (track.paused) {

          this.changeIcon(playButtonIcon, this.playerIcons.pause);
          track.play();

        } else {

          this.changeIcon(playButtonIcon, this.playerIcons.play);
          track.pause();

        }

      }

    },

    isPlaying: function() {
      var trackProgress = this.getPlayer()
                         .querySelector(this.playback + ' input[type="range"]'),
          track = this.getAudioTrack();

      if (track && trackProgress) {
        trackProgress.max = track.duration;
      }

    },

    updateTrack: function () {

      var player = this.getPlayer(),
          trackProgress = player.querySelector(this.playback + ' input[type="range"]'),
          track = this.getAudioTrack(),
          trackTime = player.querySelector('.su_track-time'),
          secs = parseInt(track.currentTime % 60),
          mins = parseInt((track.currentTime / 60) % 60);

      if (player && trackProgress && track && trackTime) {

        trackProgress.value = track.currentTime;
        secs = (secs >= 10) ? secs : '0' + secs;
        mins = (mins >= 10) ? mins : '0' + mins;
        trackTime.textContent = mins + ':' + secs;

      }

    },

    seekTrack: function() {
      var trackProgress = this.getPlayer().querySelector(this.playback + ' input[type="range"]'),
          track = this.getAudioTrack();

      if (track && trackProgress) {
        track.currentTime = trackProgress.value;
      }
    },

    finishPlay: function () {

      var track = this.getAudioTrack(),
          playButtonIcon = this.getPlayer()
                               .querySelector(this.playback + ' button i');

      if (track && playButtonIcon) {
        track.currentTime = 0;
        this.changeIcon(playButtonIcon, suAudio.playerIcons.play);
      }

    },

    isMute: function () {
      return this.getAudioTrack() && this.getAudioTrack().volume === 0;
    },

    mute: function () {

      var muteButtonIcon = this.getPlayer()
                               .querySelector('.su_track-volume button i');
      if (muteButtonIcon) {
        if (this.isMute()) {

          this.getAudioTrack().volume = 1;
          this.changeIcon(muteButtonIcon, this.playerIcons.volumeOn);

        } else {

          this.getAudioTrack().volume = 0;
          this.changeIcon(muteButtonIcon, this.playerIcons.volumeOff);

        }
      }

    }

  };

	var audioPlayer = suAudio.getPlayer();

  if (audioPlayer) {

    var audioTrack = audioPlayer.querySelector(suAudio.track),
        trackProgress = audioPlayer.querySelector(suAudio.playback + ' input[type="range"]'),
        playButton = audioPlayer.querySelector(suAudio.playback + ' button'),
        muteButton = audioPlayer.querySelector('.su_track-volume button');
    // Remove any default controls in favor of our own.
    audioTrack.removeAttribute('controls');
    // Add event listeners to make the player work
    playButton.addEventListener('click', suAudio.play.bind(suAudio), false);
    muteButton.addEventListener('click', suAudio.mute.bind(suAudio), false);
    audioTrack.addEventListener('playing', suAudio.isPlaying.bind(suAudio), false);
    audioTrack.addEventListener('timeupdate', suAudio.updateTrack.bind(suAudio), false);
    audioTrack.addEventListener('ended', suAudio.finishPlay.bind(suAudio), false);
    trackProgress.addEventListener('change', suAudio.seekTrack.bind(suAudio), false);

    // Only for demo. Remove on your live site.
    var audioPlayer2 = document.getElementById('audioplayer2'),
        audioPlayer3 = document.getElementById('audioplayer3');

    audioPlayer2.querySelector('audio').removeAttribute('controls');
    audioPlayer3.querySelector('audio').removeAttribute('controls');
  }


}());

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

(function () {

  'use strict';

  var codeElement = document.querySelectorAll('.su_code-example'),
      codeElementParent = codeElement.parentElement,
      stringsToReplace = {
        '<': '&lt;',
        '\">': '&quot;&gt;',
        '=\"': '=&quot;',
        '>': '&gt;'
      };


  for (var i = codeElement.length - 1; i >= 0; i--) {

    var code,
        codeContainer = document.createElement('div'),
        preCodeElement = document.createElement('pre');

    codeContainer.setAttribute('class', 'su_code-container');
    preCodeElement.setAttribute('class', 'su_code');

    code = codeElement[i].innerHTML.replace(/<|\">|=\"|>/gi, function(match) {
      return stringsToReplace[match];
    });

    preCodeElement.innerHTML = code;
    codeContainer.appendChild(preCodeElement);

    codeElement[i].parentElement.appendChild(codeContainer);

  }

}());
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

      var crumble = event.target;

      if ( hasClass(crumble,'su_crumble__icon--expand') ) {

        crumble = crumble.parentElement.parentElement;

        $('.su_crumble__span' , crumble).classList.toggle('su_crumble__span--isActive');
        $('.su_crumble_inner' , crumble).classList.toggle('su_crumble_inner--isActive');

        $('.su_crumble_inner__header', crumble).classList.toggle('js_crumble_rotate_initial');
        $('.su_crumble_inner__body', crumble).classList.toggle('js_crumble_rotate_initial');

      } else if ( hasClass(crumble, 'su_crumble__icon--close') ) {
        crumble.parentElement.classList.remove('js_crumble_rotate_initial');
        crumble.parentElement.nextElementSibling.classList.remove('js_crumble_rotate_initial');
        crumble.parentElement.parentElement.classList.remove('su_crumble_inner--isActive');
        crumble.parentElement.parentElement.previousElementSibling.classList.remove('su_crumble__span--isActive');
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
	//logic

})();

(function() {
	//logic

})();

(function() {

  var triggerPreview = document.querySelectorAll(".su_full_screen_preview"); //grab triggers of preview
  console.log(triggerPreview);

  if (triggerPreview.length > 0) {

    for(i=0; i < triggerPreview.length; i++) {

      (function(i) {
          triggerPreview[i].addEventListener('mouseover', function(){
            var triggerId = this.getAttribute("id"); // grab the id of hovered element
            var triggerOverlay = document.querySelector('.' + triggerId);

            triggerOverlay.style.width = "100%";
          });

          triggerPreview[i].addEventListener('mouseout', function(){
            var triggerId = this.getAttribute("id"); // grab the id of hovered element
            var triggerOverlay = document.querySelector('.' + triggerId);

            triggerOverlay.style.width = "0";
          });
      }(i));


    }

  }

})();

(function() {
	//logic

})();

(function() {
  var clipboard = document.createElement('textarea');
  clipboard.id = 'clipboard';
  clipboard.style.position = 'fixed';
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

(function() {


})();

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

(function () {

  'use strict';

  var suSift = {

    pick: '.su_basket--pick',
    drop: '.su_basket--drop',

    pickBasket: function () {

      var basket = document.querySelector(this.pick);

      if ( basket ) {
        return basket;
      }

    },

    dropBasket: function () {

      var basket = document.querySelector(this.drop);

      if ( basket ) {
        return basket;
      }

    },

    pickItem: function () {
      if ( this.pickBasket() ) {
        return this.pickBasket().firstElementChild; //removeChild(this.pickBasket().firstElementChild());
      }
    },

    removeItem: function () {
      if ( this.pickBasket() ) {
        this.pickBasket()
            .removeChild(this.pickItem());
      }
    },

    siftItem: function () {

      var item = this.pickItem(),
          siftDrop = this.dropBasket.bind(this);

      if (item) {

        item.classList.add('su_animate--siftOut')
        setTimeout(function () {
          item.classList.remove('su_animate--siftOut');
          item.classList.add('su_animate--siftIn');
          siftDrop().appendChild(item);
          //siftDrop().lastElementChild.classList.add('su_animate--sift');
        }, 1000);
      }
    }
  }

  if (suSift.pickBasket()) {
    suSift.pickBasket().addEventListener('click', function (e) {
      suSift.siftItem();
    });
  }



}());
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

  var tabs = document.querySelectorAll(".su_tabs-vertical-titles li"); //grab tabs
  var tabsArray = [].slice.call(tabs);
  var contents = document.querySelectorAll('.su_tabs-vertical-contents li'); //grab contents

  if (tabs.length > 0 ) {

    for(i=0; i < tabs.length; i++) {

        tabs[i].addEventListener('click', function(){

          for (j=0; j < contents.length; j++) {
            // Hide all content from tabs
            contents[j].style.display = "none";
          }

          this.parentElement.querySelector(".current").className = ""; // Remove class current from other tabs
          this.className = "current"; // Add class current to this tab

          contents[tabsArray.indexOf(this)].style.display = "block"; //show tab content that matches tab title index
      });
    }
  }

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
