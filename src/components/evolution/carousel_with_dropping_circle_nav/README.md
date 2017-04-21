# Evolution UI Framework Component - Carousel Nav with Dropping Circles

### What is Carousel Nav with Dropping Circles?

Carousel Nav with Dropping Circles is an innovative carousel that embraces minimalism. Make sure you change the `id`s and the `for` attributes for the radio and labels if there will be additional carousels. This component does not use javascript.

### Bugs 
There is no known bugs at this time. The carousel works on all browsers.



### How to use 

To adjust the height and widths access the the config file named `_carousel_with_dropping_circle_nav-config.scss`.

* `$c-nav-drop-carousel-max-width` : adjust this value to set the max-width of the carousel 
* `$c-nav-drop-carousel-width`: adjust this value to set the carousel width below set max-width value. consider this the mobile width.
* `$c-nav-drop-carousel-height`: adjust this value for the height of carousel
* `$c-nav-drop-circles-height`: adjust this only if necessary. this will change how far the nav circles drop.

```html
            <div class="evo_c-nav-drop-carousel">
                <input type="radio" class="evo_c-nav-drop-carousel__radio" id="drop-1" name="drop-1"  />
                <input type="radio" class="evo_c-nav-drop-carousel__radio" id="drop-2" name="drop-1"  />
                <input type="radio" class="evo_c-nav-drop-carousel__radio" id="drop-3" name="drop-1"  />
                <input type="radio" class="evo_c-nav-drop-carousel__radio" id="drop-4" name="drop-1"  />
                <input type="radio" class="evo_c-nav-drop-carousel__radio" id="drop-5" name="drop-1" checked="checked" />
                <!-- label_container -->
                <div class="evo_c-nav-drop-carousel__label-wrap">
                    <div class="evo_c-nav-drop-carousel__label-container">
                        <label class="evo_c-nav-drop-carousel__drop-label" for="drop-1"></label>
                    </div>
                    <div class="evo_c-nav-drop-carousel__label-container">
                        <label class="evo_c-nav-drop-carousel__drop-label" for="drop-2"></label>
                    </div>
                    <div class="evo_c-nav-drop-carousel__label-container">
                        <label class="evo_c-nav-drop-carousel__drop-label" for="drop-3"></label>
                    </div>
                    <div class="evo_c-nav-drop-carousel__label-container">
                        <label class="evo_c-nav-drop-carousel__drop-label" for="drop-4"></label>
                    </div>
                    <div class="evo_c-nav-drop-carousel__label-container">
                        <label class="evo_c-nav-drop-carousel__drop-label" for="drop-5"></label>
                    </div>
                </div>
                
                <div class="evo_c-nav-drop-carousel__drop-content">
                    
                    <div class="evo_c-nav-drop-carousel__slide">
                        <img src="../../images/components/carousel_with_dropping_circle_nav/boat.jpg" alt="boat" />
                    </div>
                    
                    <div class="evo_c-nav-drop-carousel__slide">
                        <img src="../../images/components/carousel_with_dropping_circle_nav/color-houses.jpg" alt="sky" />
                    </div>
                    
                    <div class="evo_c-nav-drop-carousel__slide">
                        <img src="../../images/components/carousel_with_dropping_circle_nav/other-world.jpg" alt="moutains" />
                    </div>
                    
                    <div class="evo_c-nav-drop-carousel__slide">
                        <img src="../../images/components/carousel_with_dropping_circle_nav/sand-castle.jpg" alt="castle" />
                    </div>
                    
                    <div class="evo_c-nav-drop-carousel__slide">
                        <img src="../../images/components/carousel_with_dropping_circle_nav/sun-set.jpg" alt="sun" />
                    </div>
                </div>
                
            </div>

```


### Upcoming Features

There will be mixins added to make the carousel more modular and possibly some javascript. 
