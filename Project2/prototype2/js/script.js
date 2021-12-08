/***********************************************
Template p5 project #2
MGL

This is a description of this template project.
************************************************/

let bubbles = [];

let orangebubbleImage
let testtubeImage
let introImage

let waterImage

let boilingwaterImage

let instantSfx

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

let flame = undefined;
let water = undefined;
let egg = undefined;

// let image = undefined


let state = `test`;

function preload() {
  introImage = loadImage("assets/images/INTRO.png");
  orangebubbleImage = loadImage("assets/images/OrangeBubble.png");
  testtubeImage = loadImage("assets/images/testTube.png");
  topEyeImage.image = loadImage("assets/images/topeye.png");
  botEyeImage.image = loadImage("assets/images/bottomeye.png");

  // flameImage = loadImage("assets/images/flmae.png");
  // waterImage = loadImage("assets/images/water.png");
  // raspberrySeedImage = loadImage("assets/images/raspberrySeed.png");
  // cabbageSeedImage = loadImage("assets/images/cabbageSeed.png");
  // soilImage = loadImage("assets/images/soil.png");
  //
  // boilingwaterImage = loadImage("assets/images/boilingwater.png");
  // raspberryImage = loadImage("assets/images/raspberry.png");
  // cabbageImage = loadImage("assets/images/cabbage.png");
  // blueDyeImage = loadImage("assets/images/blueDye.png");
  // blueRasberryImage = loadImage("assets/images/blueRaspberry.png");


  instantSfx = loadSound("assets/sounds/Instant.mp3");
}

function setup() {
  createCanvas(700, 700);

  topEyeImage.vy = 3;
  botEyeImage.vy = -3;

  //Collumn 1

  flame = new Element(width / 8, height / 11, color(255,0,0) ); //, flameImage
  water = new Element(width / 8, 3 * height / 11, color(0,0,250)); //waterImage
  raspberrySeed = new Element(width / 8, 5 * height / 11, color(255,0,0)); //, raspberrySeedImage
  cabbageSeed = new Element(width / 8, 7 * height / 11, color(255,0,0)); //, cabbageSeedImage
  soil = new Element(width / 8, 9 * height / 11, color(255,0,0)); //, soilImage

  //Collumn 2

  //MADELINE ALTERED CODE//
  boillingWater = null;// new Element(3 * width / 12, 5 * height / 12, color(90,90,230));
  raspberry = null;
  cabbage = null;
  blueDye = null;
  blueRaspberry = null;

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
    if (flame.active) {
      flame.handleDragging();
      flame.display();
    }

    if (water.active) {
      water.handleDragging();
      water.display();
    }

    if (raspberrySeed.active) {
      raspberrySeed.handleDragging();
      raspberrySeed.display();
    }

    if (cabbageSeed.active) {
      cabbageSeed.handleDragging();
      cabbageSeed.display();
    }

    if (soil.active) {
      soil.handleDragging();
      soil.display();
    }

    //MADELINE ALTERED CODE//
    if (boillingWater != null && boillingWater.active) {
      boillingWater.handleDragging();
      boillingWater.display();
    }

    if (raspberry != null && raspberry.active) {
      raspberry.handleDragging();
      raspberry.display();
    }

    if (cabbage != null && cabbage.active) {
      cabbage.handleDragging();
      cabbage.display();
    }

    if (blueRaspberry != null && blueRaspberry.active) {
      blueRaspberry.handleDragging();
      blueRaspberry.display();
    }

    if (blueDye != null && blueDye.active) {
      blueDye.handleDragging();
      blueDye.display();
    }
    //

    // Draws the centreline
    drawBoundary();

    if (flame.x > width / 2 && water.x > width / 2 && !flame.isBeingDragged && !water.isBeingDragged) {
      instantSfx.play();

      flame.active = false;
      water.active = false;
      flame = new Element(width / 8, height / 11, color(255,0,0));
      water = new Element (width / 8, 3 * height / 11, color(0,0,250));
      //Makes:
      boillingWater = new Element(3 * width / 8, height / 11, color(90,90,230));
    }

    if (soil.x > width / 2 && raspberrySeed.x > width / 2 && !soil.isBeingDragged && !raspberrySeed.isBeingDragged) {
      instantSfx.play();

      soil.active = false;
      raspberrySeed.active = false;
      soil = new Element(width / 8, 9 * height / 11, color(255,0,0));
      raspberrySeed = new Element(width / 8, 5 * height / 11, color(255,0,0));
      //Makes:
      raspberry = new Element(3 * width / 8, 3 * height / 11, color(90,90,230));


    }
    if (soil.x > width / 2 && cabbageSeed.x > width / 2 && !soil.isBeingDragged && !cabbageSeed.isBeingDragged) {
      instantSfx.play();

      soil.active = false;
      cabbageSeed.active = false;
      soil = new Element(width / 8, 9 * height / 11, color(255,0,0));
      cabbageSeed = new Element(width / 8, 7 * height / 11, color(255,0,0));
      //Makes:
      cabbage = new Element(3 * width / 8, 5 * height / 11, color(255,0,0));
    }

    // if (boillingWater.x > width / 2 && cabbage.x > width / 2 && !boillingWater.isBeingDragged && !cabbage.isBeingDragged) {
    //   instantSfx.play();
    //
    //   boillingWater.active = false;
    //   cabbage.active = false;
    //   boillingWater = new Element(3 * width / 8, height / 11, color(90,90,230));
    //   cabbage = new Element(3 * width / 8, 5 * height / 11, color(255,0,0));
    //   //Makes:
    //   blueDye = new Element(3 * width / 8, 7 * height / 11, color(255,0,0));
    // }
    //
    // if (blueDye.x > width / 2 && raspberry.x > width / 2 && !blueDye.isBeingDragged && !raspberry.isBeingDragged) {
    //   instantSfx.play();
    //
    //   blueDye.active = false;
    //   raspberry.active = false;
    //   blueDye = new Element(3 * width / 8, 7 * height / 11, color(255,0,0));
    //   raspberry = new Element(3 * width / 8, 3 * height / 11, color(90,90,230));
    //   //Makes:
    //   blueRaspberry = new Element(3 * width / 8, 9 * height / 11, color(90,90,230));
    // }

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
    flame.mousePressed();
    water.mousePressed();
    raspberrySeed.mousePressed();
    cabbageSeed.mousePressed();
    soil.mousePressed();


    //MADELINE ADDED CODE//
    if(boillingWater != null){
      boillingWater.mousePressed();
    }

    if(raspberry != null){
      raspberry.mousePressed();
    }
    //
    if(cabbage != null){
      cabbage.mousePressed();
    }

    if(blueRaspberry != null){
      blueRaspberry.mousePressed();
    }

    if(blueDye != null){
      blueDye.mousePressed();
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
    flame.mouseReleased();
    water.mouseReleased();
    raspberrySeed.mouseReleased();
    cabbageSeed.mouseReleased();
    soil.mouseReleased();


    //MADELINE ALTERED CODE//
    if(boillingWater != null){
      boillingWater.mouseReleased();
    }

    if(raspberry != null){
      raspberry.mouseReleased();
    }

    if(cabbage != null){
      cabbage.mouseReleased();
    }

    if(blueRaspberry != null){
      blueRaspberry.mouseReleased();
    }

    if(blueDye != null){
      blueDye.mouseReleased();
    }
  }
}

function lab() {

}
