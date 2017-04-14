/**
 * Created by hherb on 4/4/2017.
 */
export default function() {

 /*create variables for each HTML element we are working with*/

  var h2s = document.getElementsByClassName('js-evo-h2');
  var partialUpTrigger = document.getElementById('partial-up');
  var partialDownTrigger = document.getElementById('partial-down');
  var allDownTrigger = document.getElementById('anchor-bottom');
  var nodeIndex = 0;

/*dynamically assign a class to each h2 element, remember, you can also use sections, divs, etc*/

  window.onload = function(){
    var h2_tags = document.querySelectorAll("h2");
    var i;
    for (i = 0; i < h2_tags.length; i++){
      h2_tags[i].setAttribute("class", "js-evo-h2");
    }
  }

/*these three functions determine which elements to navigate to*/

  function scrollPartialDown() {
    if (nodeIndex + 1 < h2s.length) {
      nodeIndex++;
      h2s[nodeIndex].scrollIntoView();
    }
  }

  function scrollPartialUp() {
    if (nodeIndex > 0) {
      nodeIndex--;
      h2s[nodeIndex].scrollIntoView();
    }
  }

  function toBottom() {
    var lastH2 = h2s[h2s.length - 1]
    lastH2.scrollIntoView();
  }

  /*event listeners for all of the buttons*/

  partialDownTrigger.addEventListener('click', scrollPartialDown);

  partialUpTrigger.addEventListener('click', scrollPartialUp);

  allDownTrigger.addEventListener('click', toBottom);


}
