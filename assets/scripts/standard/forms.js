export default function() {

  var selectors = {
    form: '.evo_c-form',
    field: '[class*=form__field]'
  }


  Array.prototype.where = function ( inclusionTest ) {
    var results = [];
    for (var i = 0; i<this.length; i++) {
      if ( inclusionTest(this[i]) ) {
        results.push(this[i]);
      }
    }
    return results;
  };

  /**
   * Get the closest matching element up the DOM tree.
   * @param  {Element} elem     Starting element
   * @param  {String}  selector Selector to match notwithstanding
   * @return {Boolean|Element}  Returns null if not match found
   */
  var getClosest = function ( elem, selector ) {

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
        function(s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length;
            while (--i >= 0 && matches.item(i) !== this) {}
            return i > -1;
        };
    }

    // Get closest match
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.matches( selector ) ) return elem;
    }

    return null;

  };

  function $(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  function $$(selector, parent) {
    return (parent || document).querySelectorAll(selector);
  }

  function hasClass(target, className) {
    return target.classList.contains(className);
  }

  function getClassName(node, subString) {
    return [].slice.call(node.classList).where(function(className) {
      return className.indexOf(subString) !== -1;
    });
  }

  function handleChanges(event) {

    var closestField   = getClosest(event.target, selectors['field']);

    var hasValueClass  = 'has-value';
    var hasErrorsClass = 'has-error';

    var containsErrorClass  = !!getClassName(event.target, hasErrorsClass).length;

    if (!event.target.checkValidity() && !containsErrorClass) {
      closestField.classList.add(hasErrorsClass);
    } else {
      closestField.classList.remove(hasErrorsClass);
    }

    if (event.target.value.length == 0) {
      closestField.classList.remove(hasValueClass);
    } else {
      closestField.classList.add(hasValueClass);
    }

  }

  function handleLabelsAnimation(event) {

    var focusedClass  = 'is-focused';

    var closestField = getClosest(event.target, selectors['field']);
    var focusedField = $('.' + focusedClass);

    if (focusedField) {
      focusedField.classList.remove(focusedClass);
    }

    if (closestField) {
      closestField.classList.add(focusedClass);
    }
  }

  var formsList = $$( selectors.form );

  [].slice.call(formsList).forEach(function(form){
    form.addEventListener( 'click', function(event) {
      handleLabelsAnimation(event);
    });
    form.addEventListener( 'change', function(event) {
      handleChanges(event);
    });
  });

}
