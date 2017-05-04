/**
 * Created by Neverland on 4/24/17.
 */

$(window).load(function() {
    "use strict";

    //Constructors

    //get layer heights
    var firstLayerHeight = getFirstLayerHeight();
    console.log("First layer: ", firstLayerHeight);
    var lastLayerHeight = getLastLayerHeight();
    console.log("Last layer: ", lastLayerHeight);

    var largestLayerHeight = Math.max(parseInt(firstLayerHeight), parseInt(lastLayerHeight));
    console.log(largestLayerHeight);
    $('.evo_c_multiLayers_container')[0].style.maxHeight = (largestLayerHeight * 1.005) + "px";

    $('.evo_c_multiLayers_container')[0].style.height = lastLayerHeight + 100 + "px";
    // $('.site-main')[0].style.height = lastLayerHeight + 200 + "px";
    console.log("Container height: ", $('.evo_c_multiLayers_container')[0].style.height);

    //create a layer/height object

    var layerHeights =
    [{
        name: "evolution",
        "height": parseInt(lastLayerHeight),
        id: "2"
    },
    {
        name: "standard",
        "height": parseInt(firstLayerHeight),
        id: "1"

    }];

    var $layers = $('.evo_c_multiLayers_layer');

    $layers.filter(":not(.selected-layer)")[0].style.height = 1000 + "px";

    $layers.on('click', function(event) {
        event.preventDefault();
        var $clickedLayer = $(this);
        var clickedLayerID = $clickedLayer.data('layer-id');

        //switch classes
        $layers.removeClass('selected-layer');
        $clickedLayer.addClass('selected-layer');

        // get height of selected laye rusing object
        for(var i = 0; i < layerHeights.length; i++) {
            if(parseInt(layerHeights[i].id) === parseInt(clickedLayerID)) {
               $('.evo_c_multiLayers_container')[0].style.height = layerHeights[i].height + 100 + "px";
            }
        }

    });


    setInitialLayerCSSPropertyValue();
    createLayerMapping();
    createClickEventListener();
    createScrollEventListener();

    function setInitialLayerCSSPropertyValue() {
        var tempLayers = Array.from(document.getElementsByClassName('evo_js_multiLayers_layer'));

        //Setup CCS Property for All Layers
        for (var i = 0; i < tempLayers.length; i++) {
            tempLayers[i].style.zIndex = i;
            tempLayers[i].style.opacity = 1;
            tempLayers[i].style.marginLeft = (i * 25).toString() + 'px';
            tempLayers[i].style.marginTop = (i * 75).toString() + 'px';

            //Setup Header
            var tempChildNodes = tempLayers[i].childNodes;
            tempChildNodes[1].style.transitionDelay = "0.6s";

            //Setup Other Div Tags
            for (var j = 2; j < tempChildNodes.length; j++) {
                if (tempChildNodes[j].nodeName.toLowerCase() == 'div') {
                    tempChildNodes[j].style.opacity = 0;
                    tempChildNodes[j].style.height = 0;
                }
            }
        }

        //Display & Highlight the Last Layer
        var theLastLayer = tempLayers[tempLayers.length - 1];
        theLastLayer.style.background = "#E7F6FE";
        theLastLayer.style.color = "#53A0C7";
        // theLastLayer.style.border = "solid 1px #53A0C7";
        theLastLayer.style.height = "auto";

        var tempChildNodes = theLastLayer.childNodes;
        // Setup Header
        tempChildNodes[1].style.fontWeight = "400";
        tempChildNodes[1].style.fontSize = "22px";
        tempChildNodes[1].style.transitionDelay = "0.6s";

        for (var j = 2; j < tempChildNodes.length; j++) {
            if (tempChildNodes[j].nodeName.toLowerCase() == 'div') {
                tempChildNodes[j].style.opacity = 1;
                tempChildNodes[j].style.height = 'auto';
            }
        }

    }


    function createLayerMapping() {
        var currentLayerPositions = [];
        var currentLayerPositionMapping = {};
        var layerNumbers = getLayerNumbers();

        for (var i = 1; i < layerNumbers + 1; i++) {
            var topPosition = getLayerTopPosition(i);
            var cssZIndexOrderValue = window.getComputedStyle(document.getElementById('evo_js_multiLayers_layer_' + i)).getPropertyValue('z-index');
            var cssTopValue = window.getComputedStyle(document.getElementById('evo_js_multiLayers_layer_' + i)).getPropertyValue('top');
            var cssLeftValue = window.getComputedStyle(document.getElementById('evo_js_multiLayers_layer_' + i)).getPropertyValue('left');

            currentLayerPositionMapping = {
                'layerName': 'evo_js_multiLayers_layer_' + i,
                'topPosition': topPosition,
                'zIndex': cssZIndexOrderValue,
                'top': cssTopValue,
                'left': cssLeftValue
            };
            currentLayerPositions.push(currentLayerPositionMapping);
        }
        return currentLayerPositions;
    }

    function sortTempLayerBasedOnTopPositions(array) {
        array.sort(function (a, b) {
            if (a['topPosition'] > b['topPosition']) return 1;
            if (a['topPosition'] < b['topPosition']) return -1;
            return 0;
        });
    }


    function createClickEventListener() {
        var tempLayers = document.getElementsByClassName('evo_js_multiLayers_layer');
        for (var i = 0; i < tempLayers.length; i++) {
            tempLayers[i].addEventListener("click", function (e) {
                shuffleLayers(e);
                fadeVisitedLayer(e);
            }, false);
        }
    }


    function fadeVisitedLayer(e) {
        var tempLayerPositions = createLayerMapping();
        var layerNumbers = getLayerNumbers();
        sortTempLayerBasedOnTopPositions(tempLayerPositions);

        var clickedElement = (e.target.id).replace('_header', '');
        var clickedLayerPositionInArray = getClickedLayerPositionInArray();

        //set visible class on sideMenus
        // $('string/element/array/function/jQuery object/string, context')


        function getClickedLayerPositionInArray() {
            var clickedElementTopPosition;
            for (var i = 0; i < tempLayerPositions.length; i++) {
                if (tempLayerPositions[i].layerName == clickedElement) {
                    clickedElementTopPosition = tempLayerPositions[i].topPosition;
                    break;
                }
            }
            var clickedLayerPositionInArray = 0;
            for (var i = 0; i < tempLayerPositions.length; i++) {
                if (tempLayerPositions[i].topPosition < clickedElementTopPosition) {
                    clickedLayerPositionInArray++;
                }
            }
            return clickedLayerPositionInArray;
        }

        if (clickedLayerPositionInArray != layerNumbers - 1) {
            var reviewedLayer = document.getElementById(tempLayerPositions[layerNumbers - 1].layerName);
            var reviewedLayerTitle = document.getElementById(tempLayerPositions[layerNumbers - 1].layerName).childNodes[1];
            reviewedLayer.style.borderColor = "#e3e3e3";
        }
    }

    function shuffleLayers(e) {
        var tempLayerPositions = createLayerMapping();
        var clickedElement = (e.target.id).replace('_header', '');
        var clickedLayerPositionInArray = getClickedLayerPositionInArray();

        if (headerPositionIndicator == 1 && checkClickedElementIsLastLayer() == false) {
            scrollBackToContainerTop();
            setTimeout(function () {
                shuffleLayersWithDelay();
            }, 900);
        } else {
            shuffleLayersWithDelay();
        }

        function shuffleLayersWithDelay() {
            if (checkClickedElementIsLastLayer() == false) {
                sortTempLayerBasedOnTopPositions(tempLayerPositions);
                updateLastLayerTopPosition();
                updateSelectedLayerTopPosition();
                sortTempLayerBasedOnTopPositions(tempLayerPositions);

                if (clickedLayerPositionInArray == 0) {
                    setTimeout(function () {
                        hideUnselectedLayer();
                    }, 100);
                    setTimeout(function () {
                        resetUnselectedLayersZIndex();
                        pushClickedLayer();
                        highLightClickedLayer();
                    }, 300);
                    setTimeout(function () {
                        resetUnselectedLayersPosition();
                    }, 500);
                }
            }
        }

        //get Check the topPosition
        function checkClickedElementIsLastLayer() {
            var clickedElementTopPosition;
            for (var i = 0; i < tempLayerPositions.length; i++) {
                if (tempLayerPositions[i].layerName == clickedElement) {
                    clickedElementTopPosition = tempLayerPositions[i].topPosition;
                    break;
                }
            }

            for (var i = 0; i < tempLayerPositions.length; i++) {
                if (tempLayerPositions[i].topPosition > clickedElementTopPosition) {
                    return false;
                }
            }
        }

        function getClickedLayerPositionInArray() {
            var clickedElementTopPosition;
            for (var i = 0; i < tempLayerPositions.length; i++) {
                if (tempLayerPositions[i].layerName == clickedElement) {
                    clickedElementTopPosition = tempLayerPositions[i].topPosition;
                    break;
                }
            }
            var clickedLayerPositionInArray = 0;
            for (var i = 0; i < tempLayerPositions.length; i++) {
                if (tempLayerPositions[i].topPosition < clickedElementTopPosition) {
                    clickedLayerPositionInArray++;
                }
            }
            return clickedLayerPositionInArray;
        }


        function updateSelectedLayerTopPosition() {

            // var clickedLayerPositionInArray = getClickedLayerPositionInArray();
            // //Change the topPosition Value for Selected Layer
            for (var i = 0; i < tempLayerPositions.length; i++) {
                if (tempLayerPositions[i].layerName == clickedElement) {
                    tempLayerPositions[i].topPosition = 999999;
                    break;
                }
            }
        }

        function updateLastLayerTopPosition() {
            tempLayerPositions[tempLayerPositions.length - 1].topPosition = 0;
        }

        //Sort the tempLayerPositions array based on updated topPosition
        function resetUnselectedLayersZIndex() {
            for (var i = 0; i >= 0; i--) {
                var tempLayer = document.getElementById(tempLayerPositions[i].layerName);
                tempLayer.style.zIndex = i;
            }
        }

        function resetUnselectedLayersPosition() {
            (function fn(i) {
                var tempLayer = document.getElementById(tempLayerPositions[i].layerName);
                tempLayer.style.marginLeft = (i * 25).toString() + 'px';
                tempLayer.style.marginTop = (i * 75).toString() + 'px';
                // tempLayer.style.height = '480px';
                tempLayer.style.height = '1000px';
                tempLayer.style.opacity = "1";
                if (i > 0)setTimeout(function () {
                    fn(--i);
                }, 150);
            }(0));
        }

        function hideUnselectedLayer() {
            var tempLayer = document.getElementById(tempLayerPositions[0].layerName);
            tempLayer.style.zIndex = 8;
            tempLayer.style.marginLeft = (2 * 25).toString() + 'px';
            tempLayer.style.marginTop = (2 * 45).toString() + 'px';
            tempLayer.style.background = "#FDFFFC";
            tempLayer.style.color = "#808080";
            tempLayer.style.borderBottom = "0";
            tempLayer.style.borderRight = "0";
            // tempLayer.style.height = "480px";
            tempLayer.style.height = "1000px";
            tempLayer.style.opacity = "0";

            var tempChildNodes = tempLayer.childNodes;
            // Reset Header
            tempChildNodes[1].style.fontWeight = "300";
            tempChildNodes[1].style.fontSize = "16px";
            tempChildNodes[1].style.color = "#c8c5c5";

            for (var j = 2; j < tempChildNodes.length; j++) {
                if (tempChildNodes[j].nodeName.toLowerCase() == 'div') {
                    tempChildNodes[j].style.opacity = 0;
                    tempChildNodes[j].style.color = "#c8c5c5";
                }
            }
        }

        function pushClickedLayer() {
            var tempLayer = document.getElementById(tempLayerPositions[1].layerName);
            tempLayer.style.zIndex = 1;
            tempLayer.style.marginLeft = (1 *25).toString() + 'px';
            tempLayer.style.marginTop = (1 * 75).toString() + 'px';
        }


        //Highlight the clicked layer
        function highLightClickedLayer() {
            var clickedLayer = document.getElementById(tempLayerPositions[tempLayerPositions.length - 1].layerName);
            clickedLayer.style.background = " #E7F6FE";
            clickedLayer.style.color = "#53A0C7";
            clickedLayer.style.borderColor = "#53A0C7";
            // clickedLayer.style.border = "solid 1px #53A0C7";
            clickedLayer.style.height = "auto";

            var tempChildNodes = clickedLayer.childNodes;
            // Setup Header
            tempChildNodes[1].style.fontWeight = "400";
            tempChildNodes[1].style.fontSize = "22px";
            tempChildNodes[1].style.color = "#53A0C7";

            for (var j = 2; j < tempChildNodes.length; j++) {
                if (tempChildNodes[j].nodeName.toLowerCase() == 'div') {
                    tempChildNodes[j].style.opacity = 1;
                    tempChildNodes[j].style.height = 'auto';
                    tempChildNodes[j].style.color = '#53A0C7';
                }
            }
        }

    }


    function createScrollEventListener() {
        // window.addEventListener('scroll', function () {
        //     var currentScrollTopPosition = getCurrentScrollPosition();
        //     var containerTopPosition = getContainerTopPosition();
        //     var layerNumbers = getLayerNumbers();

        //     if (currentScrollTopPosition > containerTopPosition + layerNumbers * 38) {
        //         setHeaderPositionToVertical();
        //         adjustVerticalHeaderTop();
        //     } else {
        //         setHeaderPositionToHorizontal();
        //     }
        // }, false);
    }

    var headerPositionIndicator = 0;

    function setHeaderPositionToVertical() {
        var tempLayerPositions = createLayerMapping();
        sortTempLayerBasedOnTopPositions(tempLayerPositions);

        for (var i = 0; i < tempLayerPositions.length - 1; i++) {
            var tempLayer = document.getElementById(tempLayerPositions[i].layerName);

            var tempChildNodes = tempLayer.childNodes;
            tempChildNodes[1].style.transform = "rotate(90deg)";
            tempChildNodes[1].style.top = "400px";
            tempChildNodes[1].style.marginLeft = "-50%";
            tempChildNodes[1].style.whiteSpace = "nowrap";
        }
        headerPositionIndicator = 1;
    }

    function adjustVerticalHeaderTop() {
        var tempLayerPositions = createLayerMapping();
        sortTempLayerBasedOnTopPositions(tempLayerPositions);

        var currentScrollTopPosition = getCurrentScrollPosition();
        var containerTopPosition = getContainerTopPosition();
        var lastLayerHeight = getLastLayerHeight();
        var lastLayerTitleWidth = getLastLayerTitleWidth();
        var adjustedVerticalHeaderTop = (350 + currentScrollTopPosition - containerTopPosition);
        var adjustedLayerHeight = (200 + currentScrollTopPosition - containerTopPosition);

        if (lastLayerHeight > adjustedVerticalHeaderTop + 100) {
            for (var i = 0; i < tempLayerPositions.length - 1; i++) {
                var tempLayer = document.getElementById(tempLayerPositions[i].layerName);
                tempLayer.style.height = (adjustedLayerHeight).toString() + 'px';
                var tempChildNodes = tempLayer.childNodes;
                tempChildNodes[1].style.top = (adjustedVerticalHeaderTop).toString() + 'px';
            }
        } else {
            for (var i = 0; i < tempLayerPositions.length - 1; i++) {
                var tempLayer = document.getElementById(tempLayerPositions[i].layerName);
                tempLayer.style.height = (lastLayerHeight - 250).toString() + 'px';
                var tempChildNodes = tempLayer.childNodes;
                tempChildNodes[1].style.top = (lastLayerHeight - 110).toString() + 'px';
            }
        }
    }

    function setHeaderPositionToHorizontal() {
        if (headerPositionIndicator == 1) {
            var tempLayers = document.getElementsByClassName('evo_js_multiLayers_layer');

            for (var i = 0; i < tempLayers.length; i++) {

                var tempChildNodes = tempLayers[i].childNodes;
                tempChildNodes[1].style.transform = "rotate(0deg)";
                tempChildNodes[1].style.top = "0";
                tempChildNodes[1].style.marginLeft = "0";
                tempChildNodes[1].style.whiteSpace = "normal";
            }
            headerPositionIndicator = 2;
        }
    }

    function getCurrentScrollPosition() {
        return document.body.scrollTop;
    }

    function scrollBackToContainerTop() {
        TweenLite.to(window, 0.8, {scrollTo: 0, autoKill: false, ease: Power2.easeOut});
    }

    function getLayerTopPosition(layerId) {
        var layerName = 'evo_js_multiLayers_layer_' + layerId;
        var layer = document.getElementById(layerName);
        return layer.offsetTop;
    }

    function getLastLayerHeight() {
        var layerNumbers = getLayerNumbers();
        var tempLayerPositions = createLayerMapping();
        sortTempLayerBasedOnTopPositions(tempLayerPositions);
        return parseInt(window.getComputedStyle(document.getElementById(tempLayerPositions[layerNumbers - 1].layerName)).getPropertyValue('height').replace('px', ''));
    }

    function getFirstLayerHeight() {
        var tempLayerPositions = createLayerMapping();
        sortTempLayerBasedOnTopPositions(tempLayerPositions);
        return parseInt(window.getComputedStyle(document.getElementById(tempLayerPositions[0].layerName)).getPropertyValue('height').replace('px', ''));
     }

    function getLastLayerTitleWidth() {
        var layerNumbers = getLayerNumbers();
        var tempLayerPositions = createLayerMapping();
        sortTempLayerBasedOnTopPositions(tempLayerPositions);
        return parseInt(window.getComputedStyle(document.getElementById(tempLayerPositions[layerNumbers - 1].layerName).childNodes[1]).getPropertyValue('width').replace('px', ''));
    }


    function getContainerTopPosition() {
        return document.getElementById('evo_js_multiLayers_container').offsetTop;
    }

    function getLayerNumbers() {
        return document.getElementsByClassName('evo_js_multiLayers_layer').length;
    }
});




