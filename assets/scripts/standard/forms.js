export default function() {

  Array.prototype.where = function ( inclusionTest ) {
    var results = [];
    for (var i = 0; i<this.length; i++) {
      if ( inclusionTest(this[i]) ) {
        results.push(this[i]);
      }
    }
    return results;
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

  var crumbleList = $$( '[class*="crumble__list"]' );

}
