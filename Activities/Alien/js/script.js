/***********************************************
Drwing an Alien
MGL

Draws an alien on the createCanvas
************************************************/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Draws an Alien
*/
function setup() {

  createCanvas(640, 480);

  background (216, 216, 216);
  noStroke();

// Draw the body
  fill(127);
  ellipse(320, 480, 300, 200);

// Draw the head
fill(100);
ellipse(320, 240, 250, 400);

// Draw the eyes + light
fill(0);
ellipse(250, 261, 70, 110);
ellipse(390, 261, 70, 110);

fill(225);
ellipse(230, 240, 7, 11);
ellipse(370, 240, 7, 11);

// Draw the nostrils
fill(0);
ellipse(300, 310, 11, 7);
ellipse(340, 310, 11, 7);

// Draw the mouth
stroke(200, 0, 0);
strokeWeight(7);
rectMode(CENTER);
rect(320, 365, 110, 15)

  }



/**
Description of draw()
*/
function draw() {

}
