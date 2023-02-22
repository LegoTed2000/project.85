//Create a reference for canvas 
var Canvas = document.getElementById("myCanvas");
var ctx = Canvas.getContext("2d");


//Give specific height and width to the car image
var green_car_width = 75;
var green_car_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
var green_car_x = 5;
var green_car_y = 225;

function add() {
	//upload car, and background images on the canvas.
	background_imageTag = new Image();
	background_imageTag.onload = uploadBackground;
	background_imageTag.src = background_image;

	green_car_imageTag = new Image();
	green_car_imageTag.onload = uploadgreencar;
	green_car_imageTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imageTag, 0, 0, Canvas.width, Canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(green_car_imageTag, green_car_x, green_car_y, green_car_width, green_car_height);

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	//Define function to move the car upward
	if(green_car_y>=0){
		green_car_y = green_car_y -10
		console.log("When up arrow is pressed, = "+ green_car_x + " y = " + green_car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down() {
	//Define function to move the car downward
	if(green_car_y<=500){
		green_car_y = green_car_y +10
		console.log("When down arrow is pressed, = "+ green_car_x + " y = "+ green_car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left() {
	//Define function to move the car left side
	if(green_car_x>=0){
		green_car_x = green_car_x -10
		console.log("When left arrow is pressed, = "+ green_car_x + " y = "+ green_car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right() {
	//Define function to move the car right side
	if(green_car_x<=700){
		green_car_x = green_car_x +10
		console.log("When right aroow is pressed, ="+ green_car_x + " y = "+ green_car_y);
		uploadBackground();
		uploadgreencar();
	}
}
