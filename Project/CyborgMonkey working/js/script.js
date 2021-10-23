/***********************************************
Template p5 project #2
MGL
This is a description of this template project.
************************************************/

// Monkey image
let cyberMonkeyImage;
let titleCardImage;
let sleepImage;

let circle1 = {
  x: 51,
  y: 51,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 4.5,
  collected: false

};

let circle2 = {
  x: 51,
  y: 449,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 4.5,
  collected: false

};

let circle3 = {
  x: 449,
  y: 51,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 4.5,
  collected: false

};

let circle4 = {
  x: 449,
  y: 449,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 4.5,
  collected: false

};

// let zapImage;
//
// function preload() {
//     zapImage = loadImage("assets/images/ZAP.png")

let state = `title`;

function preload() {
  titleCardImage = loadImage("assets/images/titlecard.png");
  cyborgMonkeyImage = loadImage("assets/images/CyborgMonkey.png");
  sleepImage = loadImage("assets/images/Sleep.png");

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
  // else if (state === 'sleep') {
  //   sleep();
  // }
  else if (state === 'gathered') {
    win();
  }

function win() {
  textSize(64);
  fill(126, 126, 126)
  textAlign(CENTER,CENTER);
  text('Win!', width/2, height/2)
}

function title() {
  // Display the image of the title card
  image(titleCardImage, 0, 0);
}

// function sleep() {
//   // Display sleep image
//   //image(sleepImage, 0, 0);
//   textSize(64);
//   fill(126, 126, 126)
//   textAlign(CENTER,CENTER);
//   text('loose!', width/2, height/2)

}

function simulation() {
  display();
  checkOverlap1();
  checkOverlap2();
  checkOverlap3();
  checkOverlap4();
  //checkOffscreen();
  gathered();
}


function display() {
  background(0);

  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;

  circle3.x = circle3.x + circle3.vx;
  circle3.y = circle3.y + circle3.vy;

  circle4.x = circle4.x + circle4.vx;
  circle4.y = circle4.y + circle4.vy;

  if (circle1.collected === false) {

    ellipse(circle1.x, circle1.y, circle1.size)

  }

  if (circle2.collected === false) {

    ellipse(circle2.x, circle2.y, circle2.size)

  }

  if (circle3.collected === false) {

    ellipse(circle3.x, circle3.y, circle3.size)

  }

  if (circle4.collected === false) {

    ellipse(circle4.x, circle4.y, circle4.size)

  }

  // The Ellispse is an Actor for collision
  ellipse(mouseX, mouseY, 81);

  imageMode(CENTER)
  image(cyborgMonkeyImage, mouseX, mouseY, 0, 0);
}

//Check if the circles are overlapping [CONCEPT]
function checkOverlap1() {
  let d = dist(circle1.x, circle1.y, mouseX, mouseY);
  if (circle1.collected === false && d < circle1.size / 2 + cyborgMonkeyImage.width / 2) {
     circle1.collected = true;
  }
}

function checkOverlap2() {
  let d = dist(circle2.x, circle2.y, mouseX, mouseY);
  if (circle2.collected === false && d < circle2.size / 2 + cyborgMonkeyImage.width / 2) {
     circle2.collected = true;
  }
}

function checkOverlap3() {
  let d = dist(circle3.x, circle3.y, mouseX, mouseY);
  if (circle3.collected === false && d < circle3.size / 2 + cyborgMonkeyImage.width / 2) {
     circle3.collected = true;
  }
}

function checkOverlap4() {
  let d = dist(circle4.x, circle4.y, mouseX, mouseY);
  if (circle4.collected === false && d < circle4.size / 2 + cyborgMonkeyImage.width / 2) {
     circle4.collected = true;
  }
}

function mousePressed() {
  if (state === "title") {
    state = 'simulation';
  }
}

// //Verifies if an energy bolt hasn't been catch by the monkey actor.
// function checkOffscreen() {
//   //Check if the circles have gone offscreen
//   if (circle1.x > 500 || circle1.y > 500) {
//     state = 'sleep'
//   }
// }

function gathered() {
  if (circle1.collected === true && circle2.collected === true && circle3.collected === true && circle4.collected === true) {
    state = 'gathered'
  }
}
