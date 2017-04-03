export default function() {
    /* ACCORDION COMPONENT */
    // var bellows = document.querySelector('.su_accordion');

    // bellows && bellows.addEventListener('click', function(event) {
    //   if (event.target.tagName === "INPUT") {
    //     if (!(event.target.className === "su_active-bellow-flag")) {
    //       event.target.classList.add("su_active-bellow-flag");
    //     } else if (event.target.className === "su_active-bellow-flag") {
    //       event.target.checked = false;
    //       event.target.classList.remove("su_active-bellow-flag");
    //       event.target.blur();
    //     }
    //   }
    // });
  /* END ACCORDION COMPONENT */
  /*** NEW ACCORDION VERSION ***/

    var allBellows = document.getElementsByClassName('js-c-accordion-target');

    console.log(allBellows);
    console.log(allBellows.childNodes);

    if (allBellows) {
      for (var i = 0; i < allBellows.length; i++) {

        allBellows[i].addEventListener('click', function(event) {
          var allCurrentBellowTitles = event.target.parentNode.children;
          console.log(event.target.parentNode.parentNode.childNodes);
          for (var j = 0; j < allCurrentBellowTitles.length; j++) {
            if (allCurrentBellowTitles[i].classList.contains('is-active')) {
              allCurrentBellowTitles[i].classList.remove('is-active');
            }
          }
          event.target.classList.add('is-active');

          event.target.nextSibling.nextSibling.classList.add('is-expanded');
          console.log();

          // console.log(event.target.parentNode.childNodes[this]);
          event.preventDefault();
        });
      }

    }



}
