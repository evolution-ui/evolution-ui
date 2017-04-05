
export default function(){

  var maxHeight   = 720;
  var minHeight = 50;
  var links       = document.querySelectorAll('.evo_c-layer header');
  var close_links = document.querySelectorAll('.evo_c-layer .evo_c-layer__content--close');
  var i      = 0,
      len    = links && links.length || 0;
  for(i; i < len; i++){
    links[i].addEventListener('click', openSlide, false);
    close_links[i].addEventListener('click', closeBtn, false);
  }

  // restore height of element and remove class 'active'
  function closeSlide(el){
    el.style.maxHeight          = minHeight + 'px';
    el.style.transitionDuration = '1.5s';
    var close                   = document.querySelector('#' + el.parentNode.id + ' .evo_c-layer__content--close');
    var done                    = document.querySelector('#' + el.parentNode.id + ' .evo_c-layer__content--done');
    setTimeout(function(){
      removeClass(el, 'active');
      addClass(el.parentNode, 'visited');
      show(done, 500);
    }, 750);

    hide(close, 500);
  }

  function closeBtn(el){
    if(this.tagName.toLowerCase() === 'span'){
      var el                      = this.parentNode;
      el.style.maxHeight          = minHeight + 'px';
      el.style.transitionDuration = '1.5s';
      setTimeout(function(){
        removeClass(el, 'active');
        addClass(el.parentNode, 'visited');
      }, 750);
      var close = document.querySelector('#' + el.parentNode.id + ' .evo_c-layer__content--close');
      var done  = document.querySelector('#' + el.parentNode.id + ' .evo_c-layer__content--done');
      show(done, 500);
      hide(close, 500);
    }
  }

  var temp       = null;
  var inProgress = false;
  function openSlide(e){
    if(inProgress === true)
    {
      return;
    }
    inProgress    = true;
    var currentEl = this.parentNode.parentNode;
    var parent    = this.parentNode.parentNode.parentNode;
    var lastChild = parent.lastElementChild;
    if(temp === null || temp === undefined){
      temp = lastChild;
    }
    else{
      lastChild = temp;
    }
    if(currentEl.className.indexOf('on-top') === -1){
      addClass(currentEl, 'on-top');
    }
    var lastActive = document.querySelector('#' + lastChild.id + ' div');
    var content    = document.querySelector('#' + currentEl.id + ' div');
    var close      = document.querySelector('#' + currentEl.id + ' .evo_c-layer__content--close');
    var done       = document.querySelector('#' + currentEl.id + ' .evo_c-layer__content--done');
    removeClass(close, 'hide');
    if(lastActive.className.indexOf('active') !== -1){
      closeSlide(lastActive);
      setTimeout(function(){
        currentEl.style.top = lastChild.offsetTop + 'px';
        lastChild.style.top = currentEl.offsetTop + 'px';
        addClass(lastChild, 'top-layer');
      }, 950);
      if(lastChild.offsetTop !== currentEl.offsetTop){
        addClass(content, 'active');
        removeClass(content.parentNode, 'visited');
        hide(done, 0);
        setTimeout(function(){
          var aDiv                      = document.getElementsByClassName('active')[0];
          aDiv.style.transitionDuration = '2.5s';
          content.style.maxHeight       = maxHeight + 'px';
          inProgress                    = false;
        }, 1500);
      }
    }
    else{
      currentEl.style.top = lastChild.offsetTop + 'px';
      lastChild.style.top = currentEl.offsetTop + 'px';

      addClass(lastChild, 'top-layer');
      addClass(content, 'active');
      removeClass(content.parentNode, 'visited');
      hide(done, 0);
      var aDiv                      = document.getElementsByClassName('active')[0];
      aDiv.style.transitionDuration = '2.5s';
      setTimeout(function(){
        content.style.maxHeight = maxHeight + 'px';
        inProgress              = false;
      }, 750);
    }
    setTimeout(function(){
      removeClass(currentEl, 'on-top');
    }, 2000);
    temp = currentEl;
  }

  /********* helper ***********/
  function hide(el, time){
    setTimeout(function(){
      addClass(el, 'hide');
    }, time);
  }

  function show(el, time){
    setTimeout(function(){
      removeClass(el, 'hide');
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
