(function() {

  var modal = {

    init: function() {
      this.cacheDom();
      this.addEvents();
    },

    cacheDom: function() {
      this.modalTriggers = document.querySelectorAll('[data-modal-trigger]');
      this.simpleModal = document.querySelector('.su_modal-simple');
      this.imageModal = document.querySelector('.su_modal-image');
      this.videoModal = document.querySelector('.su_modal-video');
      this.modalClose = document.querySelectorAll('.su_modal-close');
    },

    addEvents: function() {
      var i, len = this.modalTriggers && this.modalTriggers.length;

      for ( i = 0; i < len; i++ ) {
        this.modalTriggers[i].addEventListener('click', this.showModal.bind(this));
      }

      len = this.modalClose.length;
      for ( i = 0; i < len; i++ ) {
        this.modalClose[i].addEventListener('click', this.hideModal.bind(this));
      }

    },

    showModal: function(e) {
      var modalType = e.target.dataset.modalTrigger,
          simpleModal = (modalType === 'simple') && this.simpleModal,
          imageModal = (modalType === 'image') && this.imageModal,
          videoModal = (modalType === 'video') && this.videoModal,
          modalContent = e.target.dataset.info,
          modalContentContainer;

      if ( simpleModal ) {
        modalContentContainer = simpleModal.querySelector('.su_modal-content');
        modalContentContainer.textContent = modalContent;
        simpleModal.classList.add('su_modal-active');
      }

      // Code for other modal types will go here

    },

    hideModal: function(e) {
      e.target.parentElement.classList.remove('su_modal-active');
    }

  };

  modal.init();

})();
