(function() {

  var modal = {

    init: function() {
      this.cacheDom();
      this.addEvents();
    },

    cacheDom: function() {
      this.modalTriggers = document.querySelectorAll('[data-modal-trigger]');
      // this.modalContainers = document.querySelectorAll('.su_modal:not(.su_modal-simple)');
      this.simpleModal = document.querySelector('.su_modal-simple');
      this.imageModal = document.querySelector('.su_modal-image');
      this.videoModal = document.querySelector('.su_modal-video');
      console.log(this.modalTriggers);
    },

    addEvents: function() {
      var i, len = this.modalTriggers && this.modalTriggers.length;

      for ( i = 0; i < len; i++ ) {
        this.modalTriggers[i].addEventListener('click', this.toggleModal.bind(this));
      }

    },

    toggleModal: function(e) {
      console.log('Modal');
      var modalType = e.target.dataset.modalTrigger,
          simpleModal = (modalType === 'simple') && this.simpleModal,
          imageModal = (modalType === 'image') && this.imageModal,
          videoModal = (modalType === 'video') && this.videoModal,
          modalContent = e.target.dataset.info,
          modalActive = e.target.classList.contains('su_modal-active'),
          modalContentContainer;

      if ( simpleModal ) {
        modalContentContainer = simpleModal.querySelector('.su_modal-content');
        if ( !modalActive ) {
          modalContentContainer.textContent = modalContent;
          simpleModal.classList.add('su_modal-active');
        } else {
          modalContentContainer.textContent = '';
          simpleModal.classList.remove('su_modal-active');
        }
      }

    }

  }

  modal.init();

})();
