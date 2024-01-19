function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let img;

function preload(){
	img = loadImage('https://i.imgur.com/KWXa8Hj.png');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	background(250);
	
	imageMode(CENTER);
	textAlign(CENTER, CENTER);
	
	img.resize(width/5, 0);
	
	
}

function draw() {
	background(250);
	
	image(img, width/2, height/2);
	
}