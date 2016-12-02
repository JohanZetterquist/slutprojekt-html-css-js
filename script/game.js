// Create canvas

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var canvasPos = document.getElementById("canvas-container");
canvas.width = 600;
canvas.height = 320;
canvasPos.appendChild(canvas);


// Ship object

var shipObject = {
	x: 0,
	y: 0,
	speedX: 0, 
	speedY: 0,
	speedXx: 0,
	speedYy: 0,
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

function move (){
	if (38 in keysDown) { // Player holding up
        shipObject.speedY = -2;
    }

    else if (40 in keysDown) { // Player holding down
        shipObject.speedY = 2;
        
    }

 	else if (37 in keysDown) { // Player holding left
        shipObject.speedX = -2;
       
    }

    else if (39 in keysDown) { // Player holding right
         	shipObject.speedX = 2;
         
    }

    else{
    	shipObject.speedX = 0;
    	shipObject.speedY = 0;
    }

}

// Alternative controlls

function moveup() {
    shipObject.speedYy = -2;
}

function movedown() {
    shipObject.speedYy = 2; 
}

function moveleft() {
    shipObject.speedXx = -2;
}

function moveright() {
    shipObject.speedXx = 2;
}

function stopMove(){
	shipObject.speedXx = 0;
	shipObject.speedYy = 0;
}

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
 function newPos(){
 	shipObject.x += shipObject.speedX + shipObject.speedXx;
 	shipObject.y += shipObject.speedY + shipObject.speedYy;
 }


// The main game loop
var main = function () {
	move();
	newPos();
	render();

	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

//Call the game loop
main();