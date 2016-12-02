// Create canvas

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var canvasPos = document.getElementById("game-container");
canvas.width = 600;
canvas.height = 320;
canvasPos.appendChild(canvas);


// Ship object

var shipObject = {
	x: 10,
	y: 160,
	width: 0,
	height:0 ,
	src: ""
};

// Player Controls

var keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);

// Draw Background and Ship

function render (){


	// Background image
	var bgImg = new Image();
	bgImg.onload = function () {
	ctx.drawImage(bgImg,0,0,600,320);
	}
	bgImg.src = "img/space.jpg";

	// Ship image
	var shipImg = new Image();
	shipImg.onload = function(){
	ctx.drawImage(shipImg, shipObject.x, shipObject.y, shipObject.width, shipObject.height)
	}
	shipImg.src = shipObject.src;

}

// Spawn a Constellation
function connie(){
	shipObject.x = 10;
	shipObject.y = 148;
	shipObject.width = 100;
	shipObject.height = 25;
	shipObject.src = "img/connie.png";
}

// Spawn a hornet
function hornet() {
	shipObject.x = 10;
	shipObject.y = 139;
	shipObject.width = 75;
	shipObject.height = 42;
	shipObject.src = "img/hornet.png";
}

// Sets new position on shipObject
 function move (){
	if (38 in keysDown) { // Player holding up
        shipObject.y += -2;
    }

    else if (40 in keysDown) { // Player holding down
        shipObject.y += 2;
        
    }

    else if (37 in keysDown) { // Player holding left
        shipObject.x += -2;
       
    }

    else if (39 in keysDown) { // Player holding right
         	shipObject.x += 2;
         
    }

}

// The main game loop
var main = function () {
	
	move();
	render();

	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

//Call the game loop
main();