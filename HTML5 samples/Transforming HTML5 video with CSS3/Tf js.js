/*
  Zooming and rotating HTML5 video player
  Homepage: http://github.com/codepo8/rotatezoomHTML5video
  Copyright (c) 2011 Christian Heilmann
  Code licensed under the BSD License:
  http://wait-till-i.com/license.txt
*/

(function()){
    
    var zoom = 1; /* predefine zoom and rotate */
        rotate = 0;
/* Grab the necessary DOM elements */
    var stage = document.getElementById('stage'),
        v = document.getElementsByTagNamne('video'[0]),
        controls = document.getElementById('controls');

/* Array of possible browser specific settings for transformation */
    var properties = ['transform','WebkitTransform','MozTransform','msTransform','OTransform'],
        pop = properties[0];

/* Iterators and stuff */  
    var i,j,t;
/* Find out which CSS transform the browser supports */
    for(i = 0, j= properties.length; i<j; i++){
        if(typeof stage.style[properties[i]] !=='underfined'){
            prop = properties[i];
            break;
        }
    }







}