/**
 * OFF-CANVAS NAVIGATION
 * @author Chris Bracco
 */

var offCanvas = (function () {

  // STRICT MODE
  'use strict';

  //
  // PUBLIC METHODS
  //
  function init (toggleSelector, targetSelector) {
    var toggle = document.querySelector(toggleSelector);
    var target = document.querySelector(targetSelector);


    toggle.addEventListener('click', function (event) {
      this.classList.toggle('is-active');

      var $selectedLayer = $('.selected-layer');
      var $unselectedLayer = $('.evo_c_multiLayers_container section').not(".selected-layer");

      if(this.classList.contains('is-active')) {
        $unselectedLayer.css('pointerEvents', 'none');
      } else {
        $unselectedLayer.css('pointerEvents', 'auto');
      }

      $selectedLayer.toggleClass('overflow-visible');

      target.classList.toggle('is-visible');
    });
  }

  //
  // EXPOSE PUBLIC METHODS
  //
  return {
    init: init
  }

})();
