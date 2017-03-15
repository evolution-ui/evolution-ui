;(function() {

  function $$(selector, parent) {
    return (parent || document).querySelectorAll(selector);
  }

  function isPropertySupported( property ) {
    return property in document.body.style;
  }

  function isAnimation( attribute ) {
    return /^data-animation/.test(attribute.nodeName);
  }

  function applyAttributes( element ) {

    [].slice.call(element.attributes).filter(isAnimation).forEach(function(attribute) {

      var style;
      var propertyName = attribute.nodeName.replace(/^data-/, '');
      var value = attribute.nodeValue;
      var currentStyle = element.getAttribute( 'style') || '';

      if ( !isPropertySupported( propertyName )) {
        return;
      }

      style = propertyName + ':' + value;

      if ( isPropertySupported( '-webkit-' + propertyName ) ) {
        style += ';-webkit-' + propertyName + ':' + value;
      }

      element.setAttribute( 'style', style + ';' + currentStyle);

    });
  }

  document.addEventListener('DOMContentLoaded', function () {

    var animations = $$( '[class*=su_anim]' );

    [].slice.call(animations).forEach(applyAttributes);
  });

})();
