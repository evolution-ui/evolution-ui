/* Accordion Component */

(function() {
  var bellows = document.querySelector('.su_accordion');

  bellows.addEventListener('click', function(event) {
    if (event.target.tagName === "INPUT") {
      if (!(event.target.className === "su_active-bellow-flag")) {
        event.target.classList.add("su_active-bellow-flag");
      } else if (event.target.className === "su_active-bellow-flag") {
        event.target.checked = false;
        event.target.classList.remove("su_active-bellow-flag");
        event.target.blur();
      }
    }
  });
})();
