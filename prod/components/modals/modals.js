(function() {

  var modal = {

    init: function() {
      this.cacheDom();
      this.addEvents();
    },

    cacheDom: function() {
      this.modalTypes = document.querySelectorAll('[data-modal-type]');
      this.modal = document.querySelector('.su_modal');
      this.modalClose = document.querySelector('.su_modal-close');
    },

    addEvents: function() {
      var i, len = this.modalTypes && this.modalTypes.length;

      for ( i = 0; i < len; i++ ) {
        this.modalTypes[i].addEventListener('click', this.showModal.bind(this));
      }

      this.modalClose.addEventListener('click', this.hideModal.bind(this));

    },

    showModal: function(e) {
      var modal = this.modal,
          modalType = e.target.dataset.modalType,
          modalTextContent = e.target.dataset.modalTitle,
          modalMediaContent = e.target.dataset.modalMedia,
          modalContentContainer;

      if ( modal ) {
        modalMediaContentContainer = modal.querySelector('.su_modal-media');
        modalMediaContentContainer.innerHTML = '';
        modalMediaContentContainer.appendChild(this.addMedia[modalType](modalMediaContent, e));
        modalTextContentContainer = modal.querySelector('.su_modal-title');
        modalTextContentContainer.textContent = modalTextContent;
        modal.classList.add('su_modal-active');
      }

    },

    addMedia: {
      simple: function(content, e) {
        console.log(content);
        var element = document.createElement('p');
        element.innerHTML = content || 'No content provided!';
        return element;
      },
      image: function(content, e) {
        var element = document.createElement('img'),
        // if the image url is explicitly provided through 'data-modal-media' attribute, use that url
        // else use the 'src' attribute from the 'img' tag, and if that somehow does not exist, use placeholder image
            url = content || e.target.getAttribute('src') || '../img/no_image.png';
        element.setAttribute('src', url);
        return element;
      },
      video: function(content, e) {
        var element = document.createElement('div'),
            iframe = document.createElement('iframe'),
            url = content || 'https://www.youtube.com/embed/Sw5TfUi5rtQ'; // read url from 'data-modal-media' attribute, or fall back to this video
        iframe.setAttribute('src', url);
        iframe.setAttribute('frameborder', 0);
        element.classList.add('su_video_container');
        element.appendChild(iframe);
        return element;
      }
    },

    hideModal: function(e) {
      e.target.parentElement.classList.remove('su_modal-active');
    }

  };

  modal.init();

})();
