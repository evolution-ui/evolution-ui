(function() {

  var tabs = document.querySelectorAll(".su_tabs-vertical-titles li"); //grab tabs
  var tabsArray = [].slice.call(tabs);
  var contents = document.querySelectorAll('.su_tabs-vertical-contents li'); //grab contents

  if (tabs.length > 0 ) {

    for(i=0; i < tabs.length; i++) {

        tabs[i].addEventListener('click', function(){

          for (j=0; j < contents.length; j++) {
            // Hide all content from tabs
            contents[j].style.display = "none";
          }

          this.parentElement.querySelector(".current").className = ""; // Remove class current from other tabs
          this.className = "current"; // Add class current to this tab

          contents[tabsArray.indexOf(this)].style.display = "block"; //show tab content that matches tab title index
      });
    }
  }

})();
