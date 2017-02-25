(function() {

  document.querySelector('body').addEventListener('click', function() {

    var alertClose = document.querySelectorAll('.alert-close');

    if (alertClose) {
      for (var i = 0; i < alertClose.length; i++) {
        alertClose[i].addEventListener('click', function() {
          var that = this;
          this.parentNode.classList.add('transparent');
          setTimeout(function() {
            that.parentNode.remove();
          }, 200);
        })
      }
    }
  });


})();
