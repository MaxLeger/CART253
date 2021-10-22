/***********************************************
Template p5 project #2
MGL
This is a description of this template project.
************************************************/

// Monkey image
let cyberMonkeyImage;
let titleCardImage;


let circle1 = {
  x: 51,
  y: 51,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 3

};

let circle2 = {
  x: 51,
  y: 449,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 3

};

let circle3 = {
  x: 449,
  y: 51,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 3

};

let circle4 = {
  x: 449,
  y: 449,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 3

};

// let zapImage;
//
// function preload() {
//     zapImage = loadImage("assets/images/ZAP.png")

let state = `simulation`;

function preload() {
  titleCardImage = loadImage("assets/images/titlecard.png");
  cyborgMonkeyImage = loadImage("assets/images/CyborgMonkey.png");
  // Load other stuff
}

function setup() {
  createCanvas(500, 500);

  circle1.x = width / 13.5;
  circle2.x = width / 13.5
  circle3.x = 12 * width / 13.5
  circle4.x = 12 * width / 13.5

  // Start moving the circles
  circle1.vx = random(0, 4);
  circle2.vx = random(0, 4);
  circle3.vx = random(-4, 0);
  circle4.vx = random(-4, 0);
  circle1.vy = random(0, 4);
  circle2.vy = random(-4, 0);
  circle3.vy = random(0, 4);
  circle4.vy = random(-4.0);

}

function draw() {
  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
}

function title() {
  // Display the image of the title card
  image(titleCardImage, 0, 0);
}

function simulation() {
  background(0);

  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;

  circle3.x = circle3.x + circle3.vx;
  circle3.y = circle3.y + circle3.vy;

  circle4.x = circle4.x + circle4.vx;
  circle4.y = circle4.y + circle4.vy;

  ellipse(circle1.x, circle1.y, circle1.size)
  ellipse(circle2.x, circle2.y, circle2.size)
  ellipse(circle3.x, circle3.y, circle3.size)
  ellipse(circle4.x, circle4.y, circle4.size)

  // The Ellispse is an Actor for collision
  ellipse(mouseX, mouseY, 81);

  imageMode(CENTER)
  image(cyborgMonkeyImage, mouseX, mouseY, 0, 0);
}
