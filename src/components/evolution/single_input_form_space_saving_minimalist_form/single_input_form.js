export default function() {

  var nextBtns = document.querySelectorAll('.evo_c-sif__btn--next');
  var nextBtnsArr = [].slice.call(nextBtns);
  var nextBtnsLen = nextBtns && nextBtns.length || 0;
  var prevBtns = document.querySelectorAll('.evo_c-sif__btn--prev');
  var prevBtnsArr = [].slice.call(prevBtns);
  var prevBtnsLen = prevBtns && prevBtns.length || 0;
  var inputWraps = document.querySelectorAll('.evo_c-sif__input-wrap');
  var labels = document.querySelectorAll('.evo_c-sif__label');
  var inputFields = document.querySelectorAll('.evo_c-sif__input');
  var inputFieldsArr = [].slice.call(inputFields);
  var i;


  function checkValidation() {
    var index = inputFieldsArr.indexOf(this);
    var inputToCheck = inputFields[index];
    var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return inputToCheck.type === 'email' ? validEmail.test(inputToCheck.value) : inputToCheck.checkValidity();
  }

  function showPlaceholderOrNot(input) {
    var index = inputFieldsArr.indexOf(input);

    input.addEventListener('blur', function (e) {
      e.preventDefault();
      if (input.value === '') {
        labels[index].style.opacity = 1;
        labels[index].style.visibility = 'visible';
      }
    });

    input.addEventListener('focus', function (e) {
      e.preventDefault();
      if (input.value === '') {
        labels[index].style.opacity = 0;
        labels[index].style.visibility = 'hidden';
      }
    });
  }

  function goNext(btn) {
    var index = nextBtnsArr.indexOf(btn);

    btn.addEventListener('click', function(e) {
      e.preventDefault();

      if (checkValidation.apply(inputFields[index])) { // if input value is VALID
        this.classList.remove('js-sif-is-invalid'); // remove invalid class from nxt btn
        // current input card: add fadeout class and remove fadein class
        inputWraps[index + 1].classList.add('js-sif-anim-fadeout');
        inputWraps[index + 1].classList.remove('js-sif-anim-fadein');
      } else {
        this.classList.add('js-sif-is-invalid'); // add invalid class to nxt btn
      }
    });
  }

  function goBack(btn) {
    var index = prevBtnsArr.indexOf(btn);

    btn.addEventListener('click', function() {
      //previous input card: add fadein class and remove fadeout class
      inputWraps[index + 2].classList.add('js-sif-anim-fadein');
      inputWraps[index + 2].classList.remove('js-sif-anim-fadeout');
    });
  }


  function addListenerToBtns() {
    for (i = 0; i < nextBtnsLen; i++) {
      goNext(nextBtns[i]);
      showPlaceholderOrNot(inputFields[i]);
    }

    for (i = 0; i < prevBtnsLen; i++) {
      goBack(prevBtns[i]);
    }
  }

  addListenerToBtns();
}
