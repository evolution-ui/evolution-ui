/**
 * Created by stu on 4/4/17.
 */
export default function(){
    var searchInput = document.getElementById("evo_c-searchBar__searchInput")
    var editorField = document.getElementById("evo_c-searchBar__searchEditor");
    var checkBoxLabel = document.getElementById("evo_c-searchBar__searchEditorControlLabel");
    var expandIcon = document.getElementById("evo_c-searchBar__expand");
    if(searchInput != null){
        var searchBoxWidth = searchInput.clientWidth;
    }


    var exposeSearch = {
        placeInEditor: function () {
            editorField.innerText = searchInput.value;
        },
        editorToSearch: function () {
            searchInput.value = editorField.innerText;
        },
        expandIconCheck: function () {
            if (exposeSearch.getInputPixelWidth(searchInput) >= searchBoxWidth) {
                expandIcon.style.visibility = "visible";
            } else {
                expandIcon.style.visibility = "hidden";
            }
        },
        getInputPixelWidth: function (elem) {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext("2d");
            var style = window.getComputedStyle(elem, null);
            var fontSize = style.getPropertyValue('font-size');
            var fontFamily = style.getPropertyValue('font-family');
            var fontWeight = style.getPropertyValue('font-weight');
            ctx.font = fontWeight + " " + fontSize + " " + fontFamily;
            var width = ctx.measureText(searchInput.value).width;
            return width;
        },
        hideEditorWhenInputVisible: function() {
            if(editorField.style.display === "block"){
                if (exposeSearch.getInputPixelWidth(searchInput) < searchBoxWidth) {
                    editorField.style.display = "none";
                    searchInput.focus();
                }
            }
        },
        toggleEditor: function(){
            if(editorField.style.display === "" || editorField.style.display === "none"){
                editorField.style.display = "block";
                editorField.focus();
            }else if(editorField.style.display === "block"){
                editorField.style.display = "none";
            }
        },
        /*toggleEditorShortCut: function (event){
         if (event.keyCode === 17){
         exposeSearch.toggleEditor();
         }
         },*/
        handleKeyPress: function (){
            exposeSearch.expandIconCheck();
            exposeSearch.hideEditorWhenInputVisible();
            //exposeSearch.toggleEditorShortCut();
            if(this === searchInput) {
                exposeSearch.placeInEditor();
            }else {
                exposeSearch.editorToSearch();
            }
        }
    };

    if(searchInput != null){ //Prevents code from running if component
        // doesn't exist in html

        editorField.addEventListener("keydown",function(){
            var bound = exposeSearch.handleKeyPress.bind(editorField);
            bound();
        });

        searchInput.addEventListener("keydown",function(){
            var bound = exposeSearch.handleKeyPress.bind(searchInput);
            bound();
        });

        checkBoxLabel.addEventListener("mousedown",function(event){
            event.preventDefault();
            exposeSearch.toggleEditor();

        });

        editorField.addEventListener("blur",function(){
            editorField.style.display = "none";
            exposeSearch.expandIconCheck();
            searchInput.focus();
        });
    }
}
