window.addEventListener('load', function() {

  document.addEventListener('keydown', function(e) {
    var key = e.key.toLowerCase(),
        shift = e.shiftKey,
        body = document.querySelector('body'),
        eyelidsEnabled = body.classList.contains('su_eyelids-enabled');

    if ( key === 's' && shift && eyelidsEnabled || key === 'escape' ) {
      body.classList.remove('su_eyelids-enabled');
      eyelidsDisable(body);
      document.removeEventListener('mousemove', eyelidsFollow);
    } else if ( key === 's' && shift ) {
      body.classList.add('su_eyelids-enabled');
      eyelidsEnable(body);
      document.addEventListener('mousemove', eyelidsFollow);
    }
  });

  function eyelidsEnable(element) {
    var eyelidsTop = document.createElement('div'),
        eyelidsBottom = document.createElement('div');

    eyelidsTop.classList.add('su_eyelids-top');
    eyelidsBottom.classList.add('su_eyelids-bottom');
    element.appendChild(eyelidsTop);
    element.appendChild(eyelidsBottom);
  }

  function eyelidsDisable(element) {
    var eyelidsTop = document.querySelector('.su_eyelids-top'),
        eyelidsBottom = document.querySelector('.su_eyelids-bottom');

    element.removeChild(eyelidsTop);
    element.removeChild(eyelidsBottom);
  }

  function eyelidsFollow(e) {
    // this must go outside, must be cached, to avoid querying the DOM on every mouse move
    var eyelidsTop = document.querySelector('.su_eyelids-top'),
        eyelidsBottom = document.querySelector('.su_eyelids-bottom'),
        eyelidsWidth = 200;

    eyelidsTop.style.height = (e.clientY - eyelidsWidth / 2) + 'px';
    eyelidsBottom.style.top = (e.clientY + eyelidsWidth / 2) + 'px';
    // console.log(e.clientY);
  }

});
