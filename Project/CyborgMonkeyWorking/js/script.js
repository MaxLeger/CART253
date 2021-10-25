/***********************************************
Project 1: CYBORG MONKEY
MGL

This monkey is running out of battery.
Quick!
Help him charge up by collecting energy bolts.
************************************************/

// Monkey image
let cyberMonkeyImage;
let titleCardImage;
let sleepImage;
let winImage;
let zapImage;
let winSFX;
let chargeSFX;
let shockMonkey;

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

let state = `title`;

function preload() {
  titleCardImage = loadImage("assets/images/titlecard.png");
  cyborgMonkeyImage = loadImage("assets/images/CyborgMonkey.png");
  sleepImage = loadImage("assets/images/Sleep.png");
  winImage = loadImage("assets/images/WorkingMonkey.png");
  zapImage = loadImage("assets/images/ZAP.png");

// ** The sound functions are playing irregularly **

  // winSFX = loadSound("assets/sounds/win.wav");
  // chargeSFX = loadSound("assets/sounds/Charge.m4a");
  // shockMonkey = loadSound("assets/sounds/ShockTheMonkey.mp3");

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

  // ** This state is currently not running **
  // else if (state === 'sleep') {
  //   sleep();
  // }

  else if (state === 'gathered') {
    win();
  }

function win() {
  image(winImage, 250, 250);
  // ** canceled sound **
  // winSFX.play();
}

function title() {
  // Display the image of the title card
  image(titleCardImage, 0, 0);

}

//This fuction is currently not running
// function sleep() {
//   // Display sleep image
//   //image(sleepImage, 250, 250);

}

function simulation() {
  display();
  checkOverlap1();
  checkOverlap2();
  checkOverlap3();
  checkOverlap4();

  //** canceled sound **
  // chargeSound1();
  // chargeSound2();
  // chargeSound3();
  // chargeSound4();

  //** canceled function **
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

    image(zapImage, circle1.x, circle1.y, circle1.size)

  }

  if (circle2.collected === false) {

    image(zapImage, circle2.x, circle2.y, circle2.size)

  }

  if (circle3.collected === false) {

    image(zapImage, circle3.x, circle3.y, circle3.size)

  }

  if (circle4.collected === false) {

    image(zapImage, circle4.x, circle4.y, circle4.size)

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

//This fuction is currently not running
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

// // ** Sound effects functions canceled **
// function chargeSound1() {
//   if (circle1.collected === true) {
//     chargeSFX.play()
//   }
// }
// function chargeSound2() {
//   if (circle2.collected === true) {
//     chargeSFX.play()
//   }
// }
// function chargeSound3() {
//   if (circle3.collected === true) {
//     chargeSFX.play()
//   }
// }
// function chargeSound4() {
//   if (circle4.collected === true) {
//     chargeSFX.play()
//   }
// }
