let libs = ["includes/libs/p5.glitch.js"]

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// p5.glitch-image
// cc teddavis.org 2020

let glitch;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(250);
	imageMode(CENTER);

	frameRate(10);

	glitch = new Glitch();
	loadImage('https://raw.githubusercontent.com/SHAUHAUS/aigamsu.org/main/data/inverse_grad.png', function(im){
		glitch.loadImage(im);
	});
}

function draw() {
	let m = map(mouseX, 0, width, 1, 15);

	glitch.resetBytes();

	glitch.replaceBytes(m, -m); // swap all decimal byte 100 for 104
	glitch.randomBytes(1); // add one random byte for movement

	glitch.buildImage();
    // glitch.image.resize(0, mouseX);
	image(glitch.image, width/2, height/2, width, height);
}