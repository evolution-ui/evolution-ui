(function () {

  'use strict';

  var sift = {
    
    pick: '.evo_c-sift__basket-pick',
    drop: '.evo_c-sift__basket-drop',
    
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
        return this.pickBasket().firstElementChild;
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
        
        item.classList.add('evo_c-sift__items--animate-sift-out')
        setTimeout(function () {
          item.classList.remove('evo_c-sift__items--animate-sift-out');
          item.classList.add('evo_c-sift__items--animate-sift-in');
          siftDrop().appendChild(item);
        }, 1000);  
      }
    }
  }

  if (sift.pickBasket()) {
    sift.pickBasket().addEventListener('click', function (e) {
      sift.siftItem();
    });
  }
  

  
}());