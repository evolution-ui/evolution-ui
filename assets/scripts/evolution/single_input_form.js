export default function() {

  var nextBtns = document.querySelectorAll('.evo_c-sif__btn--next');
  var nextBtnsArr = [].slice.call(nextBtns);
  var nextBtnsLen = nextBtns && nextBtns.length || 0;
  var prevBtns = document.querySelectorAll('.evo_c-sif__btn--prev');
  var prevBtnsArr = [].slice.call(prevBtns);
  var prevBtnsLen = prevBtns && prevBtns.length || 0;
  var indicators = document.querySelectorAll('.evo_c-sif__indicator');
  var inputWraps = document.querySelectorAll('.evo_c-sif__input-wrap');
  var labels = document.querySelectorAll('.evo_c-sif__label');
  var inputFields = document.querySelectorAll('.evo_c-sif__input');
  var inputFieldsArr = [].slice.call(inputFields);
  // var validator = {};
  var i;

  // validator.isTrimmed = function(input) {
  //   var arr;
  //   if (!input) return false;
  //   if (typeof input !== 'string') return false;
  //
  //   arr = input.split(' ');
  //   for (i = 0; i < arr.length; i++) {
  //     if (arr[i] === '') return false;
  //   }
  //   return true;
  // };
  //
  // validator.isNotEmpty = function(input) {
  //   if (validator.isTrimmed(input)) {
  //     if (input !== '') {
  //       return true;
  //     }
  //   }
  //   return false;
  // };

  // Email validation
  // validator.isEmail = function(email) {
  //   var local,
  //     domain,
  //     localSplit,
  //     domainSplit;
  //
  //   if (!email) return false;
  //   if (email.indexOf(' ') !== -1) return false;
  //
  //   if (email.indexOf('@') === -1 ||
  //     email.indexOf('@') !== email.lastIndexOf('@')) return false;
  //
  //   local = email.split('@')[0];
  //   domain = email.split('@')[1];
  //   localSplit = local.split('.');
  //   domainSplit = domain.split('.');
  //
  //   if (local === '') return false;
  //   for (i = 0; i < localSplit.length; i++) {
  //     if (localSplit[i] === '')
  //       return false;
  //   }
  //
  //   if (domain === '') return false;
  //   if (domain.indexOf('_') !== -1) return false;
  //   if (domain.indexOf("-") === 0 ||
  //     domain.lastIndexOf('-') === domain.length - 1) return false;
  //   if (domainSplit.length < 2) return false;
  //   for (i = 0; i < domainSplit.length; i++) {
  //     if (domainSplit[i] === '') return false;
  //     if (domainSplit[domainSplit.length - 1].length < 2) return false;
  //   }
  //   return true;
  // };

  function checkValidation() {
    var index = inputFieldsArr.indexOf(this);
    var inputToCheck = inputFields[index];
    var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (inputToCheck.type === 'email') {
      if (validEmail.test(inputToCheck.value)) {
        console.log('email valid');
        // this.classList.remove('js-sif-is-invalid');
        return true;
      } else {
        console.log('email invalid');
        // this.classList.add('js-sif-is-invalid');
        return false;
      }
    } else {
      if (inputToCheck.checkValidity()) {
        console.log('NOT email valid');
        // this.classList.remove('js-sif-is-invalid');
        return true;
      } else {
        console.log('NOT email INvalid');
        // this.classList.add('js-sif-is-invalid');
        return false;
      }
    }
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
    // var currentInput;
    // console.log('gonext func ' + index);

    btn.addEventListener('click', function(e) {
      e.preventDefault();

      // currentInput = inputFields[index];
      // console.log('current input ' + currentInput);

      if (checkValidation.apply(inputFields[index])) { // if input value is VALID
        console.log('valid');
        // remove invalid class from nxt btn
        this.classList.remove('js-sif-is-invalid');

        // current input card
        // indicators[index].style.animationName = 'sif-fadeOutRight';
        // // nextBtns[index].style.animationName = 'sif-fadeOut';
        // this.style.animationName = 'sif-fadeOut';
        // labels[index].style.animationName = 'sif-fadeOut';
        // currentInput.style.animationName = 'sif-fadeOut';
        // inputWraps[index + 1].style.animationName = 'sif-fadeOut';




        inputWraps[index + 1].classList.add('js-sif-anim-fadeout');
        inputWraps[index + 1].classList.remove('js-sif-anim-fadein');
        // inputWraps[index + 1].classList.remove('js-sif-is-active');

        // next input card
        // inputWraps[index].classList.add('js-sif-is-active');
      } else {
        this.classList.add('js-sif-is-invalid'); // add invalid class to nxt btn
        console.log('this ' + this);
      }

      // if (checkValidation()) {
      //   console.log('NOT email - invalid');
      //   // nextBtns[index].style.color = '#E57B7B';
      //   // this.classList.add('js-sif-is-invalid');
      // } else if (currentInput.getAttribute('type') === 'email'
      //   && !validator.isEmail(currentInput.value)) {
      //   console.log('email - invalid');
      //   // this.classList.add('js-sif-is-invalid');
      // } else {
      //   console.log('valid');
      //   this.classList.remove('js-sif-is-invalid');
      //   indicators[index].style.animationName = 'sif-fadeOutRight';
      //   // nextBtns[index].style.animationName = 'sif-fadeOut';
      //   this.style.animationName = 'sif-fadeOut';
      //   labels[index].style.animationName = 'sif-fadeOut';
      //   currentInput.style.animationName = 'sif-fadeOut';
      //   inputWraps[index + 1].style.animationName = 'sif-fadeOut';
      //   inputWraps[index + 1].classList.remove('js-sif-is-active');
      //   inputWraps[index].classList.add('js-sif-is-active');
      // }
    });

  }

  function goBack(btn) {
    var index = prevBtnsArr.indexOf(btn);
    console.log(index);

    btn.addEventListener('click', function() {
      //current input card: remove active class
      // inputWraps[index + 1].classList.remove('js-sif-is-active');
      //previous input card: add active class and fadeIn
      // inputWraps[index + 2].classList.add('js-sif-is-active');
      // inputWraps[index + 2].style.animationName = 'sif-fadeIn';
      // indicators[index + 1].style.animationName = 'sif-fadeInLeft';
      // nextBtns[index + 1].style.animationName = 'sif-fadeIn';
      // labels[index + 1].style.animationName = 'sif-fadeIn';
      // inputFields[index + 1].style.animationName = 'sif-fadeIn';

      inputWraps[index + 2].classList.add('js-sif-anim-fadein');
      inputWraps[index + 2].classList.remove('js-sif-anim-fadeout');


      // if (index < prevBtnsLen - 1) {
      //   prevBtns[index + 1].style.animationName = 'sif-fadeIn';
      // }
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
