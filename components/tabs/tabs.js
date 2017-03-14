(function() {

  var tabs = document.querySelectorAll(".tabs-titles li"); //grab tabs
  var tabsArray = [].slice.call(tabs);
  var contents = document.querySelectorAll('.tabs-contents li'); //grab contents

  console.log(tabs);

  for(i=0; i <= tabs.length; i++) {
    tabs[i].addEventListener('click', function(callback){
      console.dir(tabsArray.indexOf(this));

      for (content in contents) {
        contents[content].style.display = "none";
      }

      this.parentElement.querySelector(".current").className = ""; // Remove class current from other tabs
      this.className += "current"; // Add class current to this tab

      contents[tabsArray.indexOf(this)].style.display = "block"; //show tab content that matches tab title index

    });
  }

})();
