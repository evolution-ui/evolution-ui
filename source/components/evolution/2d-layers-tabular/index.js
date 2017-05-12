export default function(){

  'use strict';
  var maxHeight    = 350;
  var minWidth     = 14;
  var links        = document.querySelectorAll('.evo_c-layer-tabular header');
  var close_links  = document.querySelectorAll('.evo_c-layer-tabular__content--close');
  var hidden_layer = document.querySelector('#hidden_layer-tabular');
  var wrapper      = document.querySelectorAll('.layer-tabular-wrapper')[0];
  var i            = 0, len = close_links && close_links.length || 0;
  for(i; i < len; i++){
    links[i].addEventListener('click', openSlide, false);
    close_links[i].addEventListener('click', closeBtn, false);
  }

  // restore height of element and remove class 'active'
  function closeSlide(el){
    el.style.height                        = 50 + 'px';
    el.style.transitionDuration            = '1.5s';
    el.parentNode.style.width              = minWidth + 'rem';
    el.parentNode.style.transitionDuration = '0.5s';
    var close                              = document.querySelector('#' + el.parentNode.id + ' .evo_c-layer-tabular__content--close');

    var description           = document.querySelector('#' + el.parentNode.id + ' .evo_c-layer-tabular__description');
    var article               = document.querySelector('#' + el.parentNode.id + ' .evo_c-layer-tabular__description~article');
    description.style.opacity = 0;
    article.style.opacity     = 0;

    setTimeout(function(){
      removeClass(el, 'active');
      addClass(el.parentNode, 'visited');
    }, 750);
    wrapper.style.height             = 10 + 'rem';
    wrapper.style.transitionDuration = '.5s';
    hide(close, 500);
  }

  function closeBtn(el){
    if(this.tagName.toLowerCase() === 'span'){
      var el                    = this.parentNode;
      var description           = document.querySelector('#' + el.parentNode.id + ' .evo_c-layer-tabular__description');
      var article               = document.querySelector('#' + el.parentNode.id + ' .evo_c-layer-tabular__description~article');
      description.style.opacity = 0;
      article.style.opacity     = 0;

      el.style.height                        = 50 + 'px';
      el.style.transitionDuration            = '1.5s';
      el.parentNode.style.width              = minWidth + 'rem';
      el.parentNode.style.transitionDuration = '.5s';

      setTimeout(function(){
        removeClass(el, 'active');
        removeClass(hidden_layer, 'visible');
        addClass(el.parentNode, 'visited');
        el.parentNode.style.top  = hidden_layer.offsetTop + 'px';
        el.parentNode.style.left = hidden_layer.offsetLeft + 'px';
        hidden_layer.style.top   = el.parentNode.offsetTop + 'px';
        hidden_layer.style.left  = el.parentNode.offsetLeft + 'px';
        temp                     = null;
      }, 750);
      wrapper.style.height             = 10 + 'rem';
      wrapper.style.transitionDuration = '.5s';
      var close                        = document.querySelector('#' + el.parentNode.id + ' .evo_c-layer-tabular__content--close');
      hide(close, 500);
    }
  }

  var temp       = null;
  var inProgress = false;

  function openSlide(e){
    if(inProgress === true || inProgress === undefined){
      return;
    }

    inProgress    = true;
    var currentEl = this.parentNode.parentNode;
    var parent    = this.parentNode.parentNode.parentNode;
    var lastChild = parent.lastElementChild;

    if(temp === null){
      temp = lastChild;
    }
    else{
      lastChild = temp;
    }
    if(currentEl.className.indexOf('on-top') === -1){
      addClass(currentEl, 'on-top');
    }
    var lastActive  = document.querySelector('#' + lastChild.id + '>div');
    var content     = document.querySelector('#' + currentEl.id + '>div');
    var close       = document.querySelector('#' + currentEl.id + ' .evo_c-layer-tabular__content--close');
    var description = document.querySelector('#' + currentEl.id + ' .evo_c-layer-tabular__description');

    var article = document.querySelector('#' + currentEl.id + ' .evo_c-layer-tabular__description~article');

    removeClass(close, 'hide');
    removeClass(content.parentNode, 'visited');

    if(lastActive.className.indexOf('active') !== -1){
      closeSlide(lastActive);
      setTimeout(function(){
        lastChild.style.top     = hidden_layer.offsetTop + 'px';
        lastChild.style.left    = hidden_layer.offsetLeft + 'px';
        hidden_layer.style.top  = lastChild.offsetTop + 'px';
        hidden_layer.style.left = lastChild.offsetLeft + 'px';

        currentEl.style.top     = lastChild.offsetTop + 'px';
        currentEl.style.left    = lastChild.offsetLeft + 'px';
        hidden_layer.style.top  = currentEl.offsetTop + 'px';
        hidden_layer.style.left = currentEl.offsetLeft + 'px';

      }, 750);

      if(lastChild.offsetTop !== currentEl.offsetTop){
        addClass(content, 'active');
        setTimeout(function(){
          addClass(hidden_layer, 'visible');
          var aDiv                         = document.getElementsByClassName('active')[0];
          aDiv.style.transitionDuration    = '2.5s';
          content.style.height             = maxHeight + 'px';
          content.style.transitionDuration = '0.75s';

          currentEl.style.width              = '100%';
          currentEl.style.transitionDuration = '0.75s';
          inProgress                         = false;
          article.style.opacity              = 1;
          description.style.opacity          = 1;
          article.style.transitionDelay      = '.35s';
          description.style.transitionDelay  = '.35s';
          wrapper.style.height               = maxHeight + 100 + 'px';
          wrapper.style.transitionDuration   = '0.2s';

        }, 1500);
      }
    }
    else{
      lastChild.style.top  = currentEl.offsetTop + 'px';
      lastChild.style.left = currentEl.offsetLeft + 'px';

      currentEl.style.top  = lastChild.offsetTop + 'px';
      currentEl.style.left = lastChild.offsetLeft + 'px';
      addClass(lastChild, 'top-layer');
      addClass(content, 'active');
      addClass(hidden_layer, 'visited');

      var aDiv                      = document.getElementsByClassName('active')[0];
      aDiv.style.transitionDuration = '2.5s';
      addClass(hidden_layer, 'visible');
      setTimeout(function(){
        content.style.height               = maxHeight + 'px';
        content.style.transitionDuration   = '.75s';
        currentEl.style.width              = '100%';
        currentEl.style.transitionDuration = '.75s';
        article.style.opacity              = 1;
        description.style.opacity          = 1;
        article.style.transitionDelay      = '.35s';
        description.style.transitionDelay  = '.35s';
        inProgress                         = false;
        wrapper.style.height               = maxHeight + 100 + 'px';
        wrapper.style.transitionDuration   = '.2s';
      }, 700);
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
