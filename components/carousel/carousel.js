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
