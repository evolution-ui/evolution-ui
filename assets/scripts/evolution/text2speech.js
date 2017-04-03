export default function() {

/* TEXT2SPEECH COMPONENT */

 var text2speech = {

    // initialization of functions
    init: function () {
      this.cacheDOM();
      this.addEvent(this.bodyElement, 'keypress', this.speech.bind(this));
      this.addEvent(this.bodyElement, 'click', this.speech.bind(this));
      this.addEvent(this.bodyElement, 'click', this.toggleSpeechController.bind(this));
    },

    // save DOM object in variable
    cacheDOM: function () {
      this.bodyElement = document.querySelector('body');
      this.selectedElements = window.getSelection();
      this.btnStartRead = document.querySelector('.evo_c-text2speech__btn_startRead');
      this.btnStopRead = document.querySelector('.evo_c-text2speech__btn_stopRead');
      this.inpStatusRead = document.querySelector('.evo_c-text2speech__inp_statusRead');
      this.chbxReadController = document.querySelector('.text-2speech-toggle');
      this.ReadControllerContainer = document.querySelector('.evo_c-text2speech__controller');
    },

    // style DOM object - status reading
    styleSelection: function (isReading) {
      if (isReading === true) {
        this.inpStatusRead.value = 'running' || 'status';
      } else if (isReading === false) {
        this.inpStatusRead.value = 'stopped' || 'status';
      }
    },

    toggleSpeechController: function (e) {
      if (this.chbxReadController.checked === false) {
        // console.log(e.target);
        document.querySelector('.evo_c-text2speech__controller ').style.transform = 'translateX(-5.4rem)';
      } else if (this.chbxReadController.checked === true) {
        // console.log(e.target);
        document.querySelector('.evo_c-text2speech__controller ').style.transform = 'translateX(-23.6rem)';
      }
    },

    // execute addEvent for specific actions
    addEvent: function (target, eventType, eventHandler) {
      if (target) {
        target.addEventListener(eventType, eventHandler);
      }
    },

    // execute speech function
    speech: function (e) {
      var key = e.keyCode; // save keycode in variable
      var reading = false; // current status

      var speechText = new SpeechSynthesisUtterance(this.selectedElements);
      var speechSynth = window.speechSynthesis;

      // Split text in chunks
      var splitText = this.splitText(speechText.text);

      // console.log(e.target);
      // console.log(e.keyCode);
      // console.log(e.shiftKey);


      // console.log(splitText);

      // start speech
      if (key === 66 || e.target.getAttribute('class') === 'evo_c-text2speech__btn_startRead read_flex-button') { // shift + b  OR start button
        reading = true;
        this.styleSelection(reading); // set styles for status field

        splitText.forEach(function (text) {
          speechText = new SpeechSynthesisUtterance(text);
          // Configure Speech setting (en-Us)
          speechText.rate = 0.9;
          speechText.pitch = 0.9;
          speechText.lang = 'en-US';

          // run speaker
          speechSynth.speak(speechText);
          // console.log(text);
        });
        // console.log(speechSynth.pending);
      }

      if (key === 86 || e.target.getAttribute('class') === 'evo_c-text2speech__btn_stopRead read_flex-button') { // shift + v OR button stop
        reading = false;
        this.styleSelection(reading);
        speechSynth.cancel();
        // console.log(speechSynth.pending);
      }
    },

    splitText: function (text) {
      // get length of full text
      // console.log("Get full length " + text.length);

      // 200 ~ Character API Limit
      var textSpeechLimit = 200;

      // get length number for loop
      var maxLength = Math.ceil(text.length / textSpeechLimit);
      var next = 0;
      var array = [];
      var i;

      for (i = 0; i < maxLength; i++) {
        // console.log(i);
        // console.log("Text sliced " + text.slice(0 + next, textSpeechLimit + next));
        array.push(text.slice(0 + next, textSpeechLimit + next));
        next += textSpeechLimit;
        // console.log(next + " next number");
      }
      return array;
    }

}

  // RUN SCRIPT
  text2speech.init();
}
