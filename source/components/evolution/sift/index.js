export default function () {

  'use strict';

  var sift = {

    pick: '.evo_c-sift__basket-pick',
    drop: '.evo_c-sift__basket-drop',

    getBasket: function (selector) {
      var basket = document.querySelector(selector);

      return basket;
    },

    pickItem: function () {
      if ( this.getBasket(this.pick) ) {
        return this.getBasket(this.pick).firstElementChild;
      }
    },

    removeItem: function () {
      if ( this.getBasket(this.pick) ) {
        this.getBasket(this.pick)
            .removeChild(this.pickItem());
      }
    },

    siftItem: function (event) {

      var item = this.pickItem(),
          siftDrop = this.getBasket.bind(this),
          dropped = siftDrop(this.drop);

      if (item) {

        item.classList.add('evo_c-sift__items--animate-sift-out')
        setTimeout(function () {
          item.classList.remove('evo_c-sift__items--animate-sift-out');
          item.classList.add('evo_c-sift__items--animate-sift-in');
          dropped.appendChild(item);
        }, 2000);
      }
    }
  }

  if (sift.getBasket(sift.pick)) {
    sift.getBasket(sift.pick).addEventListener('click', function (e) {
      sift.siftItem();
    });
  }



}
