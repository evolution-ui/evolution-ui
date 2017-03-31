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

      var crumble = event.target;

      if ( hasClass(crumble,'su_crumble__icon--expand') ) {

        crumble = crumble.parentElement.parentElement;

        $('.su_crumble__span' , crumble).classList.toggle('su_crumble__span--isActive');
        $('.su_crumble_inner' , crumble).classList.toggle('su_crumble_inner--isActive');

        $('.su_crumble_inner__header', crumble).classList.toggle('js_crumble_rotate_initial');
        $('.su_crumble_inner__body', crumble).classList.toggle('js_crumble_rotate_initial');

      } else if ( hasClass(crumble, 'su_crumble__icon--close') ) {
        crumble.parentElement.classList.remove('js_crumble_rotate_initial');
        crumble.parentElement.nextElementSibling.classList.remove('js_crumble_rotate_initial');
        crumble.parentElement.parentElement.classList.remove('su_crumble_inner--isActive');
        crumble.parentElement.parentElement.previousElementSibling.classList.remove('su_crumble__span--isActive');
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
