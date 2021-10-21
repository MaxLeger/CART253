/***********************************************
Template p5 project #2
MGL

This is a description of this template project.
************************************************/

 // Monkey image
let cyberMonkeyImage;

function preload() {
  cyborgMonkeyImage = loadImage("assets/images/CyborgMonkey.png")

}

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



function setup() {

  createCanvas(500, 500);

}

function setupCircles() {
  // circle1.x = width / 13.5;
  // circle2.x = 12 * width / 13.5
  // circle3.x = width / 13.5;
  // circle4.x = 12 * width / 13.5

  // Start moving the circles
  circle1.vx = random(-circle1.speed, circle1.speed);
  circle2.vx = random(-circle2.speed, circle2.speed);
  circle3.vx = random(-circle3.speed, circle3.speed);
  circle4.vx = random(-circle4.speed, circle4.speed);
  circle1.vy = random(-circle1.speed, circle1.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);
  circle3.vy = random(-circle3.speed, circle3.speed);
  circle4.vy = random(-circle4.speed, circle4.speed);

}

function draw() {
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
    image(cyborgMonkeyImage, mouseX, mouseY,0,0);

}
