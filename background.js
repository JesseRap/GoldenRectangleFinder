// document.body.style.backgroundColor="red"; 

// GET AN ARRAY OF ALL THE DIVS AND IMG ELEMENTS
arr1 = [].slice.call(document.getElementsByTagName("div")); 
arr2 = [].slice.call(document.getElementsByTagName("img")); 
arr = arr1.concat(arr2); 


function addSpiral(image, bgImage) {
    // OVERLAY A FIBONACCI SPIRAL OVER THE GOLDEN RECTANGLE
    // console.log("ADD SPIRAL");
    image.style.visibility = "visible";
    bgImage.style.opacity = 0.6;
    image.width = bgImage.offsetWidth;
    // image.height = image.width / 1.618;
    image.height = bgImage.offsetHeight;
    image.style["z-index"] = bgImage.style["z-index"] - 1;
//    bgImage.style["z-index"] = 1;
}

function removeSpiral(image, bgImage) {
    // REMOVE THE FIBONACCI SPIRAL
    // console.log("REMOVE SPIRAL");
    image.style.visibility = "hidden";
    bgImage.style.opacity = 1.0
}

arr.forEach(function(x) {
    // console.log(x.tagName); 
    // console.log(x); console.log(x.offsetWidth,x.offsetHeight,Math.round(10 * x.offsetWidth /  x.offsetHeight) / 10);
    if (Math.round(10 * x.offsetWidth /  x.offsetHeight) / 10 === Math.round(10 * 1.62)/10) {
        // CHECK THE ELEMENT LIST FOR GOLDEN RECTANGLE DIMENSIONS
        
        var shadow = Math.round(x.offsetWidth/50);
        console.log("SHADOW ", shadow);
        // console.log("GOLDEN RATIO!!!");
        
        // ADD BOX SHADOW TO GOLDEN RECTANGLES
        x.style["box-shadow"] = "0px 0px "+Math.round(shadow/2)+"px "+Math.round(shadow/4)+"px rgba(255,215,0,0.75)";
        //x.className += x.className ? ' goldenSmall' : 'goldenSmall';
        
        // CREATE A FIBONACCI SPIRAL IMG
        var image = document.createElement("img");
        image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Fibonacci_spiral.svg/1280px-Fibonacci_spiral.svg.png";
        //image.className = "golden";
        image.style["box-shadow"] = "0px 0px "+Math.round(shadow*2)+"px "+Math.round(shadow)+"px rgba(255,215,0,0.85)";
        
//        image.width = x.width;
//        image.height = x.height;
        
        // CREATE A CONTAINER TO CONTAIN THE ORIGINAL IMG AND THE FIB SPIRAL
        var container = document.createElement("div");
        x.parentNode.replaceChild(container, x);
        container.appendChild(x);
        // container.style = x.style;
        container.style["position"] = "relative";
//        container.style["background"] = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Fibonacci_spiral.svg/1280px-Fibonacci_spiral.svg.png")';
//        container.style["background-size"] = "contain";
        
        image.style = x.style;
        image.style["position"] = "absolute";
        // var margin = x.marginLeft || 0
        // image.style["left"] = margin.toString() + "px";
        // image.style["box-sizing"] = "border-box";
        // image.style["left"] = getComputedStyle(x).getPropertyValue("margin-left");
        image.style["left"] = parseInt(x.offsetLeft,10) + "px";
        image.style["top"] = parseInt(x.offsetTop,10) + "px";
//        image.style["margin-left"] = x.style["margin-left"];
//        image.style["padding-left"] = x.style["padding-left"];
        // image.style["top"] = "0px";
        image.style.visibility = "hidden";
        container.appendChild(image);
        
        // TOGGLE THE VISIBILITY OF THE FIB SPIRAL ON MOUSEENTER ELEMENT
        container.onmouseleave = function() {removeSpiral(image, x)};
        container.onmouseenter = function() {addSpiral(image, x)};
        
    }
});
