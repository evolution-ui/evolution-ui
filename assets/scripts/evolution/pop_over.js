export default function(){

  var links  = document.querySelectorAll('.evo_c-popover__text');
  var closes = document.querySelectorAll('.evo_c-popover__content--close');
  var i      = 0,
      len    = links && links.length || 0;
  for(i; i < len; i++){
    links[i].addEventListener('click', openSlideOver, false);
    closes[i].addEventListener('click', closeSlideOver, false);
  }

  function clearPopup(e){
    var popups = document.querySelectorAll('.evo_c-popover');
    var i      = 0,
        len    = popups && popups.length || 0;
    for(i; i < len; i++){
      if(popups[i].className.indexOf('h-hide') === -1){
        hide(popups[i], 0);
        removeClass(popups[i].children[0], 'h-animated-height');
        removeClass(popups[i].children[0].children[0], 'evo_c-popover__content--visible');
        addClass(popups[i].children[0].children[0], 'evo_c-popover__content--invisible');
      }
    }
  }

  function closeSlideOver(e){
    var el             = e.target;
    var contentWrapper = el.parentNode;
    var content        = contentWrapper.children[0];

    removeClass(contentWrapper.parentNode, 'h-popout');
    removeClass(contentWrapper, 'h-animated-height');
    removeClass(content, 'evo_c-popover__content--visible');
    addClass(content, 'evo_c-popover__content--invisible');
    hide(contentWrapper.parentNode, 500);
  }

  function openSlideOver(e){
    clearPopup()
    var el = document.getElementById(this.htmlFor);

    var animatedHeight = document.querySelector('#' + this.htmlFor + ' .evo_c-popover__content');
    var content        = document.querySelector('#' + this.htmlFor + ' .evo_c-popover__content>div');

    placeEl(el, this.offsetLeft, this.offsetTop - 10);
    show(el, 0);
    addClass(el, 'h-popout');
    addClass(animatedHeight, 'h-animated-height');
    removeClass(content, 'evo_c-popover__content--invisible');
    addClass(content, 'evo_c-popover__content--visible');

  }

  //place element in specific cords
  function placeEl(el, x_pos, y_pos){
    el.style.left = x_pos - el.offsetWidth / 3 + 'px';
    el.style.top  = y_pos + 'px';
  }

  function hide(el, time){
    setTimeout(function(){
      addClass(el, 'h-hide');
    }, time);
  }

  function show(el, time){
    setTimeout(function(){
      removeClass(el, 'h-hide');
    }, time);
  }

  function hasClass(el, className){
    if(el.classList)
      return el.classList.contains(className);
    else
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }

  function addClass(el, className){
    if(el.classList)
      el.classList.add(className);
    else if(!hasClass(el, className)) el.className += " " + className
  }

  function removeClass(el, className){
    if(el.classList)
      el.classList.remove(className);
    else if(hasClass(el, className)){
      var reg      = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className = el.className.replace(reg, ' ')
    }
  }

  /*-------------------------------*/
}

