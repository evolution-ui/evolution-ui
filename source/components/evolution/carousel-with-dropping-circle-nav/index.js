//--------component-name.js--------
export default function() {
  'use strict';

  let dropCircles = document.querySelectorAll('.evo_c-nav-drop-carousel__label-container');
  let innerCircles = document.querySelectorAll('.evo_c-nav-drop-carousel__drop-label');
  let slides = document.querySelectorAll('.evo_c-nav-drop-carousel__slide');

 if (dropCircles.length > 0) {
  dropCircles.forEach(function(element, index) {
    element.addEventListener('click', drop)
  });
}

  /* controls the drop for circle buttons except last one */

  function drop(e) {
    var outerCircle = e.target.parentNode;
    var circle = e.target;
    var id = circle.getAttribute('id');

    /* if statement for when we click the first circle */
    if (id === 'drop-1') {
      var slideCurrent = slides[0];
      /* use for loop to run through nav circles in add .js-drop class and remove .js-selected from circles that have this class */
      for (var i = 1; i < dropCircles.length; i++) {
        dropCircles[i].classList.add('js-drop');
        innerCircles[i].classList.remove('js-selected');
        slides[i].classList.remove('js-slide__show');
      }
      /* these statements add these classes to the circle that was clicked on in this case circle 1 */
      outerCircle.classList.add('js-drop');
      circle.classList.add('js-selected');
      slideCurrent.classList.add('js-slide__show');
    }


    if (id === 'drop-2') {
      var slideCurrent = slides[1];

      for (var i = 2; i < dropCircles.length; i++) {
        dropCircles[i].classList.add('js-drop');
        innerCircles[i].classList.remove('js-selected');
        slides[i].classList.remove('js-slide__show');
      }

      /* these statements will remove the circles that are  above classes */
      dropCircles[0].classList.remove('js-drop');
      innerCircles[0].classList.remove('js-selected');
      slides[0].classList.remove('js-slide__show');
      /* these statements add to the circle that was clicked on in this case circle 2 */
      outerCircle.classList.add('js-drop');
      circle.classList.add('js-selected');
      slideCurrent.classList.add('js-slide__show');
    }


    if (id === 'drop-3') {
      var slideCurrent = slides[2];

      for (var i = 2; i < dropCircles.length; i++) {
        dropCircles[i].classList.add('js-drop');
        innerCircles[i].classList.remove('js-selected');
        slides[i].classList.remove('js-slide__show');
      }

      /* these statements will remove the circles that are  above classes */

      for (var i = 0; i < 2; i++) {
        dropCircles[i].classList.remove('js-drop');
        innerCircles[i].classList.remove('js-selected');
        slides[i].classList.remove('js-slide__show');
      }



      /* these statements add to the circle that was clicked on in this case circle 2 */
      outerCircle.classList.add('js-drop');
      circle.classList.add('js-selected');
      slideCurrent.classList.add('js-slide__show');
    }



    if (id === 'drop-4') {
      var slideCurrent = slides[3];

      for (var i = 2; i < dropCircles.length; i++) {
        dropCircles[i].classList.add('js-drop');
        innerCircles[i].classList.remove('js-selected');
        slides[i].classList.remove('js-slide__show');
      }

      /* these statements will remove the circles that are  above classes */

      for (var i = 0; i < 3; i++) {
        dropCircles[i].classList.remove('js-drop');
        innerCircles[i].classList.remove('js-selected');
        slides[i].classList.remove('js-slide__show');
      }



      /* these statements add to the circle that was clicked on in this case circle 2 */
      outerCircle.classList.add('js-drop');
      circle.classList.add('js-selected');
      slideCurrent.classList.add('js-slide__show');

    }


    if (id === 'drop-5') {
      var slideCurrent = slides[4];

      for (var i = 2; i < dropCircles.length; i++) {
        dropCircles[i].classList.add('js-drop');
        innerCircles[i].classList.remove('js-selected');
        slides[i].classList.remove('js-slide__show');
      }

      /* these statements will remove the circles that are  above classes */

      for (var i = 0; i < 4; i++) {
        dropCircles[i].classList.remove('js-drop');
        innerCircles[i].classList.remove('js-selected');
        slides[i].classList.remove('js-slide__show');
      }



      /* these statements add to the circle that was clicked on in this case circle 2 */
      outerCircle.classList.add('js-drop');
      circle.classList.add('js-selected');
      slideCurrent.classList.add('js-slide__show');
    }

  };


  /* function that pushes last circle to bottom immediately */
  if (dropCircles.length > 0) {
  (function defaultDrop() {
    slides = document.querySelectorAll('.evo_c-nav-drop-carousel__slide');
    var circle = document.getElementById('drop-5');
    var slide = slides[4];
    var outerCircle = circle.parentNode;

    slide.classList.add('js-slide__show');
    outerCircle.classList.add('js-drop');
    circle.classList.add('js-selected');
  }());
 }

}
