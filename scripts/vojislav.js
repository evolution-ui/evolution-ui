window.addEventListener('load', function() {

  document.addEventListener('keydown', function(e) {
    var key = e.key.toLowerCase(),
        shift = e.shiftKey,
        body = document.querySelector('body'),
        slitEnabled = body.classList.contains('su_slit-enabled');

    if ( key === 's' && shift && slitEnabled || key === 'escape' ) {
      body.classList.remove('su_slit-enabled');
      slitDisable(body);
      document.removeEventListener('mousemove', slitFollow);
    } else if ( key === 's' && shift ) {
      body.classList.add('su_slit-enabled');
      slitEnable(body);
      document.addEventListener('mousemove', slitFollow);
    }
  });

  function slitEnable(element) {
    var slitTop = document.createElement('div'),
        slitBottom = document.createElement('div');

    slitTop.classList.add('su_slit-top');
    slitBottom.classList.add('su_slit-bottom');
    element.appendChild(slitTop);
    element.appendChild(slitBottom);
  }

  function slitDisable(element) {
    var slitTop = document.querySelector('.su_slit-top'),
        slitBottom = document.querySelector('.su_slit-bottom');

    element.removeChild(slitTop);
    element.removeChild(slitBottom);
  }

  function slitFollow(e) {
    // this must go outside, must be cached, to avoid querying the DOM on every mouse move
    var slitTop = document.querySelector('.su_slit-top'),
        slitBottom = document.querySelector('.su_slit-bottom'),
        slitWidth = 200;

    slitTop.style.height = (e.clientY - slitWidth / 2) + 'px';
    slitBottom.style.top = (e.clientY + slitWidth / 2) + 'px';
    // console.log(e.clientY);
  }

});
