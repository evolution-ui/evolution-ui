;(function() {

  function $(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  function offset( element ) {
    var rect = element.getBoundingClientRect();
    var scrollTop = window.pageYOffset                 ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop            ||
                    0;
    var scrollLeft = window.pageXOffset                  ||
                     document.documentElement.scrollLeft ||
                     document.body.scrollLeft            ||
                     0;

    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }

  function Wave( element, type ) {
    this.element = element;
    this.type = type;
    this.handleWave();
  }

  Wave.prototype.handleWave = function() {
    this.element.addEventListener('click' , function(event) {

      var target = event.target;

      var clientRect = target.getBoundingClientRect();
      var posX       = offset(target).left;
      var posY       = offset(target).top;
      var eleWidth   = Math.round(clientRect.width);
      var eleHeight  =  Math.round(clientRect.height);

      var newWave = null;

      var previousW = $( '.su_wave_inner' );
      var wave = document.createElement('SPAN');

      wave.classList.add('su_wave_inner');

      if ( previousW ) {
        // Remove any previous wave
        previousW.remove();
      }

      // Append the new Wave element
      target.append(wave);

      // Since the .su_wave_inner class has a border radius of 50%
      // Make the width and height the same so that we get a perfect circle
      if ( eleWidth >= eleHeight ) {
        eleHeight = eleWidth;
      } else {
        eleWidth = eleHeight;
      }

      // Get the center of the element
      var x = event.pageX - posX - eleWidth / 2;
      var y = event.pageY - posY - eleHeight / 2;

      newWave = $( '.su_wave_inner' );

      if ( !newWave ) {
        return;
      }

      newWave.style.width = eleWidth + 'px';
      newWave.style.height = eleWidth + 'px';
      newWave.style.top = y + 'px';
      newWave.style.left = x + 'px';
      newWave.classList.add('su_wave__effect');
    });
  };

  var waves = document.querySelectorAll( '.su_wave' );

  [].slice.call(waves).forEach(function(wave) {
    new Wave(wave);
  });
})();
