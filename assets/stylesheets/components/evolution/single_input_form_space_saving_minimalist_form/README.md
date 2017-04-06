# Evolution UI Framework Component - Single-Input Form

The single-input form shows one input field each time. Once an input is filled out correctly, click the right arrow button to go to the next input. The progress indicator rolls over to the right and fades out. The current input fades out and the next one reveals. To go back to the previous input field, click the gray left arrow. The submission message the on the last page is customizable.

To create a single-input form, the `<form>` element takes a `evo_c-sif` class. Each input card has a `evo_c-sif__input-wrap` class, which can contain a progress indicator (`evo_c-sif__indicator`), an input field (`evo_c-sif__input`), a label (`evo_c-sif__label`) working as the placeholder, a next button (`evo_c-sif__btn--next`) and a go back button (`evo_c-sif__btn--prev`). The last input card can contain a submission message with class `evo_c-sif__submission-msg`.

# Evolution UI Framework Component - Space-Saving-Minimalist Form

The space-saving-minimalist form show one input card each time. Indicators locate on the left side of an input card, which show how many inputs left to be filled out. The indicator of the active input card is in light blue color. If invalid value is entered, the indicator turns to orange red color. Once it is filled out correctly, press ENTER key or click the right arrow button to go to the next one. The next card slides in from left. The indicator moves from left to right and becomes a go back button. You can go back to previous input cards by clicking one of the go back buttons. The last card is a submission card. Clicking the left arrow brings you back to the very first card. Clicking the submit button (subscribe in this case) to submit the form and a submission message appears.
 
 
To create a space-saving-minimalist form, the `<form>` element takes a `evo_c-mini-form` class. Inputs cards are written in ascend order in the HTML file. Each of them has a `evo_c-mini-form__input-wrap` class. The first card should also have a `js-mini-form-is-active` class as default. The last card, submission card, should take a `evo_c-mini-form__submit` class. 

Inside of each card, there is a inner card wrap (`evo_c-mini-form__input-inner`). All input field, go next button and icons should go inside of the inner wrap. 

Other than the first card, the rest of cards (`evo_c-mini-form__input-wrap`) should be followed by a go back button with class `evo_c-mini-form__btn--prev`.


