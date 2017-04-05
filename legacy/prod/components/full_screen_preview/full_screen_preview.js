(function() {

  var triggerPreview = document.querySelectorAll(".su_full_screen_preview"); //grab triggers of preview
  console.log(triggerPreview);

  if (triggerPreview.length > 0) {

    for(i=0; i < triggerPreview.length; i++) {

      (function(i) {
          triggerPreview[i].addEventListener('mouseover', function(){
            var triggerId = this.getAttribute("id"); // grab the id of hovered element
            var triggerOverlay = document.querySelector('.' + triggerId);

            triggerOverlay.style.width = "100%";
          });

          triggerPreview[i].addEventListener('mouseout', function(){
            var triggerId = this.getAttribute("id"); // grab the id of hovered element
            var triggerOverlay = document.querySelector('.' + triggerId);

            triggerOverlay.style.width = "0";
          });
      }(i));


    }

  }

})();
