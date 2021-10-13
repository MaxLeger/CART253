/***********************************************
Template p5 project #2
MGL

This is a description of this template project.
************************************************/

let backgroundShade = 0;
let circleX = 250;
let circleY = 200;
let circleSize = 200
let circleSpeed = 1;
let circleFill = 0
/**
Description of setup
*/
function setup() {

  createCanvas(500, 500);


  }

/**
Description of draw()
*/
function draw() {

  backgroundShade = backgroundShade + 1;
  background(backgroundShade);
  circleX +=  circleSpeed;

circleSpeed = random(-4, 4);
circleFill = random(0, 255);
circleSize = random(0, 255);
fill(circleFill);
  ellipse(circleX, circleY, circleSize);

  console.log(`circleX: ${circleX}, circleY: ${circleY}, circleSize: ${circleSize}`);


}
