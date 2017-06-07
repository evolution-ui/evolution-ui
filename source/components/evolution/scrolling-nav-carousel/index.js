export default function() {
    
        var slides = document.querySelectorAll('.evo_c-scrolling-nav__item'),
            slideContainer = document.querySelector('.evo_c-scrolling-nav__container'),
            slidesLength = slides.length,
            currentSlide = slidesLength - 1,
            notifier = document.querySelector('.evo_c-scrolling-nav__notifier'),
            notifiers = [],
            rewindInterval = 200;

        // Status classes
        var isCurrentClass = 'is-current';
        var isPreClass = 'is-pre';

        /* Initialize Notifiers */
        function initNotifiers() {
            var item;
            for (var i = 0; i < slidesLength; i++) {
                item = document.createElement('LI');
                notifier.appendChild(item);
                notifiers.push(item);
            }
            notifier.firstElementChild.classList.add(isCurrentClass);
        }
        /*mouse control slider*/
        function controlSlider(e) {
            var e = window.event || e;
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
            if (delta > 0) {
                returnSlide();
            } else {
                nextSlide();
            }
        }


        function nextSlide() {
            goToSlide(currentSlide - 1);
        }

        function returnSlide() {
            var rewind = window.setInterval(function() {
                var previousSlide = currentSlide + 1;
                goToSlide(previousSlide);
                if (previousSlide === slides.length) {
                    slides[currentSlide].classList.remove(isPreClass);
                    clearInterval(rewind);
                }
            }, rewindInterval);
        }

        function goToSlide(n) {
            var activeNotifier;
            var currentNotifier;

            // Guard conditions
            if (n < 0 || n >= slidesLength) {
                return;
            }

            activeNotifier = document.querySelector('.' + isCurrentClass);
            currentNotifier = (slidesLength - 1) - n;

            // no longer the current one
            activeNotifier.classList.remove(isCurrentClass);
            // set the new notifier
            notifiers[currentNotifier].classList.add(isCurrentClass);

            if (currentSlide < n) {
                slides[currentSlide].classList.remove(isPreClass);
            } else {
                slides[currentSlide].classList.add(isPreClass);
            }

            currentSlide = n;
        }

        // Initialize the notifier's list
        notifier && initNotifiers();

        /***************************************************************************
         *                            Event Listeners
         **************************************************************************/

        slideContainer.addEventListener("wheel", controlSlider);

 

}