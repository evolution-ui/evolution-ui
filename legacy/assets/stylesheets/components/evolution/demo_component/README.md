##Evolution UI Demo Component

This component can be used to give helpful information to the 
user about various parts of a website. It also allows the user to cycle through all the help messages you've added. The components can be used anywhere
on the page, just add the following block of code to the section you'd like to describe.

    <div class="c-demo-help" help-order="help1">
         <div class="c-demo-help__content is-hidden">
             <span class="c-demo-help__message">
                This is a message describing something
             </span>
             <ul class="c-demo-help__controls">
                 <li><button class="c-demo-help__controls-prev c-demo-help__button h-bg-primary2" title="Previous Tip"><i class="material-icons">chevron_left</i></button></li>
                 <li><button class="c-demo-help__button h-bg-accent2" title="Close Tip"><i class="material-icons">clear</i></button></li>
                 <li><button class="c-demo-help__controls-next c-demo-help__button h-bg-primary2" title="Next Tip"><i class="material-icons">chevron_right</i></button></li>
             </ul>
         </div>
    </div>
    
Demo items are displayed using `inline-flex` to be as least intrusive as possible. 

NOTE: The `help-order` attribute in the HTML is useful for setting the order that these
messages appear. To give the user a smooth experience, you need to set them in ascending order like 1,2,3 etc.
 
NOTE: Google Material Icons are required for this component to work.

Give your visitors useful help on your website with Evolution UI's demo component. Cheers!
