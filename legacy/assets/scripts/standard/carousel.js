export default function() {

  /*=== STANDARD CAROUSEL COMPONENT ===*/

  var carousels = document.querySelectorAll('.evo_c-carousel');
  var numOfCarousels = carousels.length;
  var i;

  // add event listeners to carousels
  for (i = 0; i < numOfCarousels; i++) {
    carousels[i].addEventListener('click', _navAction(i));
  }

  function _navAction(i) {
    return function(e) {
      e.preventDefault();
      // the current carousel
      var activeCarousel = carousels[i];
      // check to see if is a slider type
      var isSlider = activeCarousel.classList.contains('evo_c-carousel--slider-type');
      // set boolean based off of data-thumbnail-nav attr
      var isThumbNav = activeCarousel.dataset.thumbnailNav !== undefined ? true : false;
      // set boolean based off of data-bullet-nav attribute
      var isBulletNav = activeCarousel.dataset.bulletNav !== undefined ? true : false;
      // array of slides in current carousel
      var slideArray = Array.prototype.slice.call(activeCarousel.querySelectorAll('.evo_c-carousel__slide'));
      // length of slide array
      var slideArrayLength = slideArray.length;
      // index number of the currently displayed slide
      var currentSlide = slideArray.indexOf(activeCarousel.querySelector('.evo_c-carousel__slide--is-selected'));
      // array of bullet nav list items
      var bulletNavArray = Array.prototype.slice.call(activeCarousel.querySelectorAll('.evo_c-carousel__bullet-nav-item'));
      // array of thumbnail nav items
      var thumbNavArray = Array.prototype.slice.call(activeCarousel.querySelectorAll('.evo_c-carousel__thumb-nav-item'));
      // target element of click event
      var target = e.target;

      if (target.nodeName === 'I') {
        // set target to parent of icon element when prev/next nav clicked
        target = target.parentNode;
      }

      if (target.classList.contains('evo_c-carousel__thumb-image')) {
        // set target to parent node of thumbnail image when thumbnail is clicked
        target = target.parentNode;
      }

      // if bullet nav is clicked
      if (target.dataset.slideIndex !== undefined) {
        // get the slide index from the data-slide-index attribute
        var targetedSlide = +(target.dataset.slideIndex);
        // remove selected class from all slides
        slideArray.forEach(function(slide) {
          if (slide.classList.contains('evo_c-carousel__slide--is-selected')) {
            slide.classList.remove('evo_c-carousel__slide--is-selected');
          }
          if (isSlider) {
            // reset slide class name
            slide.className = 'evo_c-carousel__slide';
          }
        });
        if (isBulletNav) {
          // remove active class from all bullet nav items
          bulletNavArray.forEach(function(bullet) {
            bullet.classList.remove('evo_c-carousel__bullet-nav-item--is-active');
          });
          // add active class to correct bullet nav item
          bulletNavArray[targetedSlide].classList.add('evo_c-carousel__bullet-nav-item--is-active');
        }
        if (isThumbNav) {
          // remove active class from all bullet nav items
          thumbNavArray.forEach(function(thumb) {
            thumb.classList.remove('evo_c-carousel__thumb-nav-item--is-active');
          });
          // add active class to correct bullet nav item
          thumbNavArray[targetedSlide].classList.add('evo_c-carousel__thumb-nav-item--is-active');
        }
        // add selected class to selected slide
        slideArray[targetedSlide].classList.add('evo_c-carousel__slide--is-selected');
        if (isSlider) {
          if (targetedSlide > currentSlide || currentSlide === slideArray.length - 1) {
            slideArray[targetedSlide].classList.add('slide--slide-next');
            slideArray[currentSlide].classList.add('slide--slide-out-left');
            slideArray[currentSlide].classList.remove('slide--slide-out-*');
          } else if (targetedSlide < currentSlide) {
            slideArray[targetedSlide].classList.add('slide--slide-prev');
            slideArray[currentSlide].classList.add('slide--slide-out-right');
            slideArray[currentSlide].classList.remove('slide--slide-out-*');
          }
        }

        // if arrow nav is clicked
      } else if (target.dataset.slideNav !== undefined) {

        // get the navigation direction from data-slide-nav attribute
        var navDirection = target.dataset.slideNav;
        // set the next slide index
        var nextIndex = (currentSlide < slideArrayLength - 1) ? currentSlide + 1 : 0;
        // set the previous slide index
        var prevIndex = (currentSlide > 0) ? currentSlide - 1 : slideArrayLength - 1;
        // remove selected class from all slides
        slideArray.forEach(function(slide) {
          slide.classList.remove('evo_c-carousel__slide--is-selected');
          if (isSlider) {
            // reset slide class name
            slide.className = 'evo_c-carousel__slide';
          }
        });
        if (isBulletNav) {
          // remove active class from all bullet nav items
          bulletNavArray.forEach(function(bullet) {
            bullet.classList.remove('evo_c-carousel__bullet-nav-item--is-active');
          });
        }
        if (isThumbNav) {
          // remove active class from all bullet nav items
          thumbNavArray.forEach(function(thumb) {
            thumb.classList.remove('evo_c-carousel__thumb-nav-item--is-active');
          });
        }

        // add selected class to slide and active class to bullet nav depending on navDirection
        if (navDirection === 'next') {
          slideArray[nextIndex].classList.add('evo_c-carousel__slide--is-selected');
          if (isSlider) {
            slideArray[nextIndex].classList.add('slide--slide-next');
            slideArray[currentSlide].classList.add('slide--slide-out-left');
          }
          if (isBulletNav) {
            bulletNavArray[nextIndex].classList.add('evo_c-carousel__bullet-nav-item--is-active');
          }
          if (isThumbNav) {
            thumbNavArray[nextIndex].classList.add('evo_c-carousel__thumb-nav-item--is-active');
          }
        } else {
          slideArray[prevIndex].classList.add('evo_c-carousel__slide--is-selected');
          if (isSlider) {
            slideArray[prevIndex].classList.add('slide--slide-prev');
            slideArray[currentSlide].classList.add('slide--slide-out-right');
          }
          if (isBulletNav) {
            bulletNavArray[prevIndex].classList.add('evo_c-carousel__bullet-nav-item--is-active');
          }
          if (isThumbNav) {
            thumbNavArray[prevIndex].classList.add('evo_c-carousel__thumb-nav-item--is-active');
          }
        }
      }

    };
  }
}
