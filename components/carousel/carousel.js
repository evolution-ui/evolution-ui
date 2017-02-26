(function() {
  var currentSlide = 0;
  var slides = document.querySelectorAll('.su_carousel-item');

  function next() {
    slides[currentSlide].classList.remove('su_carousel-visible');
    currentSlide = (currentSlide+1) % slides.length;
    slides[currentSlide].classList.add('su_carousel-visible');
  }

  function previous() {
    slides[currentSlide].classList.remove('su_carousel-visible');
    currentSlide = (currentSlide-1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('su_carousel-visible');
  }

  document.querySelector('.su_carousel-next').addEventListener('click', function() {
    next();
  })

  document.querySelector('.su_carousel-prev').addEventListener('click', function() {
    previous();
  })
})();
