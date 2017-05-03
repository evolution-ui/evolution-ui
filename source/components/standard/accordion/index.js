export default function() {
  var allBellows = document.getElementsByClassName('js-c-accordion-target');

  if (allBellows) {
    for (var i = 0; i < allBellows.length; i++) {
      allBellows[i].addEventListener('click', function(event) {
        var allCurrentBellowTitles = event.target.parentNode.parentNode.childNodes;

        if (event.target.classList.contains('is-active')) {
          event.target.classList.remove('is-active');
          event.target.nextSibling.nextSibling.classList.remove('is-expanded');
        } else {
          removeActiveClasses(allCurrentBellowTitles, 'is-active');
          event.target.classList.add('is-active');
          removeActiveClasses(allCurrentBellowTitles, 'is-expanded');
          event.target.nextSibling.nextSibling.classList.add('is-expanded');
        }

        event.preventDefault();
      });
    }
  }

  function removeActiveClasses(nodeList, className) {
    for (var k = 0; k < nodeList.length; k++) {
      for (var l = 0; l < nodeList[k].childNodes.length; l++) {
        if (nodeList[k].childNodes[l].classList &&
            nodeList[k].childNodes[l].classList.contains(className)) {
          nodeList[k].childNodes[l].classList.remove(className);
        }
      }
    }
  }
}
