(function () {

  'use strict';

  var suSift = {
    
    pick: '.su_basket--pick',
    drop: '.su_basket--drop',
    
    pickBasket: function () {
      
      var basket = document.querySelector(this.pick);

      if ( basket ) {
        return basket;
      }

    },

    dropBasket: function () {
      
      var basket = document.querySelector(this.drop);

      if ( basket ) {
        return basket;
      }

    },

    pickItem: function () {
      if ( this.pickBasket() ) {
        return this.pickBasket().firstElementChild; //removeChild(this.pickBasket().firstElementChild());
      }
    },

    removeItem: function () {
      if ( this.pickBasket() ) {
        this.pickBasket()
            .removeChild(this.pickItem());
      }
    },

    siftItem: function () {

      var item = this.pickItem(),
          siftDrop = this.dropBasket.bind(this);
          
      if (item) {
        
        item.classList.add('su_animate--siftOut')
        setTimeout(function () {
          item.classList.remove('su_animate--siftOut');
          item.classList.add('su_animate--siftIn');
          siftDrop().appendChild(item);
          //siftDrop().lastElementChild.classList.add('su_animate--sift');
        }, 1000);  
      }
    }
  }

  if (suSift.pickBasket()) {
    suSift.pickBasket().addEventListener('click', function (e) {
      suSift.siftItem();
    });
  }
  

  
}());