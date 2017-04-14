(function(window, document) {
   var searchInput = document.querySelector(".site-searchform-input");
   var componentHeaders = Array.from(document.querySelectorAll(".site-section-heading"));
   var componentKeywords = [];
   var typingTimer;                //timer identifier
   var doneTypingInterval = 1000;
   var matchedComponent;
   var mainSiteContent = document.querySelector(".site-content");
   var nothingFoundAlert = document.querySelector(".site-searchform-nothing-found-alert");

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

      smoothScroll(500, target.offsetTop, 120);

      setTimeout(function() {
        mainSiteContent.classList.remove('content-faded');
        searchInput.value = "";
      }, 700);
   }

   function _handleSearchInput(event) {
       searchInput.classList.remove("input-not-found");
       nothingFoundAlert.classList.remove("nothing-found-shown");
       clearTimeout(typingTimer);
       typingTimer = setTimeout(_doneTyping, 1000);
   }


  function _doneTyping() {
      if(searchInput.value !== "") {
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
            _scrollToComponent(matchedComponent);
            break;
          }
        }
        if(!found) {
          searchInput.classList.add("input-not-found");
          nothingFoundAlert.classList.add("nothing-found-shown");
        }
      }
  }

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
    function easing (t, b, c, d) {
      return c * (t /= d) * t * t + b
    }

    function endAnimation () {
      window.scrollTo(0, endScroll - offset)
    }

    window.requestAnimationFrame(step)
  }
})(window, document)



