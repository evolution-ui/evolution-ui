(function() {
    var $markupButtons = $('.site-markup-toggle');
    var $modal = $('.markup-modal');
    var $markupContainer = $('.markup-modal__markup');
    var $modalClose = $('.modal-close');
    var $markupTitle = $('.markup-modal__markup-title');
    var body = document.body;

    //console.log("Derp!");

    $markupButtons.on('click', function(event) {
        event.preventDefault();
        $clickedButton = $(this);

        //show modal
        $modal.addClass("markup-modal--shown");
        $modalClose.addClass('modal-close--shown');
        body.classList.add("modal-no-scroll");

        //populate markup container
        var $componentMarkupClone = $clickedButton.siblings('.site-markup-content').clone(true);
        var titleText = $clickedButton[0].parentNode.parentNode.previousElementSibling.previousElementSibling.textContent;
        var variantText;
        //console.log(titleText);

        //check for sub heading (indicating component variant)
        if($clickedButton.closest(".site-section-content").find("h2").length > 1) {
            variantText = $clickedButton.parent().prevAll("h2").first().text();
            titleText += " - " + variantText + " Markup";
            //console.log(variantText);
        } else {
            titleText += " Markup";
        }

        $markupTitle.text(titleText);
        $componentMarkupClone.css('display', 'block');
        $markupContainer.empty();
        $markupContainer.append($componentMarkupClone);
        // $markupContainer.addClass('markup-modal__markup--shown');
    });

    $modalClose.on('click', function(event) {
        event.preventDefault();
        $modal.removeClass("markup-modal--shown");
        $modalClose.removeClass('modal-close--shown');
        body.classList.remove("modal-no-scroll");
    });
})();
