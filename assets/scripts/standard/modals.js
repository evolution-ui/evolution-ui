export default function() {
  var closeBtns = document.querySelectorAll('.js-modal-close-btn');
  var closeBtnsLen = closeBtns && closeBtns.length || 0;
  var overlay = document.querySelector('.js-modal-overlay');
  var activeModal;
  var transitionClass;
  var overlayClass;
  var i;


  function closeModal() {
    activeModal.classList.remove(transitionClass);
    overlay.classList.remove(overlayClass);
    overlay.style.visibility = 'hidden';
  }

  function openModal() {
    activeModal.classList.add(transitionClass);
    overlay.classList.add(overlayClass);
    overlay.style.visibility = 'visible';
  }

  function addOverlayHandler() {
    overlay && overlay.addEventListener('click', closeModal);
  }

  function addCloseHandler(closeBtn) {
    closeBtn.addEventListener('click', function() {
      closeModal();
    });
  }

  function addTriggerHandler(trigger) {
    var triggerHref = trigger.getAttribute('href');
    activeModal = document.getElementById(triggerHref.slice(1));

    if (activeModal.classList.contains('evo_c-modal--full')) {
      overlayClass = 'evo_c-modal-overlay--full';
      transitionClass = 'c-modal-transition--full';
    } else {
      overlayClass = 'evo_c-modal-overlay--default';
      if (activeModal.classList.contains('evo_c-modal--basic'))
        transitionClass = 'c-modal-transition--spin';
      if (activeModal.classList.contains('evo_c-modal--fixed'))
        transitionClass = 'c-modal-transition--scale-down';
      if (activeModal.classList.contains('evo_c-modal--dialog'))
        transitionClass = 'c-modal-transition--stick-top';
    }

    openModal();
  }

  for (i = 0; i < closeBtnsLen; i++) {
    addCloseHandler(closeBtns[i]);
  }

  addOverlayHandler();

  document.addEventListener('click', function(e) {
    if (!e) e = window.event; // for firefox

    var triggerEle = e.target || e.srcElement;

    if (triggerEle.classList.contains('evo_c-modal-trigger') &&
      triggerEle.tagName === 'A') addTriggerHandler(triggerEle);
  });

}
