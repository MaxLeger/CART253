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

let shape1 = {
  // Position
  x: undefined,
  y: undefined,
  // Dimensions
  size: 200,
  // Whether or not it's currently being dragged
  isBeingDragged: false,
  // The offset relative to the mouse when being dragged
  offsetX: 0,
  offsetY: 0,
  // How much to change size when clicked/unclicked for feedback
  feedbackSizeChangeAmount: 5,
  // Whether or not the shape is active (if false it won't "exist")
  active: true
};

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

  shape1.x = width / 4;
  shape1.y = height / 2;


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
      handleDragging();
      drawShape();
    }
    // Draws the centreline
    drawBoundary();
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
    if (shape1.active && mouseIsInsideShape()) {
      // Start dragging
      shape1.isBeingDragged = true;
      // Remember the offset of the shape's centre relative to the mouse
      shape1.offsetX = shape1.x - mouseX;
      shape1.offsetY = shape1.y - mouseY;
      // Make the shape a bit smaller for feedback
      shape1.size -= shape1.feedbackSizeChangeAmount;
    }
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
    state = 'test';
  }
}

function handleDragging() {
  // Only handle dragging behaviour if the shape is actually being dragged
  if (shape1.isBeingDragged) {
    // Set the shape's position to the mouse position, taking
    // account of the offset when they grabbed the shape
    shape1.x = mouseX + shape1.offsetX;
    shape1.y = mouseY + shape1.offsetY;

    // Make sure the shape stays on the canvas (can't drag it off)
    shape1.x = constrain(shape1.x, 0, width);
    shape1.y = constrain(shape1.y, 0, height);
  }
}

function drawShape() {
  push();
  // Red!
  fill(255, 0, 0);
  noStroke();
  // Draw that shape!
  ellipse(shape1.x, shape1.y, shape1.size);
  pop();
}

function mouseIsInsideShape() {
  // Get the distance between the mouse and the shape
  let d = dist(mouseX, mouseY, shape1.x, shape1.y);
  // If it's smaller than the radius of the shape (circle)
  // then the mouse is inside the shape! Otherwise not!
  if (d < shape1.size / 2) {
    return true;
  } else {
    return false;
  }
}

function drawBoundary() {
  push();
  stroke(255);
  line(width / 2, 0, width / 2, height);
  pop();
}

function mouseReleased() {
  // If the shape is currently being dragged
  // and they've "dropped it" on the right side of the line
  if (shape1.isBeingDragged && shape1.x > width / 2) {
    // Then deactive the shape (it vanishes)
    shape1.active = false;
  }
  else {
    // Reset dragging
    shape1.isBeingDragged = false;
    // Reset the size
    shape1.size += shape1.feedbackSizeChangeAmount;
    // Reset the offset
    shape1.offsetX = 0;
    shape1.offsetY = 0;
  }
}

function lab() {

}
