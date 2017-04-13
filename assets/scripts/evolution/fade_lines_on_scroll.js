export default function() {
  /*FADE LINES ON SCROLL COMPONENT*/
  var fadedTextBlock = document.querySelectorAll('.js-c-fade-lines-target');
  var wordMatch = /(\S+\s*)/g;
  // console.log(fadedTextBlock);

  // for (var i = 0; i < fadedTextBlock.length; i++) {
  //   console.log(fadedTextBlock[i]);
  // }

  // console.log(fadedTextBlock.innerHTML.split(wordMatch).length);
  // console.log(fadedTextBlock.innerHTML.split(wordMatch));
  // console.log(fadedTextBlock.length);
  for (var i = 0; i < fadedTextBlock.length; i++) {
    // var wordMatch = /(\S+\s*)/g;
    var wrappedWordsInSpanTags;
    // console.log(fadedTextBlock);
    var wordCount = fadedTextBlock[i].innerHTML.split(wordMatch).length;

    // console.log(fadedTextBlock[i].innerHTML.replace(wordMatch, '<span>$1</span>'));
    wrappedWordsInSpanTags = fadedTextBlock[i].innerHTML.replace(wordMatch, '<span>$1</span>');
    fadedTextBlock[i].innerHTML = wrappedWordsInSpanTags;
    // console.log(fadedTextBlock[i].childNodes[3]);
    for (var j = 0; j < fadedTextBlock[i].childNodes.length; j++) {
      var temporaryScatterClass = 'class="evo_h-fade-lines-' + j + '"';
      var randomTopDistValue = Math.floor(Math.random() * 200) + 80;
      console.log(randomTopDistValue + "px");
      if (fadedTextBlock[i].childNodes[j].tagName === "SPAN") {
        fadedTextBlock[i].childNodes[j].classList.add(temporaryScatterClass);
        fadedTextBlock[i].childNodes[j].style.position = "relative";
        fadedTextBlock[i].childNodes[j].style.top = randomTopDistValue + "px";
      }
    }
    // console.log(fadedTextBlock);
    // FIXME: This component is not yet ready, in the middle of trying to make
    // it work
    // for (var j = 0; j <= fadedTextBlock[i].innerHTML.split(wordMatch).length; j++) {
      // var temporaryScatterClass = 'class="evo_h-fade-lines-' + j + '"';
      // var wrappedWordsInSpanTags = fadedTextBlock[i].innerHTML.replace(wordMatch, '<span>$1</span>');
      // console.log(fadedTextBlock[i].innerHTML.split(wordMatch).length);
      // console.log(temporaryScatterClass);


      // if ( j === fadedTextBlock[i].innerHTML.split(wordMatch).length) {
      //   console.log("finished loop!!!!!!!!!");
      //   console.log(wrappedWordsInSpanTags);
      // }
      // fadedTextBlock[i].innerHTML = wrappedWordsInSpanTags;
    // }

    // for (var k = 0; )




    // for (var j = 0; j < )
    // console.log(fadedTextBlock[i].innerText.replace(/(\S+\s*)/g, "<span>$1</span>"));
  }

  // for (var j = 0; fadedTextBlock.length; i++) {
  //   fadedTextBlock[j].addEventListener('scroll', function(event) {
  //     console.log('Ok, This is scrolling');
  //   });
  // }




  /*CODE REFERENCE*/
//   (function () {
//     $(".stripe").each(function () {
//         var obj = $(this);
//         var html = obj.html().replace(/(\S+\s*)/g, "<span>$1</span>");
//         obj.html(html);
//     });

//     var offset = 0;
//     var colorIndex = 0;
//     var colors = ["#ccc", "#000"];
//     var spans = $(".stripe span");

//     function highlight() {
//         for (var i = 0; i < spans.length; i++) {

//             var newOffset = spans[i].offsetTop;
//             if (newOffset !== offset) {
//                 colorIndex = colorIndex === 0 ? 1 : 0;
//                 offset = newOffset;
//             }

//             spans[i].style.color = colors[colorIndex];
//         }
//     }

//     highlight(); // initial highlighting

//     var timeout;
//     function throttle(){
//         window.clearTimeout(timeout);
//         timeout = window.setTimeout(highlight, 100);
//     }

//     $(window).on("resize", throttle);
// })();

}
