export default function () {

  var animT = document.querySelector('#evo_showcase_animations');

  var pfx = ['webkit', 'moz', 'MS', 'o', ''];

  var $prefixedOn = function (target, type, callback, useCapture) {

    for (var p = 0, length = pfx.length; p < length; p++) {
      if (!pfx[p]) {
        type = type.toLowerCase();
      }
      target.addEventListener(pfx[p] + type, callback, !!useCapture);
    }
  };

  var getClosest = function (elem, selector) {

    // When elem is a Text node, get its parent node
    if (elem.nodeType === 3) {
      elem = elem.parentNode;
    }

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches =
          Element.prototype.matchesSelector ||
          Element.prototype.mozMatchesSelector ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.oMatchesSelector ||
          Element.prototype.webkitMatchesSelector ||
          function (s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (i >= 0 && matches.item(i) !== this) {
              --i;
            }
            return i > -1;
          };
    }

    // Get closest match
    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }

    return null;

  };

  function getCompStyle(el) {
    return window.getComputedStyle(el);
  }

  animT && animT.addEventListener('click', function (event) {

    var target = event.target;
    var type = target && target.getAttribute('type') || null;
    var form;
    var previewElem;
    var animation;
    var animationClass;


    if (target.nodeName !== 'INPUT' && type !== 'submit') {
      return;
    }

    form = getClosest(target, '.evo_c-form');

    if (!form) {
      return;
    }

    previewElem = form.querySelector('.animation__box');
    animation = form.querySelector('.evo_c-form__select').value;

    animationClass = animation.replace('.', '');
    previewElem.classList.add(animationClass);


    $prefixedOn(previewElem, 'animationend', function () {
      window.setTimeout(function () {
        previewElem.classList.remove(animationClass);
      }, 2000);
    });
  });


  function $$(selector, parent) {
    return (parent || document).querySelectorAll(selector);
  }

  function isPropertySupported(property) {
    return property in document.body.style;
  }

  function isAnimation(attribute) {
    return /^data-animation/.test(attribute.nodeName);
  }

  function applyAttributes(element) {

    [].slice.call(element.attributes).filter(isAnimation).forEach(function (attribute) {

      var style;
      var propertyName = attribute.nodeName.replace(/^data-/, '');
      var value = attribute.nodeValue;
      var currentStyle = element.getAttribute('style') || '';

      if (!isPropertySupported(propertyName)) {
        return;
      }

      style = propertyName + ':' + value;

      if (isPropertySupported('-webkit-' + propertyName)) {
        style += ';-webkit-' + propertyName + ':' + value;
      }

      element.setAttribute('style', style + ';' + currentStyle);

    });
  }

  var animations = $$('[class*=evo_h-anim]');

  [].slice.call(animations).forEach(applyAttributes);

}
