(function(window, document) {
   var sidebar = document.querySelectorAll(".site-sidebar-nav");
   var footer = document.querySelector(".site-footer");
   var footerDistanceFromTop = footer.offsetTop;
   var body = document.body;

   //console.log(sidebar);

   //SIDEBAR SCROLLING
   window.addEventListener("scroll", throttle(scrollCallback, 1));

   //header resize
   function scrollCallback() {
       "use strict";
       // console.log("scroll event triggered");
       // console.log(footer.offsetHeight);
       var pertinentSidebar = $('.selected-layer .site-sidebar-nav')[0];
       var lastComponentDistanceFromTop = $('.selected-layer .site-content > *:last-child').offset().top;
       if(body.scrollTop > lastComponentDistanceFromTop - 100) {
            pertinentSidebar.classList.add("bottom-hidden");
       } else {
            pertinentSidebar.classList.remove("bottom-hidden");
       }
   }

   //throttling function
   function throttle(fn, wait) {
     "use strict";
     var time = Date.now();
     return function() {
       if ((time + wait - Date.now()) < 0) {
         fn();
         time = Date.now();
       }
     };
   }

})(window, document)



