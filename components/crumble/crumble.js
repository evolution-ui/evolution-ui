;(function() {

  function $(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  function $$(selector, parent) {
    return (parent || document).querySelectorAll(selector);
  }

  function hasClass(target, className) {
    return target.classList.contains(className);
  }

  var crumbleList = $$( '.su_crumble__list' );

  function CrumbleList( element ) {
    this.element = element;
    this.handleClick();
  }

  CrumbleList.prototype.handleClick = function() {

    this.element.addEventListener( 'click', function( event ) {

      event.stopPropagation();

      var target = event.target;

      if ( hasClass(target,'su_crumble__icon--expand') ) {

        target = target.parentElement.parentElement;

        $('.su_crumble__span' , target).classList.toggle('su_crumble__span--isActive');
        $('.su_crumble_inner' , target).classList.toggle('su_crumble_inner--isActive');

        $('.su_crumble_inner__header', target).classList.toggle('js_crumble_rotate_initial');
        $('.su_crumble_inner__body', target).classList.toggle('js_crumble_rotate_initial');

      } else if ( hasClass(target, 'su_crumble__icon--close') ) {
        target.parentElement.classList.remove('js_crumble_rotate_initial');
        target.parentElement.nextElementSibling.classList.remove('js_crumble_rotate_initial');
        target.parentElement.parentElement.classList.remove('su_crumble_inner--isActive');
        target.parentElement.parentElement.previousElementSibling.classList.remove('su_crumble__span--isActive');
      }
    });
  };

  if ( crumbleList.length === 0 ) {
    return;
  }

  [].slice.call(crumbleList).forEach( function(element) {
      new CrumbleList(element);
  });

})();
