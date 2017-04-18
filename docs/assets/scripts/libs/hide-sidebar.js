(function(window, document) {
   var sidebar = document.querySelector(".site-sidebar-nav");
   var footer = document.querySelector(".site-footer");
   var footerDistanceFromTop = footer.offsetTop;
   var body = document.body;

   console.log(sidebar);

   //SIDEBAR SCROLLING
   window.addEventListener("scroll", throttle(scrollCallback, 100));

   //header resize
   function scrollCallback() {
       "use strict";
       console.log("scroll event triggered");
       if(body.scrollTop > (document.body.offsetHeight - window.innerHeight - footer.offsetHeight - 30)) {
            sidebar.classList.add("bottom-hidden");
       } else {
            sidebar.classList.remove("bottom-hidden");
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



