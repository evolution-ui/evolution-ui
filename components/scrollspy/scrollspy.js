/** SCROLLSPY COMPONENT **/
(function() {
  var heading1 = document.getElementById('heading1');
  var heading2 = document.getElementById('heading2');
  var heading3 = document.getElementById('heading3');
  var heading4 = document.getElementById('heading4');
  var heading5 = document.getElementById('heading5');
  var tab1 = document.getElementById('tab1');
  var tab2 = document.getElementById('tab2');
  var tab3 = document.getElementById('tab3');
  var tab4 = document.getElementById('tab4');
  var tab5 = document.getElementById('tab5');
  var scrollSpyDiv = document.querySelector('.su_scrollspy-container');

  scrollSpyDiv && scrollSpyDiv.addEventListener('scroll', function() {
      var currentActiveTab = document.querySelector('.su_scrollspy-active');

      if (Math.abs(heading1.getBoundingClientRect().top - tab1.getBoundingClientRect().bottom) <= 7) {
        if (currentActiveTab !== null) {
          currentActiveTab.classList.remove('su_scrollspy-active');
        }
        tab1.classList.add('su_scrollspy-active');
      }

      if (Math.abs(heading2.getBoundingClientRect().top - tab1.getBoundingClientRect().bottom) <= 7) {
        if (currentActiveTab !== null) {
          currentActiveTab.classList.remove('su_scrollspy-active');
        }
        tab2.classList.add('su_scrollspy-active');
      }

      if (Math.abs(heading3.getBoundingClientRect().top - tab1.getBoundingClientRect().bottom) <= 7) {
        if (currentActiveTab !== null) {
          currentActiveTab.classList.remove('su_scrollspy-active');
        }
        tab3.classList.add('su_scrollspy-active');
      }

      if (Math.abs(heading4.getBoundingClientRect().top - tab1.getBoundingClientRect().bottom) <= 7) {
        if (currentActiveTab !== null) {
          currentActiveTab.classList.remove('su_scrollspy-active');
        }
        tab4.classList.add('su_scrollspy-active');
      }

      if (Math.abs(heading5.getBoundingClientRect().top - tab1.getBoundingClientRect().bottom) <= 7) {
        if (currentActiveTab !== null) {
          currentActiveTab.classList.remove('su_scrollspy-active');
        }
        tab5.classList.add('su_scrollspy-active');
      }
    });
})();
/** END SCROLLSPY COMPONENT **/
