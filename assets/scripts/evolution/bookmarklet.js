//-------bookmarklet.js-----------//
export default function() {

  var bookmarkListComponent = document.querySelector('.evo_c-bookmarklet');
  // JS safegaurd
  if (bookmarkListComponent === null) { return; }
  var bookmarkList = bookmarkListComponent.querySelector('.evo_c-bookmaklet__bookmark-list');
  var highlightColor = bookmarkListComponent.dataset.highlightColor;
  var clearAllBtn = bookmarkListComponent.querySelector('.evo_c-bookmarklet__clear-all');
  var selectionPopUp = document.querySelector('.evo_c-bookmarklet__pop-up');
  var selectionPopUpPip = selectionPopUp.querySelector('.evo_c-bookmarklet__pop-up-pip');
  var popUpYesBtn = selectionPopUp.querySelector('.evo_c-bookmarklet__pop-up-button--yes');
  var popUpNoBtn = selectionPopUp.querySelector('.evo_c-bookmarklet__pop-up-button--no');
  var limitBookmarklet = document.querySelector('[data-limit-bookmarklet]');
  var keysPressed = [];
  var bookmarkId = 0;
  var alertActive = false;

  window.addEventListener('keydown', _keysDown, false);
  window.addEventListener('keyup', _keysUp, false);

  if (limitBookmarklet !== null) {
    limitBookmarklet.addEventListener('mouseup', _checkForSelection, false);
  } else {
    document.addEventListener('mouseup', _checkForSelection, false);
  }

  function _keysDown(e) {

    e.preventDefault();

    keysPressed[e.keyCode] = true;
    // keyboard shortcut Shift(16) + Control(17) + L(76) + M(77)
    if (keysPressed[16] && keysPressed[17] && keysPressed[76] && keysPressed[77]) {
      var selectedRange;
      var rangeContainer;

      selectedRange = window.getSelection().getRangeAt(0);
      rangeContainer = selectedRange.startContainer;
      // check for bookmarklet limiter attribute
      if (limitBookmarklet !== null) {
        // if selected range is a decendant of the limited element
        if (limitBookmarklet.contains(rangeContainer)) {
          _bookmarkSelection(selectedRange);
        }
      } else if (limitBookmarklet === null) {
        _bookmarkSelection(selectedRange);
      }
    }
  }

  function _keysUp(e) {
    keysPressed[e.keyCode] = false;
  }

  function _checkForSelection(e) {
    if (e.target !== popUpYesBtn) {
      var selection = window.getSelection();
      var selectedRange = selection.getRangeAt(0);

      if (selectedRange.startOffset !== selectedRange.endOffset && selectedRange.startContainer === selectedRange.endContainer) {
        _setPopUp(selectedRange);
      }
    }

  }

  function _setPopUp(selectedRange) {
    if (selectedRange.startOffset !== selectedRange.endOffset) {
      selectionPopUpPip.style.left = "";
      selectionPopUpPip.style.right = "";
      selectionPopUp.style.left = "";
      selectionPopUp.style.right = "";

      var range = selectedRange;
      var rangeDims = range.getClientRects();
      var pageWidth = window.innerWidth;
      var popUpTop = rangeDims[0].top + rangeDims[0].height + 10;
      var popUpLeft = rangeDims[0].left;
      var popUpRight = rangeDims[0].width;
      var pipPosition = rangeDims[0].width / 3.25;
      selectionPopUp.style.top = popUpTop + 'px';

      if (pageWidth - 200 < popUpLeft) {
        selectionPopUp.style.right = popUpRight + 'px';
        selectionPopUpPip.style.left = 35 + '%';
      } else {
        selectionPopUp.style.left = popUpLeft + 'px';
        selectionPopUpPip.style.left = pipPosition < 169 ? pipPosition + 'px' : 50 + '%';
      }

      selectionPopUp.classList.add('evo_c-bookmarklet__pop-up--is-visible');

      popUpYesBtn.addEventListener('mousedown', _pressedYes(range), false);
      popUpNoBtn.addEventListener('click', function() {
        selectionPopUp.classList.remove('evo_c-bookmarklet__pop-up--is-visible');
        range.collapse();
      }, false);
    }
  }

  function _pressedYes(range) {
    return function(e) {
      selectionPopUp.classList.remove('evo_c-bookmarklet__pop-up--is-visible');
      _bookmarkSelection(range, true);
    };
  }

  function _bookmarkSelection(selectedRange, fromButton) {

    var calledFromButton = fromButton || false;
    var alertNode;
    var selectionString;
    var highlightNode;
    var highlightNodeQueryString;
    var bookmarkAnchorLink;
    var listNode;
    var closeIcon;
    var googleSearchBtn;
    var alertBackground;


    alertNode = bookmarkListComponent.parentNode;


    // create span node for text hightlighting
    highlightNode = document.createElement('span');
    highlightNode.className = 'evo_c-bookmarklet__highlight-text';

    // sets text highlight color if specified in data-highlight-color attribute - defaults to yellow;
    if (highlightColor) {
      highlightNode.style = 'background-color: ' + highlightColor;
    }

    if (selectedRange) {

      // get the range of selected text and surround it with the hightlighting span

      if (selectedRange.startContainer === selectedRange.endContainer && selectedRange.startOffset !== selectedRange.endOffset) {

        // surround selected text with hightlighting span
        selectedRange.surroundContents(highlightNode);

        // add unique id to highlighted span
        highlightNode.setAttribute('id', 'bookmarklet_' + bookmarkId);

        // create li node for widget ol
        listNode = document.createElement('li');
        listNode.className = 'evo_c-bookmarklet__bookmark-list-item';

        // create close icon
        closeIcon = document.createElement('i');
        closeIcon.className = 'material-icons evo_c-bookmarklet__close-icon';
        closeIcon.innerHTML = 'close';

        highlightNodeQueryString = encodeURIComponent(highlightNode.innerHTML);
        highlightNodeQueryString = highlightNodeQueryString.replace(/%20/g, '+');

        // create google search button
        googleSearchBtn = document.createElement('a');
        googleSearchBtn.classList.add('evo_c-bookmarklet__google-button');
        googleSearchBtn.setAttribute('target', '_blank');
        googleSearchBtn.setAttribute('href', 'http://www.google.com/search?q=' + highlightNodeQueryString);
        googleSearchBtn.innerHTML = 'Google this bookmark <i class="material-icons">open_in_new</i>';

        // create anchor tag for widget li
        bookmarkAnchorLink = document.createElement('a');

        // set anchor link to bookmarklet ID
        bookmarkAnchorLink.setAttribute('href', '#' + 'bookmarklet_' + bookmarkId);

        // copy over the highlighted text
        bookmarkAnchorLink.innerHTML = highlightNode.innerHTML;

        // append anchor element and text to widget li
        listNode.appendChild(bookmarkAnchorLink);

        // append close icon to listNode
        listNode.appendChild(closeIcon);

        // append google search link
        listNode.appendChild(googleSearchBtn);

        // append li to widget ol
        bookmarkList.appendChild(listNode);

        // increment bookmarkId var
        bookmarkId += 1;

        // show the bookmarklet component
        bookmarkListComponent.classList.add('evo_c-bookmarklet--is-visible');

        if (!calledFromButton) {
          selectionPopUp.classList.remove('evo_c-bookmarklet__pop-up--is-visible');
        }

        selectedRange.collapse();

      } else {
        if (!calledFromButton && selectedRange.startContainer !== selectedRange.endContainer && !alertActive) {

          alertActive = true;
          // create background div and add class
          alertBackground = document.createElement('div');
          alertBackground.classList.add('evo_c-bookmarklet__alert-background--warning');
          // create warning div and add class
          var warning = document.createElement('div');
          warning.classList.add('evo_c-bookmarklet__alert--warning');
          // add in html and message
          warning.innerHTML = '<i class="material-icons">warning</i><p><strong>D\'oh!</strong> Your selection can\'t be a bookmarked.</p><p><small><em>(Keep your selection within a single HTML tag)</em></small></p>' + '<span class="c-alert__close-alert">' + '<i class="fa fa-times"></i>' + '</span>';
          // add event listener for dismissing of alert
          alertNode.addEventListener('click', _dismissAlert(warning, alertBackground), false);
          // append alert div and background to document
          alertNode.appendChild(warning);
          alertNode.appendChild(alertBackground);
        }
        if (!calledFromButton && selectedRange.startOffset === selectedRange.endOffset && !alertActive) {

          alertActive = true;
          // create background div and add class
          alertBackground = document.createElement('div');
          alertBackground.classList.add('evo_c-bookmarklet__alert-background--caution');
          // create alert div and add class
          var caution = document.createElement('div');
          caution.classList.add('evo_c-bookmarklet__alert--caution');
          // add in html and message
          caution.innerHTML = '<i class="material-icons">sentiment_dissatisfied</i><p><strong>Oops!</strong> You didn\'t select anything to bookmark. Nothing to see here...</p>' + '<span class="c-alert__close-alert">' + '<i class="fa fa-times"></i>' + '</span>';
          // add event listener for dismissing of alert
          alertNode.addEventListener('click', _dismissAlert(caution, alertBackground), false);
          // append alert div and background to document
          alertNode.appendChild(caution);
          alertNode.appendChild(alertBackground);

        }
      }

    }

    // create remove list item listeners
    _buildClearBookmarkListItemListeners();

  } // end of _bookmarkSelection

  function _buildClearBookmarkListItemListeners() {
    var closeIcons = document.querySelectorAll('.evo_c-bookmarklet__close-icon');
    var numOfListItems = closeIcons.length;
    var i;

    // add event listeners to close icons
    for (i = 0; i < numOfListItems; i++) {
      closeIcons[i].addEventListener('click', _removeListItem);
    }

    // add event listener to clear all button
    clearAllBtn.addEventListener('click', _clearAllBookmarks);

  } // end of _buildClearBookmarkListItemListeners

  function _removeListItem(e) {

    e.preventDefault();

    var listItem = e.target;

    _clearListItemAndNormalizeNode(listItem);

  } // end of _removeListItem function

  function _clearListItemAndNormalizeNode(listItem) {

    var listItemId = listItem.previousSibling.getAttribute('href').slice(1);
    var bookmarkedSpan = document.getElementById(listItemId);
    var spanContent = document.createTextNode(bookmarkedSpan.innerHTML);
    var spanParent = bookmarkedSpan.parentNode;

    // spanParent.removeAttribute('data-bookmark');
    spanParent.replaceChild(spanContent, bookmarkedSpan);
    spanParent.normalize();

    // closing animation on list item
    listItem.parentNode.classList.add('evo_c-bookmarklet--remove');

    // after animation runs remove alert from DOM
    listItem.parentNode.addEventListener('animationend', function() {

      listItem.parentNode.remove();
      bookmarkList.normalize();

      // hide bookmark list if no list items are present
      if (bookmarkList.children.length === 0) {
        bookmarkListComponent.classList.remove('evo_c-bookmarklet--is-visible');
      }

    });
  } // end of _clearListItemAndNormalizeNode

  function _clearAllBookmarks() {
    var closeIcons = Array.prototype.slice.call(document.querySelectorAll('.evo_c-bookmarklet__close-icon'));

    closeIcons.forEach(function(listItem) {
      _clearListItemAndNormalizeNode(listItem);
    });
  } // end of _clearAllBookmarks

  function _dismissAlert(alertMessageNode, bg) {
    return function(e) {
      alertMessageNode.classList.add('evo_c-bookmarklet__alert--is-dismissed');
      bg.classList.add('evo_c-bookmarklet__alert-background--is-dismissed');

      alertActive = false;

      alertMessageNode.addEventListener('animationend', function() {
        alertMessageNode.remove();
        bg.remove();
      });
    };
  }

}

