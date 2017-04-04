export default function() {
  /** STICKY COMPONENT **/
  var stickyElement = document.querySelector('.evo_c-sticky');
  var stickyElementLeftPosition = stickyElement && elementAbsolutePosition(stickyElement).docLeftDistance;
  var stickyElementTopPosition = stickyElement && elementAbsolutePosition(stickyElement).docTopDistance;
  var stickyElementEnd = document.querySelector('.evo_c-sticky__end');
  var stickyElementEndTopPosition = stickyElement && elementAbsolutePosition(stickyElementEnd).docTopDistance;

  if (stickyElement && stickyElementEnd) {
    window.onscroll = function(event) {
      var elementRelativePosition = stickyElement.getBoundingClientRect();
      if ((window.pageYOffset || document.documentElement.scrollTop) >= stickyElementTopPosition) {
        stickyElement.style.position = "fixed";
        stickyElement.style.top = 0;
        stickyElement.style.left = stickyElementLeftPosition + "px";
      } else if ((window.pageYOffset || document.documentElement.scrollTop) < stickyElementTopPosition) {
        stickyElement.style.position = "initial";
      }
      if ((window.pageYOffset || document.documentElement.scrollTop) >= stickyElementEndTopPosition - elementRelativePosition.height) {
        stickyElement.style.position = "absolute";
        stickyElement.style.top = elementAbsolutePosition(stickyElementEnd).docTopDistance + "px";
        stickyElement.style.left = elementAbsolutePosition(stickyElement).docLeftDistance + "px";
      }
    };
  }

  function elementAbsolutePosition(element) {
    var elementBoundingBox = element.getBoundingClientRect();
    var scrolledLeftPosition = window.pageXOffset || document.documentElement.scrollLeft;
    var scrolledTopPosition = window.pageYOffset || document.documentElement.scrollTop;
    return  {
      docLeftDistance: elementBoundingBox.left + scrolledLeftPosition,
      docTopDistance: elementBoundingBox.top + scrolledTopPosition,
      docBottomDistance: elementBoundingBox.bottom + scrolledTopPosition
    };
  }
/** END STICKY COMPONENT **/
}
