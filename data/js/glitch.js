function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let img, img2;

function preload(){
	img = loadImage('https://i.imgur.com/2SHxVzt.png');
	img2 = loadImage('https://i.imgur.com/O0AMB01.png');
	// img3 = loadImage('data/LOGO_HORIZONTAL.svg');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	background(250);

	noCursor();
	noFill();
	stroke(0);
	
	imageMode(CENTER);
	rectMode(CENTER);
	textAlign(CENTER, CENTER);
	
	img.resize(width, height);
	img2.resize(width, height);
	// img3.resize(width/2, 0);

	image(img, width/2, height/2);
	image(img2, width/2, height/2);
	// image(img3, width/2, height/2);

	// copy(img2, mouseX, mouseY, 50, 50, mouseX, mouseY, 50, 50);
	
	
}

function draw() {
	// background(250);
	
	// image(img2, width/2, height/2);
	// image(img, width/2, height/2);
	// image(img3, width/2, height/2);

	// rect(mouseX, mouseY, 50, 50);

	// copy(img2, mouseX, mouseY, 25, 25, mouseX, mouseY, 25, 25);

	
}

function mouseDragged() {
	copy(img, mouseX, mouseY, 25, 25, mouseX, mouseY, 25, 25);
}

