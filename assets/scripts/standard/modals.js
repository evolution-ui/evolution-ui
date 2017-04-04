export default function() {

  var modalTriggers = document.querySelectorAll('.js-modal-trigger');
  var modalTriggersArr = [].slice.call(modalTriggers);
  var modalTriggersLen = modalTriggers && modalTriggers.length || 0;
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

  function addOverlayHandler() {
    overlay.addEventListener('click', closeModal);
  }

  function addCloseHandler(closeBtn) {
    closeBtn.addEventListener('click', function() {
      closeModal();
    });
  }

  function addTriggerHandler(trigger) {
    var index = modalTriggersArr.indexOf(trigger);

    trigger.addEventListener('click', function() {
      if (index === 1) {
        overlayClass = 'evo_c-modal-overlay--full';
      } else {
        overlayClass = 'evo_c-modal-overlay--gray';
      }
      activeModal = document.getElementById(this.getAttribute('href').slice(1));
      transitionClass = 'c-modal-transition--' + index;
      activeModal.classList.add(transitionClass);
      overlay.classList.add(overlayClass);
      overlay.style.visibility = 'visible';
    });
  }

  for (i = 0; i < modalTriggersLen; i++) {
    addTriggerHandler(modalTriggers[i]);
  }

  for (i = 0; i < closeBtnsLen; i++) {
    addCloseHandler(closeBtns[i]);
  }

  addOverlayHandler();

}
