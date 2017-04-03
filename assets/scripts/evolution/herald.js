window.addEventListener("load", function () {
  var herald = {
    init: function () {
      this.cacheDOM();
      this.bindEvent();
      this.loadStyles();
    },
    cacheDOM: function () {
      this.component = document.getElementById("evo_c-herald");
      this.content = document.getElementById("evo_c-herald__content");
      this.trigger = document.getElementById("evo_c-herald__trigger");
      this.rbn = document.getElementById("evo_c-herald__ribbon");
      this.messageHeight = this.content.offsetHeight;
      this.pLength = document.querySelectorAll(".evo_c-herald__message p").length;
      this.trigger.children[0].innerHTML = this.pLength;
      this.triggerValue = this.trigger.innerHTML;
    },
    bindEvent: function () {
      this.trigger.addEventListener("click",this.announce.bind(this));
    },
    announce: function () {
      this.component.classList.toggle("announce");
      this.rbn.classList.toggle("lengthen");

      if (!this.component.classList.contains("announce")) {
        this.trigger.innerHTML = this.triggerValue;
      } else {
        this.trigger.innerHTML = "X";
      }
    },
    loadStyles: function () {
      this.component.classList.remove('no-js');
      this.trigger.classList.add("clickable");
      this.content.style.webkitTransform = "translateY(-" + this.messageHeight + "px)";
    }
  };
  herald.init();
});
