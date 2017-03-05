/* Sticky Component */

(function() {
  var stickyElement = document.querySelector('.su_stick');
  var stickyElementLeftPosition = elementAbsolutePosition(stickyElement).docLeftDistance;
  var stickyElementTopPosition = elementAbsolutePosition(stickyElement).docTopDistance;
  var stickyElementEnd = document.querySelector('.su_stick-end');
  var stickyElementEndTopPosition = elementAbsolutePosition(stickyElementEnd).docTopDistance;
  var stuckFlag = false;

  window.onscroll = function(e) {
    var elementRelativePosition = stickyElement.getBoundingClientRect();
    if ((window.pageYOffset || document.documentElement.scrollTop) + 8 >= stickyElementTopPosition) {
      stickyElement.classList.add("su_stuck");
      stickyElement.classList.remove("su_right");
      stickyElement.style.top = 0;
      stickyElement.style.left = stickyElementLeftPosition + "px";

    } else if ((window.pageYOffset || document.documentElement.scrollTop) < stickyElementTopPosition){
      stickyElement.classList.remove('su_stuck');
      stickyElement.classList.add("su_right");
      stuckFlag = false;
    }
    if ((window.pageYOffset || document.documentElement.scrollTop) >= stickyElementEndTopPosition - elementRelativePosition.height) {
      stickyElement.classList.remove('su_stuck');
      stickyElement.classList.add("su_right");
      stuckFlag = false;
    }
  };

  function elementAbsolutePosition(element) {
    var elementBoundingBox = element.getBoundingClientRect();
    var scrolledLeftPosition = window.pageXOffset || document.documentElement.scrollLeft;
    var scrolledTopPosition = window.pageYOffset || document.documentElement.scrollTop;
    return  {
      docLeftDistance: elementBoundingBox.left + scrolledLeftPosition,
      docTopDistance: elementBoundingBox.top + scrolledTopPosition,
      docBottomDistance: elementBoundingBox.top + scrolledTopPosition
    };
  }
})();
