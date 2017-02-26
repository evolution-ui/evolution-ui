(function() {

  document.querySelector('body').addEventListener('mouseenter', function() {

    var alertClose = document.querySelectorAll('.su_alert-close');

    if (alertClose) {
      for (var i = 0; i < alertClose.length; i++) {
        alertClose[i].addEventListener('click', function() {
          var that = this;
          this.parentNode.classList.add('su_transparent');
          setTimeout(function() {
            that.parentNode.remove();
          }, 200);
        })
      }
    }
  });


})();
