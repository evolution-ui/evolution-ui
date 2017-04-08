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

  function CrumbleList( element ) {
    this.element = element;
    this.handleClick();
  }

  CrumbleList.prototype.handleClick = function() {

    this.element.addEventListener( 'click', function( event ) {

      event.stopPropagation();

      var target = event.target;
      var isOpenButton = getClassName(target, '--expand')[0];
      var isCloseButton = getClassName(target, 'js-crumble-close-button')[0];

      if ( isOpenButton ) {

        target = target.parentElement.parentElement;

        $('[class*="crumble__span"]' , target).classList.toggle('is-active');
        $('[class*="c-event"]' , target).classList.toggle('is-open');

        $('[class*="event__header"]', target).classList.toggle('is-rotated-to-zero');
        $('[class*="event__body"]', target).classList.toggle('is-rotated-to-zero');

      } else if ( isCloseButton ) {
        target.parentElement.classList.remove('is-rotated-to-zero');
        target.parentElement.nextElementSibling.classList.remove('is-rotated-to-zero');
        target.parentElement.parentElement.classList.remove('is-open');
        target.parentElement.parentElement.previousElementSibling.classList.remove('is-active');
      }
    });
  };

  if ( crumbleList.length === 0 ) {
    return;
  }

  [].slice.call(crumbleList).forEach( function(element) {
      new CrumbleList(element);
  });

}
