export default function() {

  /*FADE LINES ON SCROLL COMPONENT*/
  var fadedTextBlock = document.querySelectorAll(
    '.js-evolution-fade-lines-target');

  console.log(fadedTextBlock);


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
