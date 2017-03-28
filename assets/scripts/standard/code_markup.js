(function() {
  var tabElements = document.getElementsByClassName('js-c-markup-toggle');

  console.log(tabElements);
  console.log(typeof(tabElements));
  if (tabElements) {
    for (var i = 0; i < tabElements.length; i++) {
      tabElements[i].addEventListener('click', function(event) {
        // console.log(event.target);
        // console.log(this.childNodes);
        // console.log(this.parentNode.children[1]);
        // console.log(event.target);
        if (event.target.classList.contains("is-active")) {
          event.target.classList.remove("is-active");
          this.parentNode.children[1].classList.remove("is-expanded");
        } else {
          // console.log(this.children);
          for (var i = 0; i < this.children.length; i++) {
            if (this.children[i].classList.contains("is-active")) {
              this.children[i].classList.remove("is-active");
            }
          }
          console.log(this);
          event.target.classList.add("is-active");
          // console.log(this.parentNode.children[1].classList);
          this.parentNode.children[1].classList.add("is-expanded");
          // console.log(this.parentNode.children[1].children);
          for (var i = 0; i < this.parentNode.children[1].children.length; i++) {
            if (this.parentNode.children[1].children[i].classList.contains("is-active")) {
              this.parentNode.children[1].children[i].classList.remove("is-active");
            }
          }

          // for (var i = 0; i < this.children[1].children.length; i++) {
          //   if (this.children[1].children.classList.contains("is-active")) {
          //     this.children[1].children[i].classList.remove("is-active");
          //   }

          for (var i = 0; i < this.parentNode.children[1].children.length; i++) {
            if (this.children[i].classList.contains("is-active")) {
              this.parentNode.children[1].children[i].classList.add("is-active");
            }
          }

        }
        // var allTabs = this.childNodes;
        // for (var i = 0; allTabs.length; i++) {

        // }

      }, false);
    }
  }
})();
