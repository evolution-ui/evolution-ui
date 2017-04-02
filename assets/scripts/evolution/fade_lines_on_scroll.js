export default function() {

  /*FADE LINES ON SCROLL COMPONENT*/
  // var fadedTextBlock = document.querySelector('.js-c-fade-lines-target');
  // console.log(fadedTextBlock.innerHTML.split(wordMatch).length);
  // for (var i = 0; i < fadedTextBlock.length; i++) {
    // var wordMatch = /(\S+\s*)/g;
    // console.log(fadedTextBlock[i].innerHTML.split(wordMatch).length);
    //FIXME: This component is not yet ready, in the middle of trying to make
    // it work

    // for (var j = 0; j < fadedTextBlock[i].innerHTML.split(wordMatch).length; j++) {
    //   var temporaryScatterClass = 'class="evo_h-fade-lines-' + j;
    //   var wrappedWordsInSpanTags = fadedTextBlock[i].innerHTML.replace(wordMatch, '<span " + temporaryScatterClass + ">$1</span>');
    //   console.log(fadedTextBlock[i].innerHTML.split(wordMatch).length);
    //   fadedTextBlock[i].innerHTML = wrappedWordsInSpanTags;
    // }


    // for (var j = 0; j < )
    // console.log(fadedTextBlock[i].innerText.replace(/(\S+\s*)/g, "<span>$1</span>"));
  // }

  // for (var j = 0; fadedTextBlock.length; i++) {
    // fadedTextBlock[j].addEventListener('scroll', function(event) {
      // console.log('Ok, This is scrolling');
    // });
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
