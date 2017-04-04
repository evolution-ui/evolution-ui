// DOM ready function
function ready (fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// On DOM ready,
ready(function () {
  // Initialize offCanvas script
  if (offCanvas) {
    offCanvas.init(
      '.js-offcanvas-toggle',
      '.js-offcanvas-target'
    );
  }
});
