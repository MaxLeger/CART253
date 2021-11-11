/***********************************************
Template p5 project #2
MGL

This is a description of this template project.
************************************************/

let bubbles = [];

let orangebubbleImage
let testtubeImage
let introImage

let topEyeImage = {
	x: -250,
  y: -1100,
  vy: 0,
	speed: 3,
	image: undefined
}

let botEyeImage = {
	x: -250,
  y: 900,
  vy: 0,
	speed: 3,
	image: undefined
}

let state = `title`;

function preload() {
	introImage = loadImage("assets/images/INTRO.png");
	orangebubbleImage = loadImage("assets/images/OrangeBubble.png");
	testtubeImage = loadImage("assets/images/testTube.png");
	topEyeImage.image = loadImage("assets/images/topeye.png");
	botEyeImage.image = loadImage("assets/images/bottomeye.png");
}

function setup() {
	createCanvas(700, 700);

	topEyeImage.vy = 3;
	botEyeImage.vy = -3;


	for (let i = 0; i < 72; i++) {
		let y = 5 + 4 * i;
		bubbles[i] = new Bubble(342, y, 27);
	}
}

function draw() {
  if (state === `title`) {
    title();
  } else if (state === `transition`) {
    transition();
		sleep();
	}
	else if (state === 'wake') {
    lab();
  }
}

function title() {
	image(introImage, 0, 0);
}

function mousePressed() {
    if (state === "title") {
      state = 'transition';
    }
	}

function transition() {
	background(0);
	image(testtubeImage, 315, 270)


	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].move();
		bubbles[i].show();
	}

	topEyeImage.y = topEyeImage.y + topEyeImage.vy

	botEyeImage.y = botEyeImage.y + botEyeImage.vy

	// console.log(topEyeImage.y)
	// console.log(botEyeImage.y)

	image(topEyeImage.image, topEyeImage.x, topEyeImage.y)

	image(botEyeImage.image, botEyeImage.x, botEyeImage.y)

}

class Bubble {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
	}

	move() {
		this.x = this.x + random(-9, 9);
		this.y = this.y + random(-9, 9);
	}

	show() {
		image(orangebubbleImage, this.x, this.y, this.r * 2);
	}
}

function sleep() {
	if (topEyeImage.y > -270) {
		state = 'wake';
	}
}

function lab() {
	
}
