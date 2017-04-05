export default function() {

  var tab = document.querySelector('');

  var pfx = ['webkit', 'moz', 'MS', 'o', ''];

  var $prefixedOn = function ( target, type, callback, useCapture ) {

    for ( var p = 0, length = pfx.length; p < length; p++ ) {
      if ( !pfx[p] ) {
        type = type.toLowerCase();
      }
      target.addEventListener( pfx[p]+type, callback, !!useCapture );
    }
  };

  tab && tab.addEventListener( 'click', function( event ) {
    event.stopPropagation();
    event.preventDefault();

    /*
    if ( event.target.nodeName !== 'BUTTON' ) {
      return;
    }*/

  });

}
