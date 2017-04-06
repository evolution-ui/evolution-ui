export default function() {
	/******** Shuffle Gallery Component ********/

	var links = document.getElementsByClassName("evo_c-shuffle-gallery__link"),
		linksLen = links && links.length || 0;

	// Adds mouse event listener to all links
	for (var i = 0; i < linksLen; i++) {
		links[i].addEventListener("mouseover", showImg);
		links[i].addEventListener("mouseout", hideImg);
	}

	// Function to set the opacity, transform and vendor prefixes values
	function setProperties(ele, opacity, value){
		ele.style.opacity = opacity;
		ele.style["-webkit-transform"] = value;
		ele.style["-moz-transform"] = value;
		ele.style["-o-transform"] = value;
		ele.style["transform"] = value;
	}

	// Function to show an image on mouseover
	function showImg(e){
		var targetId = e.target.id;
		for (var j = 0; j < linksLen; j++) {
			var id = links[j].getAttribute("id");
			if((id !== targetId && id === "link_1") || (id !== targetId && id === "link_5") || (id !== targetId && id === "link_10") || (id !== targetId && id === "link_2") || (id !== targetId && id === "link_6") || (id !== targetId && id === "link_11")){
				setProperties(links[j], "0", "translate3d(70%, 0px, 0px)");
			} else if((id !== targetId && id === "link_8") || (id !== targetId && id === "link_13") || (id !== targetId && id === "link_9") || (id !== targetId && id === "link_14") || (id !== targetId && id === "link_4") || (id !== targetId && id === "link_3") || (id !== targetId && id === "link_7") || (id !== targetId && id === "link_12")){
				setProperties(links[j], "0", "translate3d(-100%, 0px, 0px)");
			} else if((id !== targetId && id === "link_15")){
				setProperties(links[j], "0", "translate3d(-50%, 0px, 0px)");
			} else if(id === targetId){
				links[j].style.background = "rgba(255,255,255,0.4)";
			}
		}

		targetId = targetId.split("_")[1];
		var img = document.getElementById(targetId);
		img.style.opacity = "1";
	}

	// Function to hide an image on mouseout
	function hideImg(e){
		var targetId = e.target.id;
<<<<<<< 8ee8e952d79d1e66a392b431d90d93aa3e00b130

=======
>>>>>>> Updating modified script files
		for (var j = 0; j < linksLen; j++) {
			var id = links[j].getAttribute("id");
			if(id !== targetId){
				setProperties(links[j], "1", "translate3d(0, 0, 0)");
			} else if(id === targetId){
				links[j].style.background = "none";
			} 
		}

		targetId = targetId.split("_")[1];
		var img = document.getElementById(targetId);
		img.style.opacity = "0";
	}

}