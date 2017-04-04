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
