export default function () {
  var docElementBody = document.querySelector('html'),
    computedBody = document.getElementsByTagName('body')[0],
    computedBkgColor = window.getComputedStyle(computedBody, null).backgroundColor,
    toggleInvertColors = document.getElementById('toggle_InvertColors'),
    toggleGrayscale = document.getElementById('toggle_Grayscale'),
    toggleLargerFont = document.getElementById('toggle_LargerFont'),
    readabilityToggleContainer = document.querySelector('.evo_c-readabilityPlaceholder');

  docElementBody.classList += " evo_c-readabilityDocument";
  // computedBody.style.height = "100%";

  /*************
    Chrome, FF, and Safari each behave differently with invert(), so must set
    background-color on `html`. Get the color from the `body` elements computed
    value. If background-color is not set on `body` the computed values are
    `rgba(0, 0, 0, 0)` (Chrome) or `transparent` (FF), set the value to `rgb(255, 255, 255)` in
    that case.
  *************/

  if (computedBkgColor.toString() === 'rgba(0, 0, 0, 0)' || computedBkgColor.toString() === 'transparent') {
    computedBody.style.backgroundColor = 'rgb(255, 255, 255)';
    docElementBody.style.backgroundColor = 'rgb(255, 255, 255)';
  } else { // set body `background-color` to the computed value
    computedBody.style.backgroundColor = computedBkgColor;
    docElementBody.style.backgroundColor = computedBkgColor;
  }

  /*************
    The browser will cancel the invert and grayscale filters if one is applied
    to an element that already has the other one. i.e., only the last one
    applied will have effect. It is possible to chain the filters as
    `filter: grayscale(1) invert(100%)` but this is not the effect we want. So,
    if one of these is already toggled on, turn off the other.
  *************/

  function invertColors() {
    if (toggleInvertColors.checked) {
      toggleGrayscale.checked = false;
      docElementBody.classList.remove('evo_c-readability_Grayscale');
      docElementBody.classList += ' evo_c-readability_Invert';
    } else { // togle the checked property and remove *invert* classes
      toggleInvertColors.removeAttribute('checked');
      docElementBody.classList.remove('evo_c-readability_Invert');
    }
  }

  function grayscaleColors() {
    if (toggleGrayscale.checked) {
      toggleInvertColors.checked = false;
      docElementBody.classList.remove('evo_c-readability_Invert');
      docElementBody.classList += ' evo_c-readability_Grayscale';
    } else { // togle the checked property and remove *grayscale* classes
      docElementBody.classList.remove('evo_c-readability_Grayscale');
    }
  }

  function enlargeFont() {
    if (toggleLargerFont.checked) {
      docElementBody.classList += ' evo_c-readability_LargerFont';
    } else { // remove larger font class
      docElementBody.classList.remove('evo_c-readability_LargerFont');
    }
  }

  /* event listener */

  // first check if the element exists, and if it does, then assign the listener
  if (readabilityToggleContainer) {
    readabilityToggleContainer.addEventListener('click', function (event) {
      readabilityToggleContainer.addEventListener('click', function (event) {
        if (event.target.id === 'toggle_InvertColors') {
          invertColors();
        } else if (event.target.id === 'toggle_Grayscale') {
          grayscaleColors();
        } else if (event.target.id === 'toggle_LargerFont') {
          enlargeFont();
        }
      }, false);
    });
  }


}
