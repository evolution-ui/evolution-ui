# Carousel

Carousels can be used with either a fade transition or a slide transition. They can contain bullet navigation, arrow navigation, and thumbnail navigation. Arrow navigation can be combined with both bullet and thumbnails.

The basic markup for a carousel is:

```HTML
<div class="evo_c-carousel__wrapper">
          <div class="evo_c-carousel evo_c-carousel--fader-type" data-bullet-nav>
            <!-- bullet navigation -->
            <ol class="evo_c-carousel__bullet-nav">
              <li class="evo_c-carousel__bullet-nav-item evo_c-carousel__bullet-nav-item--is-active" data-slide-index="0"></li>
              <li class="evo_c-carousel__bullet-nav-item" data-slide-index="1"></li>
              <li class="evo_c-carousel__bullet-nav-item" data-slide-index="2"></li>
            </ol>
            <!-- carousel slide container -->
            <div class="evo_c-carousel__slides-container">
              <!-- carousel slide -->
              <div class="evo_c-carousel__slide evo_c-carousel__slide--is-selected">
                <img class="evo_c-carousel__image" src="path/to/image" alt="">
              </div>
              <!-- carousel slide -->
              <div class="evo_c-carousel__slide">
                <img class="evo_c-carousel__image" src="path/to/image" alt="">
              </div>
              <!-- carousel slide -->
              <div class="evo_c-carousel__slide">
                <img class="evo_c-carousel__image" src="path/to/image" alt="">
              </div>
              <!-- carousel arrow navigation -->
              <a href="" class="evo_c-carousel__arrow-nav evo_c-carousel__arrow-nav--left" data-slide-nav="prev">
                <i class="material-icons evo_c-carousel__arrow-nav-icon">navigate_before</i>
              </a>
              <a href="" class="evo_c-carousel__arrow-nav evo_c-carousel__arrow-nav--right" data-slide-nav="next">
                <i class="material-icons evo_c-carousel__arrow-nav-icon">navigate_next</i>
              </a>
            </div>
          </div>
        </div>
```

### Limiting width

Each carousel should have a max-width set on it at most to the maximum width dimension of its slides.   The max-width is set on the `.evo_c-carousel__wrapper` div at the top of the carousel scss file: 

```scss
.evo_c-carousel__wrapper {
  max-width: 800px; // set max-width to match maximum width of carousel slide images
}
```


### Transition types

Carousels can have fader type or slider type transitions.

### Fader

To have fading transitions between slides add the `evo_c-carousel--fader-type` class to the `<div class="evo_c-carousel>` (the div just inside `div.evo_c-carousel__wrapper`)

### Slider

To have sliding transitions between slides add the `evo_c-carousel--slider-type` class to the `<div class="evo_c-carousel>` (the div just inside `div.evo_c-carousel__wrapper`)



## Carousel with thumbnail navigation

Carousels can also use thumbnail navigation instead of bullet navigation:

```HTML
<div class="evo_c-carousel__wrapper">
          <div class="evo_c-carousel evo_c-carousel--slider-type" data-thumbnail-nav>
          <!-- carousel slide container -->
            <div class="evo_c-carousel__slides-container">
              <!-- carousel slide -->
              <div class="evo_c-carousel__slide evo_c-carousel__slide--is-selected">
                <img class="evo_c-carousel__image" src="path/to/image" alt="">
              </div>
              <!-- carousel slide -->
              <div class="evo_c-carousel__slide">
                <img class="evo_c-carousel__image" src="path/to/image" alt="">
              </div>
              <!-- carousel slide -->
              <div class="evo_c-carousel__slide">
                <img class="evo_c-carousel__image" src="path/to/image" alt="">
              </div>
              <!-- carousel arrow navigation -->
              <a href="" class="evo_c-carousel__arrow-nav evo_c-carousel__arrow-nav--left" data-slide-nav="prev">
                <i class="material-icons evo_c-carousel__arrow-nav-icon">navigate_before</i>
              </a>
              <a href="" class="evo_c-carousel__arrow-nav evo_c-carousel__arrow-nav--right" data-slide-nav="next">
                <i class="material-icons evo_c-carousel__arrow-nav-icon">navigate_next</i>
              </a>
            </div>
            <!-- thumb navigation -->
            <ol class="evo_c-carousel__thumb-nav">
              <li class="evo_c-carousel__thumb-nav-item evo_c-carousel__thumb-nav-item--is-active" data-slide-index="0">
                <img class="evo_c-carousel__thumb-image" src="path/to/thumbnail/image" alt="">
              </li>
              <li class="evo_c-carousel__thumb-nav-item" data-slide-index="1">
                <img class="evo_c-carousel__thumb-image" src="path/to/thumbnail/image" alt="">
              </li>
              <li class="evo_c-carousel__thumb-nav-item" data-slide-index="2">
                <img class="evo_c-carousel__thumb-image" src="path/to/thumbnail/image" alt="">
              </li>
            </ol>
          </div>
        </div>
```

