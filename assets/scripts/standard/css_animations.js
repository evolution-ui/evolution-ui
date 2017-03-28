export default function() {
  var animT = document.querySelector('#su_anim');

  var pfx = ['webkit', 'moz', 'MS', 'o', ''];

  var $prefixedOn = function ( target, type, callback, useCapture ) {

    for ( var p = 0, length = pfx.length; p < length; p++ ) {
      if ( !pfx[p] ) {
        type = type.toLowerCase();
      }
      target.addEventListener( pfx[p]+type, callback, !!useCapture );
    }
  };

  animT.addEventListener( 'click', function( event ) {
    event.stopPropagation();
    event.preventDefault();

    if ( event.target.nodeName !== 'BUTTON' ) {
      return;
    }

    var target = event.target.parentElement.nextElementSibling.firstElementChild;
    var anim = event.target.parentElement.nextElementSibling.nextElementSibling.textContent;

    target.classList.toggle(anim.replace('.', ''));

    $prefixedOn(target, 'animationend', function() {
      window.setTimeout(function() {
        target.removeAttribute('class');
      }, 2000);
    });
  });

}