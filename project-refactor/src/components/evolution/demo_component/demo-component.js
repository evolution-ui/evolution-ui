export default function(){
  /* Get all demo items from page */
  let demoItems = document.querySelectorAll('.c-demo-help');
  let i, j, k, l;
  let demoItemsArray = [];
  let prevIndex, nextIndex = -1;

  if(demoItems.length > 0){ //ensure that there are demo items on the page


    /* Add items from nodeList into an array */

    for(i = 0; i < demoItems.length; i++){
      demoItemsArray.push(demoItems[i]);
    }


    /* sort Array */

    demoItemsArray.sort(function(a,b){
      if(a.attributes['help-order'].value > b.attributes['help-order'].value){
        return 1;
      }else{
        if(a.attributes['help-order'].value < b.attributes['help-order'].value){
          return -1;
        }else{
          return 0;
        }
      }
    });

    /* Get width of screen  */

    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);


    for(j = 0; j < demoItemsArray.length; j++){
      demoItemsArray[j].innerHTML = '<span class="c-demo-help__message-icon"><i class="material-icons">help_outline</i></span>' + demoItemsArray[j].innerHTML;

      /* Ensure that help message shows within the bounds of the screen */

      let helpMessage = demoItemsArray[j].querySelector('.c-demo-help__content');
      let rect = helpMessage.getBoundingClientRect();
      let totalLeft = rect.left + rect.width; //get current left position of the element including its width

      if(totalLeft > w){  // change the position if element extends the width or height of the screen
        let newLeft = (rect.width) * -1;
        helpMessage.style.left = newLeft + 'px';
      }

      /* Make help message appear when clicking the help icon [closure] */

      demoItemsArray[j].addEventListener('click', showHelp);

    }

    /* handle prev and next controls */

    let prevButtonList = document.querySelectorAll('.c-demo-help__controls-prev');
    let nextButtonList = document.querySelectorAll('.c-demo-help__controls-next');

    for (k = 0; k < prevButtonList.length; k++){

      (function(){
        prevButtonList[k].addEventListener('click', function () {
          let parent = findAncestor(this, 'c-demo-help');
          showPrevious(parent);
        });
      })();
    }

    for (l = 0; l < nextButtonList.length; l++){

      (function(){
        nextButtonList[l].addEventListener('click', function () {
          let parent = findAncestor(this, 'c-demo-help');
          showNext(parent);
        });
      })();
    }
  }

  function showHelp(){
    let block = this;
    let message = block.querySelector('.c-demo-help__content');
    message.classList.toggle('is-hidden');
  }

  /*Function used to find and ancestor node with a particular class */

  function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  }

  /* Show previous */
  function showPrevious(node){
    prevIndex = demoItemsArray.indexOf(node);
    if(prevIndex > 0){
      let message = node.querySelector('.c-demo-help__content');
      message.classList.remove('is-hidden');
      let previousMessage = demoItemsArray[prevIndex-1].querySelector('.c-demo-help__content');
      previousMessage.classList.remove('is-hidden');
    }else{
      prevIndex = demoItemsArray.length;
      let message = node.querySelector('.c-demo-help__content');
      message.classList.remove('is-hidden');
      let previousMessage = demoItemsArray[prevIndex-1].querySelector('.c-demo-help__content');
      previousMessage.classList.remove('is-hidden');
    }
  }

  /* Show next */
  function showNext(node){
    nextIndex = demoItemsArray.indexOf(node);
    if(nextIndex > -1 && nextIndex < demoItemsArray.length - 1){
      let message = node.querySelector('.c-demo-help__content');
      message.classList.remove('is-hidden');
      let nextMessage = demoItemsArray[nextIndex+1].querySelector('.c-demo-help__content');
      nextMessage.classList.remove('is-hidden');
    }else{
      nextIndex = -1;
      let message = node.querySelector('.c-demo-help__content');
      message.classList.remove('is-hidden');
      let nextMessage = demoItemsArray[nextIndex+1].querySelector('.c-demo-help__content');
      nextMessage.classList.remove('is-hidden');
    }
  }
}

