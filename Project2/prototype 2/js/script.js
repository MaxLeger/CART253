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

let shape1 = undefined;
let shape2 = undefined;


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

  shape1 = new Element(width / 4, height / 2, color(255,0,0));
  shape2 = new Element(width / 4, height / 4, color(0,250,0));

  for (let i = 0; i < 72; i++) {
    let y = 5 + 4 * i;
    bubbles[i] = new Bubble(342, y, 27);
  }
}

function draw() {
  background(0);
  statemachine();
}
function statemachine() {
  if (state === `title`) {
    title();
  } else if (state === `transition`) {
    transition();
    sleep();
  } else if (state === 'wake') {
    lab();
  } else if (state === 'test') {
    if (shape1.active) {
      shape1.handleDragging();
      shape1.display();
    }

    if (shape2.active) {
      shape2.handleDragging();
      shape2.display();
    }
    // Draws the centreline
    drawBoundary();

    if (shape1.x > width / 2 && shape2.x > width / 2 && !shape1.isBeingDragged && !shape2.isBeingDragged) {
      shape1.active = false;
      shape2.active = false;
    }
  }
}

function title() {
  image(introImage, 0, 0);
}

function mousePressed() {
  if (state === "title") {
    state = 'transition';
  }
  if (state === "test") {
    shape1.mousePressed();
    shape2.mousePressed();
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

function sleep() {
  if (topEyeImage.y > -270) {
    state = 'test';
  }
}

function drawBoundary() {
  push();
  stroke(255);
  line(width / 2, 0, width / 2, height);
  pop();
}

function mouseReleased() {
  if (state === "test") {
    shape1.mouseReleased();
    shape2.mouseReleased();
  }
}

function lab() {

}
