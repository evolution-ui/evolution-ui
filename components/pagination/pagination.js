/* PAGINATION COMPONENT */

(function() {
  var paginationBlocks = document.querySelectorAll('.su_pagination'),
      i, len = paginationBlocks && paginationBlocks.length,
      paginationItems,
      j, size;

  function applyDisabledStyles(node) {
    node.style.backgroundColor = '#f0f0ed';
    node.style.color = '#c4c4b3';
    node.style.border = '1px solid #c4c4b3';
    node.style.pointerEvents = 'none';
  }

  for ( i = 0; i < len; i++ ) {
    paginationItems = paginationBlocks[i].querySelectorAll('li');
    if ( !paginationItems ) return;
    size = paginationItems.length;
    for ( j = 0; j < size; j++ ) {
      if ( paginationItems[j].classList.contains('su_current-page') ) {
        if ( j === 1 ) {
          applyDisabledStyles(paginationItems[j - 1]);
        } else if ( j === size - 2 ) {
          applyDisabledStyles(paginationItems[size - 1]);
        }
      }
    }
  }

})();

/* END PAGINATION COMPONENT */
