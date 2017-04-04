##Paragraph Gallery

The paragraph gallery component allows you to  add contextual images to the end of a paragraph.
The images should relate to the paragraph topics for maximum impact. Paste the following code to the
end of your paragraph to include a gallery:

    <div class="paragraph-gallery">
        <div class="gallery-item__wrapper">
        <span class="paragraph-gallery__item ">
          <img class="paragraph-gallery__image" src="https://placeimg.com/350/350/animals">
        </span>
        </div>
        <div class="gallery-item__wrapper">
        <span class="paragraph-gallery__item">
          <img class="paragraph-gallery__image" src="https://placeimg.com/350/350/arch">
        </span>
        </div>
    </div>
    
 This adds two gallery images to the end of your paragraph. To add more images, simply copy and paste
 the `gallery-wrapper` chunk of code. Be sure to set your paragraphs with `display: inline` so that the galleries and the paragraphs can be aligned. The images automatically animate based on their position on screen.
 This means that - for the most part - the images will show on screen. 
 
 Issues 
 
 - gallery not fully functional on mobile screens.
 - large images extend the width and length of the screen.
 
 Have func with context images for your written content!
  
  
