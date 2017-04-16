//--------fullscreen_gallery.js--------
export default function() {

  (function () {
  	'use strict';

  	var fsCarousel = {
      elements: {
        carouselEl: '.evo_c-fs-gallery',
        slide: '.evo_c-fs-gallery__slide',
        buttons: {
          closeBtn: '.evo_c-fs-gallery__icon-close',
          nextBtn: '.evo_c-fs-gallery__icon-next',
          prevBtn: '.evo_c-fs-gallery__icon-prev'
        }
      },
      slideIndicatorPositions: {},

      /**
       * Get the fullscreen carousel element
       * @return {DOM Node} a DOM node of the fs carousel.
       */
      getCarouselEl: function () {
        return document.querySelector(this.elements.carouselEl);
      },

      getSlides: function () {
        return this.getCarouselEl().querySelectorAll(this.elements.slide);
      },

      getElement: function (selector) {
        return this.getCarouselEl().querySelector(selector);      
      },

      getElements: function (selector) {
        return this.getCarouselEl().querySelectorAll(selector);
      },

      removeElements: function (selector) {

        var elements = this.getElements(selector);

        elements && elements.forEach(function (el, index) {
          el.remove();
        });

      },

      closeCarousel: function () {
        var nextButton = this.getElement(this.elements.buttons.nextBtn),
            prevButton = this.getElement(this.elements.buttons.prevBtn),
            carousel = this.getCarouselEl();

        nextButton.classList.remove('evo_s-is-hidden');
        prevButton.classList.remove('evo_s-is-hidden');
        carousel.classList.remove('evo_s-is-open');
        //carousel.classList.add('evo_c-fs-gallery__carousel--close');
        //setTimeout(function() {
          fsCarousel.getCarouselEl().classList.remove('evo_s-is-active');
        //}, 300);

        
        this.removeElements('.evo_c-fs-gallery__slides span');

      },

      loadSlideIndicators: function () {

        var slideWrapper = this.getElement('.evo_c-fs-gallery__slides'),
            num = this.getSlides().length,
            slideHeight = document.querySelector('.evo_c-fs-gallery.evo_s-is-active .evo_c-fs-gallery__slide').offsetHeight,
            fragment = document.createDocumentFragment(),
            span, val, bottom, top, i, position;

        if ( slideWrapper ) {

          for ( i = 0; i < num; i++ ) {

            position = {}; // reset object
            span = document.createElement('span');
            span.setAttribute('class', 'evo_c-fs-gallery__bars');
            val = i * 3;
            top = 'top: ' + val + 'px';
            val = (slideHeight - 39) + i * 3;
            bottom = 'top: ' + val + 'px';
            position.top = top;
            position.bottom = bottom;

            this.slideIndicatorPositions[i] = position;
            span.style.cssText = top;

            fragment.appendChild(span);

          }

          slideWrapper.appendChild(fragment);
        }
      },

      positionActiveSlideIndicator: function (index) {

        var rulers = this.getElements('.evo_c-fs-gallery__slides > span');
        
        if ( rulers ) {
          rulers[index].style.cssText = this.slideIndicatorPositions[index].bottom;
        }

      },

      nextSlide: function () {
        var slides = this.getSlides(),
            slideWrapper = this.getElement('.evo_c-fs-gallery__slides'),
            rulers = this.getElements('.evo_c-fs-gallery__slides > span'),
            //captions = this.getElements('.evo_c-fs-gallery__slide figcaption'),
            nextButton = this.getElement(this.elements.buttons.nextBtn),
            prevButton = this.getElement(this.elements.buttons.prevBtn);


        if( curPos < slides.length && slides){

          var slideHeight = slides[curPos].offsetHeight;

          if ( slides[curPos] ) {
            slideWrapper.style.height = slideHeight + 'px;';
            slides[curPos].classList.remove('su_mask-up');
            slides[curPos].classList.add('su_mask-down');
            curPos++;
            rulers[curPos].style.cssText = 'transition: all .3s cubic-bezier(0.190, 1.000, 0.220, 1.000)';          
            rulers[curPos].style.cssText += this.slideIndicatorPositions[curPos].bottom;
            if ( prevButton.classList.contains('evo_s-is-hidden') ) {
              prevButton.classList.remove('evo_s-is-hidden');
            }
            if ( curPos === slides.length - 1 ) {
              nextButton.classList.add('evo_s-is-hidden');
            }
            if ( curPos < slides.length ) {
              slides[curPos].classList.add('evo_c-fs-gallery__slide--active');
            }
          }

        }
      },

      prevSlide: function () {
        var slides = this.getSlides(),
            rulers = this.getElements('.evo_c-fs-gallery__slides > span'),
            nextButton = this.getElement(this.elements.buttons.nextBtn),
            prevButton = this.getElement(this.elements.buttons.prevBtn);

        if( curPos > 0 ){

          if ( rulers[curPos] ) {
            console.log('thisSlide: ' + curPos);
            curPos--;
            console.log('prevSlide: ' + curPos);
            slides[curPos].classList.remove('su_mask-down');
            slides[curPos].classList.add('su_mask-up');
            rulers[curPos].style.cssText = 'transition: all .3s cubic-bezier(0.190, 1.000, 0.220, 1.000)';          
            rulers[curPos].style.cssText += this.slideIndicatorPositions[curPos].top;

            if ( nextButton.classList.contains('evo_s-is-hidden') ) {
              nextButton.classList.remove('evo_s-is-hidden');
            }

            if ( curPos === 0 ) {
              prevButton.classList.add('evo_s-is-hidden');
            }
          }
        }
      }

    },
    curPos = 0,

    slides = fsCarousel.getElements(fsCarousel.elements.slide);

    slides && slides.forEach(function (element, index) {
      element.addEventListener('click', function () {
        var pos = index,
            slides = fsCarousel.getSlides(),
            nextButton = fsCarousel.getElement(fsCarousel.elements.buttons.nextBtn),
            prevButton = fsCarousel.getElement(fsCarousel.elements.buttons.prevBtn);

        fsCarousel.getCarouselEl().classList.add('evo_s-is-active', 'evo_s-is-open'); 
        this.classList.add('evo_c-fs-gallery__slide--active');
        fsCarousel.loadSlideIndicators('span');  

        fsCarousel.positionActiveSlideIndicator(index);
        curPos = index;
        if (index === slides.length - 1) {
          nextButton.classList.add('evo_s-is-hidden');
        } else if (index === 0) {
          prevButton.classList.add('evo_s-is-hidden');
        }

      }, false);

    });

    fsCarousel.getElement(fsCarousel.elements.buttons.nextBtn).addEventListener('click', function (event) {
      fsCarousel.nextSlide();
    });

    fsCarousel.getElement(fsCarousel.elements.buttons.prevBtn).addEventListener('click', function (event) {
      fsCarousel.prevSlide();
    });

    fsCarousel.getElement(fsCarousel.elements.buttons.closeBtn).addEventListener('click', function (event) {
      
      fsCarousel.closeCarousel();
      var activeSlide = fsCarousel.getElement('.evo_c-fs-gallery__slide--active'),
          slideWrapper = fsCarousel.getElement('.evo_c-fs-gallery__slides');

      if (slideWrapper) {
        slideWrapper.style.height = 'unset';
      }

      activeSlide && activeSlide.classList.remove('evo_c-fs-gallery__slide--active');

      slides && slides.forEach(function (element, index) {
        element.classList.remove('su_mask-up', 'su_mask-down');
      });

    }, false);

    document.body.addEventListener('keyup', function (event) {

      if ( event.keyCode === 27 ) {

        var activeSlide = fsCarousel.getElement('.evo_c-fs-gallery__slide--active');
        
        fsCarousel.closeCarousel();
        activeSlide && activeSlide.classList.remove('evo_c-fs-gallery__slide--active');

      }

      if ( event.keyCode === 39 && curPos < slides.length - 1) {
        fsCarousel.nextSlide();
      } else if ( event.keyCode === 37 && curPos > 0) {
        fsCarousel.prevSlide();
      }
      
    }, false);

  }());

}