
/******************************************************************************
                        From single_input_form.js
******************************************************************************/
export const singleInputForm = function() {

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
};

/******************************************************************************
                        From From space_saving_minimalist_form.js
******************************************************************************/
export const minimalistForm =  function() {
  var inputWraps = document.querySelectorAll('.evo_c-mini-form__input-wrap');
  var inputWrapsLen = inputWraps && inputWraps.length || 0;
  var inputFields = document.querySelectorAll('.evo_c-mini-form__input');
  var inputFieldsArr = [].slice.call(inputFields);
  var nextBtns = document.querySelectorAll('.evo_c-mini-form__btn--next');
  var nextBtnsArr = [].slice.call(nextBtns);
  var nextBtnsLen = nextBtns && nextBtns.length || 0;
  var prevBtns = document.querySelectorAll('.evo_c-mini-form__btn--prev');
  var prevBtnsLen = prevBtns && prevBtns.length || 0;
  var toFirstBtn = document.querySelector('.evo_c-mini-form__btn--back');
  var submitBtn = document.querySelector('.evo_c-mini-form__submit-btn');
  var submitCardInner = document.querySelector('.evo_c-mini-form__submit') && document.querySelector('.evo_c-mini-form__submit').querySelector('.evo_c-mini-form__input-inner');
  var currentCardIndex = 0;
  var i;

  function checkValidation() {
    var index = inputFieldsArr.indexOf(this);
    var inputToCheck = inputFields[index];
    var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (inputToCheck.type === 'email') {
      if (validEmail.test(inputToCheck.value)) {
        inputWraps[index].classList.remove('js-mini-form-is-invalid');
        return true;
      } else {
        inputWraps[index].classList.add('js-mini-form-is-invalid');
        return false;
      }
    } else {
      if (inputToCheck.checkValidity()) {
        inputWraps[index].classList.remove('js-mini-form-is-invalid');
        return true;
      } else {
        inputWraps[index].classList.add('js-mini-form-is-invalid');
        return false;
      }
    }
  }

  function fadeIn(ele) {
    // Input wrap: add active and anim-fadein classes
    ele.classList.add('js-mini-form-is-active', 'js-mini-form-anim-fadein');
    // Inner input wrap: add anim-bgchange class
    ele.querySelector('.evo_c-mini-form__input-inner').classList.add('js-mini-form-anim-bgchange');
    // Input wrap: remove anim-fadeout-back class
    ele.classList.remove('js-mini-form-anim-fadeout-back');
  }

  function fadeOut(ele) {
    // Input wrap: add anim-fadeout class
    ele.classList.add('js-mini-form-anim-fadeout');
    // Input wrap: remove active class
    ele.classList.remove('js-mini-form-is-active');
  }

  function goNext(index) {
    if (checkValidation.apply(inputFields[index])) {
      // current card fades out
      fadeOut(inputWraps[index]);

      // next card fades in, prevBtn appears
      prevBtns[index].style.visibility = 'visible';
      prevBtns[index].style.transitionDelay = '0.65s, 0s';
      fadeIn(inputWraps[index + 1]);

      // update currentCardIndex with the next card's index
      currentCardIndex = index + 1;
    }
  }

  function goBack(index) {
    if (currentCardIndex > index) { // not the first input card
      // current card: roll back to left, remove active class
      inputWraps[currentCardIndex].classList.remove('js-mini-form-is-active', 'js-mini-form-anim-fadein');
      inputWraps[currentCardIndex].classList.add('js-mini-form-anim-fadeout-back');

      // current inner wrap: remove animation
      inputWraps[currentCardIndex].querySelector('.evo_c-mini-form__input-inner').classList.remove('js-mini-form-anim-bgchange');

      // hide indicator (prev btn)
      prevBtns[currentCardIndex - 1].style.visibility = 'hidden';
      prevBtns[currentCardIndex - 1].style.transitionDelay = '0s, 0s';

      // prev card: add active class, remove fadeout animation class
      inputWraps[--currentCardIndex].classList.add('js-mini-form-is-active');
      inputWraps[currentCardIndex].classList.remove('js-mini-form-anim-fadeout');
      // prev card - inner: add animation
      inputWraps[currentCardIndex].querySelector('.evo_c-mini-form__input-inner').classList.add('js-mini-form-anim-bgchange');

      window.setTimeout(function() {
        goBack(index);
      }, 200);
    }
  }

  function addListeners(btn) {
    var index = nextBtnsArr.indexOf(btn);
    btn.addEventListener('click', function() {
      goNext(index);
    });

    inputFields[index].addEventListener('keyup', function(e) {
      var keyCode = e.keyCode || e.which;
      if (keyCode !== 13) {
        checkValidation.apply(inputFields[index]);
      }
    });

    // prevBtns[index].style.visibility = 'visible';
    prevBtns[index].addEventListener('click', function() {
      goBack(index);
    });
  }

  for (i = 0; i < nextBtnsLen; i++) {
    addListeners(nextBtns[i]);
  }

  for (i = 0; i < inputWrapsLen; i++) {
    inputWraps[i].style.left = 0.5 * (inputWraps.length - 1 - i) + 'em';
  }

  for (i = 0; i < prevBtnsLen; i++) {
    var leftDistance = (0.5 * (prevBtns.length - 1 - i) + 19.5) + 'em';
    prevBtns[i].style.left = 'calc(' + leftDistance + ' - 4px)';
  }

  toFirstBtn && toFirstBtn.addEventListener('click', function() {
    goBack(0);
  });

  submitBtn && submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    submitCardInner.classList.remove('js-mini-form-anim-bgchange');
    submitCardInner.innerHTML = 'Thank you for subscribing';

    // hide all indicators
    for (i = 0; i < prevBtnsLen; i++) {
      prevBtns[i].style.visibility = 'hidden';
      prevBtns[i].style.transitionDelay = '0s';
      inputWraps[i + 1].style.borderRightColor = 'transparent';
      inputWraps[i + 1].style.transition = 'all 0s 0s';
    }
    return false;
  });

  // Press ENTER key to trigger goNext function
  document.addEventListener('keyup', function(e){
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      e.stopPropagation();
      e.preventDefault();
      if (currentCardIndex < nextBtnsLen) {
        goNext(currentCardIndex);
      }
      return false;
    }
  });

  // Disable form submission on Enter key, submit only on click
  function stopReloadKey(e) {
    var evt = (e) ? e : ((event) ? event : null);
    var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
    if (evt.keyCode == 13)  {
      return false;
    }
  }
  document.onkeypress = stopReloadKey;
};
