export default function() {
  /*FADE LINES ON SCROLL COMPONENT*/
  var fadedTextBlocks = document.querySelectorAll('.js-c-fade-lines-target');
  var wordMatch = /(\S+\s*)/g;

  for (var i = 0; i < fadedTextBlocks.length; i++) {
    var wrappedWordsInSpanTags = fadedTextBlocks[i].innerHTML.replace(wordMatch, '<span>$1</span>');
    fadedTextBlocks[i].innerHTML = wrappedWordsInSpanTags;

    for (var j = 0; j < fadedTextBlocks[i].childNodes.length; j++) {
      var temporaryScatterClass = 'class="evo_h-fade-lines-' + j + '"';
      var randomTopDistValue = Math.floor(Math.random() * 200) + 80;
      if (fadedTextBlocks[i].childNodes[j].tagName === "SPAN") {
        fadedTextBlocks[i].childNodes[j].classList.add(temporaryScatterClass);
        fadedTextBlocks[i].childNodes[j].style.position = "relative";
        fadedTextBlocks[i].childNodes[j].style.top = randomTopDistValue + "px";
        // fadedTextBlocks[i].childNodes[j].style.transform = "translateY(" + randomTopDistValue + "px)";
        fadedTextBlocks[i].childNodes[j].style.opacity = 0;
        fadedTextBlocks[i].childNodes[j].style.transition = 'all 3s';
        fadedTextBlocks[i].childNodes[j].style.transition = 'top 3s, opacity 3s';
      }
    }
  }

  window.onscroll = function() {
    for (var k = 0; k < fadedTextBlocks.length; k++) {
      var paragraphElementBoundingRect = fadedTextBlocks[k].getBoundingClientRect();

      if ((window.pageYOffset || document.documentElement.scrollTop) + 300 >= paragraphElementBoundingRect.top + (window.pageYOffset || document.documentElement.scrollTop)) {
        var allViewableSpans = document.querySelectorAll('[class*="evo_h-fade-lines-"]');

        for (var l = 0; l < allViewableSpans.length; l++) {
            allViewableSpans[l].style.top =  0;
            // allViewableSpans[l].style.transform = "translateY(0)";
            allViewableSpans[l].style.opacity =  1;
        }
      }
    }
  };
}
