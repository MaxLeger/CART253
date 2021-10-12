/***********************************************
Template p5 project
MGL

This is a description of this template project.
************************************************/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {

  createCanvas(500, 500, WEBGL);

  background (216, 216, 216);

  circle(250, 250, 40);

  triangle(166, 166, 333, 166, 250, 250);

  }



/**
Description of draw()
*/
function draw() {
  background(216, 216, 216);
  rotateX(frameCount * 0.002);
  rotateY(frameCount * 0.1);
  torus(30, 15);

}
