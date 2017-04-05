# Evolution UI Framework Component - Single-Input Form

The single-input form shows one input field each time. Once an input is filled out correctly, click the right arrow button to go to the next input. The progress indicator rolls over to the right and fades out. The current input fades out and the next one reveals. To go back to the previous input field, click the gray left arrow. The submission message the on the last page is customizable.

To create a single-input form, the `<form>` element takes a `evo_c-sif` class. Each input card has a `evo_c-sif__input-wrap` class, which can contain a progress indicator (`evo_c-sif__indicator`), an input field (`evo_c-sif__input`), a label (`evo_c-sif__label`) working as the placeholder, a next button (`evo_c-sif__btn--next`) and a go back button (`evo_c-sif__btn--prev`). The last input card can contain a submission message with class `evo_c-sif__submission-msg`.
