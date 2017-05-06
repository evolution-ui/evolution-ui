(function(window, document) {
   var searchInput = document.querySelector(".site-searchform-input");
   var componentHeaders = Array.from(document.querySelectorAll("section.selected-layer .site-section-heading"));
   // var componentHeaders;
   var componentKeywords = [];
   var typingTimer;                //timer identifier
   var doneTypingInterval = 1000;
   var matchedComponent;
   var mainSiteContent = document.querySelector(".site-content");
   var nothingFoundAlert = document.querySelector(".site-searchform-nothing-found-alert");
   var progressBar = document.querySelector(".site-searchform-progress-bar");

   //top and bottom arrows
   var topArrow = document.querySelector(".up-down-scroll__scroll-up");
   var bottomArrow = document.querySelector(".up-down-scroll__scroll-down");

   //generate array of component keywords; these will be used to match search term via regex
   for(var i = 0; i < componentHeaders.length; i++) {
     componentKeywords.push(componentHeaders[i].textContent.toLowerCase());
   }

   console.log(componentKeywords);


   //add event listener to input
   searchInput.addEventListener("change", function(event) {
     searchInput.classList.remove("input-not-found");
     nothingFoundAlert.classList.remove("nothing-found-shown");
   });
   searchInput.addEventListener("focusout", function(event) {
     searchInput.classList.remove("input-not-found");
     nothingFoundAlert.classList.remove("nothing-found-shown");
   });


   searchInput.addEventListener("keyup", _handleSearchInput);

   searchInput.addEventListener("keydown", function(event) {
      searchInput.classList.remove("input-not-found");
      nothingFoundAlert.classList.remove("nothing-found-shown");
      clearTimeout(typingTimer);
   });


   function _scrollToComponent(target) {
      "use strict";

      smoothScroll(900, target.offsetTop, -200);


      setTimeout(function() {
        mainSiteContent.classList.remove('content-faded');
        searchInput.value = "";
        progressBar.classList.remove("expanded");
      }, 700);
   }

   function _handleSearchInput(event) {
       searchInput.classList.remove("input-not-found");
       nothingFoundAlert.classList.remove("nothing-found-shown");
       clearTimeout(typingTimer);
       typingTimer = setTimeout(_doneTyping, 900);
   }


  function _doneTyping() {
      if(searchInput.value !== "") {
        componentHeaders = Array.from(document.querySelectorAll("section.selected-layer .site-section-heading"));
        componentKeywords = [];
        //generate array of component keywords; these will be used to match search term via regex
        for(var i = 0; i < componentHeaders.length; i++) {
          componentKeywords.push(componentHeaders[i].textContent.toLowerCase());
        }
        var searchValue = searchInput.value;
        var searchRegex = new RegExp(searchValue, "i");
        matchedComponent = "";
        var found = false;
        //loop over keywords and try to match regex
        for(var i = 0; i < componentKeywords.length; i++) {
          if(componentKeywords[i].match(searchRegex)) {

            //dim opacity on main section;
            mainSiteContent.classList.add('content-faded');

            matchedComponent = componentHeaders[i];
            console.log(matchedComponent);
            found = true;

            progressBar.classList.add("expanded");

            setTimeout(function() {
              _scrollToComponent(matchedComponent);
            }, 800);

            break;
          }
        }
        if(!found) {
          searchInput.classList.add("input-not-found");
          nothingFoundAlert.classList.add("nothing-found-shown");
        }
      }
  }


  //top and bottom arrow
  topArrow.addEventListener("click", function(event) {
    smoothScroll(1300, 0, 0);
  });

  bottomArrow.addEventListener("click", function(event) {
    var bottomScrollAmount = document.body.offsetHeight - window.innerHeight;
    smoothScroll(1300, bottomScrollAmount, 0);
  });



  //smooth scrolling functions
  function smoothScroll(duration, endScroll, offset) {
    offset = offset || 0
    let start = null
    const initScroll = window.pageYOffset

    function step (timestamp) {
      if (!start) start = timestamp
      const progress = timestamp - start
      window.scrollTo(0, easing(progress, initScroll, endScroll - offset - initScroll, duration))
      if (progress < duration) {
        window.requestAnimationFrame(step)
      } else {
        endAnimation()
      }
    }

    // Easein Cubic - George McGinley Smith - https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
    // function easing (t, b, c, d) {
    //   return c * (t /= d) * t * t + b
    // }

    function easing (t, b, c, d) {
      if ((t/=d/2) < 1) return c/2*t*t*t + b;
      return c/2*((t-=2)*t*t + 2) + b;
    }

    function endAnimation () {
      window.scrollTo(0, endScroll - offset)
    }

    window.requestAnimationFrame(step)
  }
})(window, document)



