/***********************************************
Template p5 project
MGL

This is a description of this template project.
************************************************/

let backgroundShade = 0;
let circleX = 250;
let circleY = 200;
let circleSize = 200
let circleSpeed = 0.5;
let circleAcceleration = 0.05;

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
  circleSpeed += circleAcceleration;

  ellipse(circleX, circleY, circleSize);

}
