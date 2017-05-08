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
  var siteSidebar1 = offCanvas.init(
    '.js-offcanvas-toggle-1',
    '.js-offcanvas-target-1'
  );
  var siteSidebar2 = offCanvas.init(
    '.js-offcanvas-toggle-2',
    '.js-offcanvas-target-2'
  );

  var logo = document.querySelector('.evo-logo');

  if (logo) {
    logo.classList.add('has-loaded');
  }
});
