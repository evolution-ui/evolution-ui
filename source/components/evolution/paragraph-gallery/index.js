function setupGalleries() {
    let galleries = document.querySelectorAll('.paragraph-gallery');
    let i, j;

    for (i = 0; i < galleries.length; i++) {
        let galleryItems = galleries[i].querySelectorAll('.paragraph-gallery__item');
        for (j = 0; j < galleryItems.length; j++) {
            let galleryItem = galleryItems[j];
            let galleryImage = galleryItem.querySelector('.paragraph-gallery__image');

            if(galleryItem.classList.contains('animate-down')){
                galleryItem.classList.remove('animate-down');
                galleryImage.classList.remove('animate-down');
            }
            if(galleryItem.classList.contains('animate-left')){
                galleryItem.classList.remove('animate-left');
                galleryImage.classList.remove('animate-left');
            }
            if(galleryItem.classList.contains('animate-right')){
                galleryItem.classList.remove('animate-right');
                galleryImage.classList.remove('animate-right');
            }
            if(galleryItem.classList.contains('animate-up')){
                galleryItem.classList.remove('animate-up');
                galleryImage.classList.remove('animate-up');
            }


            let galleryImageRect = galleryImage.getBoundingClientRect();
            let galleryImageWidth = galleryImageRect.width;
            let galleryImageHeight = galleryImageRect.height;
            let galleryImageTop = galleryImageRect.top;
            let galleryImageLeft = galleryImageRect.left;
            console.log(galleryImageTop);

            if (galleryImageTop < 12) {
                galleryItems[j].classList.add('animate-down');
                galleryImage.classList.add('animate-down')
            } else {
                galleryItems[j].classList.add('animate-up');
                galleryImage.classList.add('animate-up')
            }

            if (galleryImageLeft < 12) {
                galleryItems[j].classList.add('animate-right');
                galleryImage.classList.add('animate-right')
            } else {
                galleryItems[j].classList.add('animate-left');
                galleryImage.classList.add('animate-left')
            }

            galleryItems[j].addEventListener('mouseenter', function(event) {

                let item = event.target;
                item.style.width = galleryImageWidth + 'px';
                item.style.height = galleryImageHeight + 'px';
                item.style.opacity = '1';
                item.style.zIndex = '999';
            });
            galleryItems[j].addEventListener('mouseleave', function(event) {
                let item = event.target;
                item.style.width = '1em';
                item.style.height = '1em';
                item.style.opacity = '0.4';
                item.style.zIndex = '1';
            });
        }
    }
}

let resizeTimeout;
function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
        resizeTimeout = setTimeout(function() {
            resizeTimeout = null;
            actualResizeHandler();

            // The actualResizeHandler will execute at a rate of 15fps
        }, 66);
    }
}

function actualResizeHandler() {
    // handle the resize event

    setupGalleries();
}

window.addEventListener('load', setupGalleries);

window.addEventListener("resize", resizeThrottler, false);


