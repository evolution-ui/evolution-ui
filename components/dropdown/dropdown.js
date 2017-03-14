(function () {
	
	'use strict';

  var picker = document.querySelectorAll('.su_dropdown-picker');

  function pickItem(e) {
    console.log(this);
  }

  if ( picker ) {

    var buttonText = picker[0].querySelector('.su_dropdown-toggle'),
        dropdownItems = picker[0].querySelectorAll('.su_dropdown-item');

    for (var i = dropdownItems.length - 1; i >= 0; i--) {

      dropdownItems[i].addEventListener('click', function (e) {
        e.preventDefault();
        console.log(this);
      }, false);
    }

  }

}());