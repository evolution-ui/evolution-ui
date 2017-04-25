/**
 * Created by stu on 4/12/17.
 */
export default function () {
    var carousel = document.getElementById("evo_c-minimalist-carousel-two");
    var carouselLayer = document.getElementsByClassName("evo_c-minimalist-carousel-two__layer");
    var innerDefault = "evo_c-minimalist-carousel-two__inner--default";
    var innerActive = "evo_c-minimalist-carousel-two__inner--active";
    var borderActive = "evo_c-minimalist-carousel-two__border--active";
    var borderDefault = "evo_c-minimalist-carousel-two__border--default";


    carousel.addEventListener("click",function(e) {
        var parent = e.target.parentNode;
        var border = parent.children[0];
        var lastPage = 0;
        for(var i=0; i < carousel.children.length; i++){
            if(parent === carousel.children[i]){//target the clicked layer
                var elementIndex = i;
                var  styles = window.getComputedStyle(carouselLayer[elementIndex]);
                var zIndex= styles.getPropertyValue('z-index');
                var currentPage = carouselLayer[elementIndex];
                if(zIndex > 0) {// > 0 indicates page image is visible.
                    setTimeout(function(){  currentPage.style.zIndex = zIndex*-1;
                    }, 500);

                }else{
                    currentPage.style.zIndex = zIndex*-1;
                    if(carouselLayer[elementIndex+1] !== undefined){
                        carouselLayer[elementIndex+1].style.zIndex = zIndex*-1-1;
                    }
                }
            }
        }

        function transitionCallBack() {//called when the clip-path transition is
            // over
            //currentPage.style.transition = ".3s all ease";
            currentPage.style.zIndex = zIndex * -1; //toggle the zIndex
        }


        if(/default/.test(border.className)){ // if the clicked
            // element has default class toggle the active
            // classes
            for(var j = elementIndex; j >= lastPage; j--) {//apply to
                // current and all layers on top of current
                carousel.children[j].children[1].classList.remove(innerDefault);
                carousel.children[j].children[1].classList.add(innerActive);
                carousel.children[j].children[0].classList.remove(borderDefault);
                carousel.children[j].children[0].classList.add(borderActive);
                //
            }
        }else if(/active/.test(border.className))  { //toggle the default
            // classes
            for(var k = elementIndex; k <carousel.children.length;k++){ //apply to
                // current and all layers below current
                carousel.children[k].children[1].classList.remove(innerActive);
                carousel.children[k].children[1].classList.add(innerDefault);
                carousel.children[k].children[0].classList.remove(borderActive);
                carousel.children[k].children[0].classList.add(borderDefault);
            }
        }
    });
};