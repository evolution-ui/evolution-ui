
export default function(){
var inputScannerInputConts =  document.querySelectorAll('.evo_c-input-scanner__inputContainer')
var inputScanner = document.querySelector('.evo_c-input-scanner')

//----------------------------------------------------------------
//                 INPUT ELEMENT LOGIC
//----------------------------------------------------------------

for(var i = 0; i < inputScannerInputConts.length; i++){

  var inputScannerInput = inputScannerInputConts[i].querySelector('.evo_c-input-scanner__input');
  var inputScannerMask = inputScannerInputConts[i].cloneNode(true);
  inputScannerMask.firstElementChild.setAttribute('placeholder','');
  inputScannerMask.className = 'evo_c-input-scanner__inputMask';

  inputScannerMask.querySelector('input').removeAttribute('required');
  inputScannerMask.querySelector('input').removeAttribute("tabindex");
  inputScannerMask.querySelector('input').addEventListener("focus", function(){
    this.parentNode.parentNode.querySelector('input').focus();
  });
  // inputScannerMask.querySelector('input').setAttribute("disabled", true);
  inputScannerInputConts[i].appendChild(inputScannerMask);

  inputScannerInput.addEventListener('focus', function() {
    var inputScannerMask =   this.parentNode.querySelector('.evo_c-input-scanner__inputMask');
    inputScannerMask.classList.remove('evo_c-input-scanner__inputMaskCover');
    inputScannerMask.classList.add('evo_c-input-scanner__cursor');
  });

  inputScannerInput.addEventListener('blur', function() {
    var inputScannerMask = this.parentNode.querySelector('.evo_c-input-scanner__inputMask');
    inputScannerMask.classList.remove('evo_c-input-scanner__cursor');
    inputScannerMask.classList.remove('evo_c-input-scanner__invalidInput');
    if(this.checkValidity()){
      inputScannerMask.querySelector('.evo_c-input-scanner__input').value = " " + this.value;
      inputScannerMask.classList.add('evo_c-input-scanner__inputMaskCover');
    }
  });

  inputScannerInput.addEventListener('invalid', function(e){
    e.preventDefault();
  })

  inputScannerInputConts[i].addEventListener('click', inputScannerMaskClick);

}



function inputScannerMaskClick() {
  var inputScannerInput = this.querySelector('.evo_c-input-scanner__input');
  var inputScannerMask = this.querySelector('.evo_c-input-scanner__inputMask');
  inputScannerMask.classList.remove('evo_c-input-scanner__maskCover');
  inputScannerMask.classList.add('evo_c-input-scanner__cursor');
  inputScannerInput.focus();
}


//----------------------------------------------------------------
//                 SUBMIT ELEMENT LOGIC
//----------------------------------------------------------------

var inputScannerSubmitConts = document.querySelectorAll('.evo_c-input-scanner__submitContainer');
//console.log(inputScannerSubmitConts.length)
for(var i = 0; i < inputScannerSubmitConts.length; i++){
  var inputScannerSubmit = inputScannerSubmitConts[i].querySelector('.evo_c-input-scanner__submit');
  var inputScannerSubmitMask = inputScannerSubmitConts[i].cloneNode(true);

  inputScannerSubmitMask.className = 'evo_c-input-scanner__submitMask';
  inputScannerSubmitConts[i].appendChild(inputScannerSubmitMask);

  inputScannerSubmit.addEventListener('click', function(){
    if(inputScanner.checkValidity()){
     var inputScannerSubmitMask = this.parentNode.querySelector('.evo_c-input-scanner__submitMask');
      inputScannerSubmitMask.querySelector('.evo_c-input-scanner__submit').setAttribute('value', 'Thanks! Check your email.');
      inputScannerSubmitMask.classList.add('evo_c-input-scanner__submitMaskCover');

      for(var j = 0; j < inputScannerInputConts.length; j++){
        inputScannerInputConts[j].querySelector('.evo_c-input-scanner__input').disabled = true;
        inputScannerInputConts[j].querySelector('.evo_c-input-scanner__inputMask input').classList.add('evo_c-input-scanner__clearInput');
        inputScannerInputConts[j].removeEventListener('click', inputScannerMaskClick);
      }
    } else {
      inputScanner.querySelector(':invalid').focus();
      inputScanner.querySelector(':invalid ~ .evo_c-input-scanner__inputMask').classList.add('evo_c-input-scanner__invalidInput');
    }
  })
}
}
