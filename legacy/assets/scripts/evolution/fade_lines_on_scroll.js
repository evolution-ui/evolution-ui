export default function() {
    /*FADE LINES ON SCROLL COMPONENT*/
  var fadedTextBlocks = document.querySelectorAll('.js-c-fade-lines-target');
  var wordMatch = /(\S+\s*)/g;

  for (var i = 0; i < fadedTextBlocks.length; i++) {
    var wrappedWordsInSpanTags = fadedTextBlocks[i].innerHTML.replace(wordMatch, '<span>$1</span>');
    fadedTextBlocks[i].innerHTML = wrappedWordsInSpanTags;

    for (var j = 0; j < fadedTextBlocks[i].childNodes.length; j++) {
      var randomTopDistValue = Math.random() * 300 + 80;
      // var randomRotationValue = Math.random() * 360;
      if (fadedTextBlocks[i].childNodes[j].tagName === "SPAN") {
        fadedTextBlocks[i].childNodes[j].style.position = "relative";
        fadedTextBlocks[i].childNodes[j].style.top = randomTopDistValue + "px";
        fadedTextBlocks[i].childNodes[j].style.opacity = 0;
        // fadedTextBlocks[i].childNodes[j].style.transform = "rotate(" + randomRotationValue + "deg)";
        fadedTextBlocks[i].childNodes[j].style.transition = 'top 1s, opacity 1s, transform 1s';
      }
    }
  }

  window.onscroll = function() {
    var fadedBlockParagraphPositions = [];
    for (var k = 0; k < fadedTextBlocks.length; k++) {
      fadedBlockParagraphPositions.push(fadedTextBlocks[k].getBoundingClientRect());
      if ((window.pageYOffset || document.documentElement.scrollTop) + 300 >= fadedBlockParagraphPositions[k].top + (window.pageYOffset || document.documentElement.scrollTop)) {
        for (var l = 0; l < fadedTextBlocks[k].childNodes.length; l++) {
          if (fadedTextBlocks[k].childNodes[l].tagName === "SPAN") {
            fadedTextBlocks[k].childNodes[l].style.top = 0;
            // fadedTextBlocks[k].childNodes[l].style.transform = "rotate(0deg)";
            fadedTextBlocks[k].childNodes[l].style.opacity = 1;
          }
        }
      }
    }
  };
}
