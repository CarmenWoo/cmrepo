function prepareGallery() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i=0; i<links.length; i++) {

         links[i].onclick = function(){
         	showPicture(this);
         	return false;
         	
         }
	}
}		



function showPicture(whichpic){
	if (!document.getElementById("placeholder")) return false;
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src",source);
	if (document.getElementById("description")) {
		var text=whichpic.getAttribute("tittle")? whichpic.getAttribute("tittle"):"";
	    var description=document.getElementById("description");
	    if (description.firstChild.nodeType ==3) {
		description.firstChild.nodeValue=text;
	   }
     }
	return true;
	}

window.onload = prepareGallery;

/*	
function addLoadEvent(func){
	var oldload=window.onload;
	if (typeof window.onload !='function') {
		window.onload=func;
	} else {
		window.onload=function(){
			oldload();
			func();
		}
	}
}

addLoadEvent(showPicture);*/