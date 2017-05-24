/**
 * Created by stu on 4/12/17.
 */
export default function () {
    var carousel = document.getElementById("evo_c-carousel-border-nav") || undefined;

    if(carousel !== undefined) {
        var innerDefault = "evo_c-carousel-border-nav__inner--default";
        var innerActive = "evo_c-carousel-border-nav__inner--active";
        var borderActive = "evo_c-carousel-border-nav__border--active";
        var borderDefault = "evo_c-carousel-border-nav__border--default";




        carousel.addEventListener("click", function(e) {
            if(e.target.nodeName==="IMG"){
                var clickedLayer = e.target.parentNode.parentNode;
            }else {
                clickedLayer = e.target.parentNode;
            }

            var targetBorder = clickedLayer.children[0];
            var topLayerIndex = 0;
            var carouselLayers = document.querySelectorAll(".evo_c-carousel-border-nav__layer");

            for (var i = 0; i < carouselLayers.length; i++) {
                if (clickedLayer === carouselLayers[i]) { //target the clicked
                    // layer
                    var currentLayerIndex = i;
                }
            }
            if (/default/.test(targetBorder.className)) { // if the clicked
                // element has default class toggle the active
                // classes
                for (var j = currentLayerIndex; j >= topLayerIndex; j--) { //apply to
                    // current and all layers on top of current
                    (function hideLayers() {
                        var layer = document.querySelectorAll(".evo_c-carousel-border-nav__layer")[j];
                        var inner = layer.children[1];
                        var border = layer.children[0];
                        var styles = window.getComputedStyle(layer);
                        var zIndex = styles.getPropertyValue('z-index');

                        inner.classList.remove(innerDefault);
                        inner.classList.add(innerActive);
                        border.classList.remove(borderDefault);
                        border.classList.add(borderActive);
                        if (zIndex > 0) {//Image is
                            setTimeout(function() {
                                layer.style.zIndex = zIndex * -1;
                            }, 500);
                        }
                    })();
                }
            } else if (/active/.test(targetBorder.className)) { //toggle the default
                // classes
                for (var k = currentLayerIndex; k < 3; k++) { //apply to
                    // current and all layers below current
                    var layer = document.querySelectorAll(".evo_c-carousel-border-nav__layer")[k];
                    var inner = layer.children[1];
                    var border = layer.children[0];
                    var styles = window.getComputedStyle(layer);
                    var zIndex = styles.getPropertyValue('z-index');

                    inner.classList.remove(innerActive);
                    inner.classList.add(innerDefault);
                    border.classList.remove(borderActive);
                    border.classList.add(borderDefault);
                    if (zIndex < 0) {
                        layer.style.zIndex = zIndex * -1;
                    }
                }
            }
        })
    }
}
