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


let state = `test`;

function preload() {
  introImage = loadImage("assets/images/INTRO.png");
  orangebubbleImage = loadImage("assets/images/OrangeBubble.png");
  testtubeImage = loadImage("assets/images/testTube.png");
  topEyeImage.image = loadImage("assets/images/topeye.png");
  botEyeImage.image = loadImage("assets/images/bottomeye.png");
  waterImage = loadImage("assets/images/water.png");
  instantSfx = loadSound("assets/sounds/Instant.mp3");
}

function setup() {
  createCanvas(700, 700);

  topEyeImage.vy = 3;
  botEyeImage.vy = -3;

  //Collumn 1

  flame = new Element(width / 12, height / 12, color(255,0,0));
  water = new Element(width / 12, 3 * height / 12, color(0,0,250));
  egg = new Element(width / 12, 5 * height / 12, color(0,250,0));
  raspberrySeed = new Element(width / 12, 7 * height / 12, color(255,0,0));
  cabbageSeed = new Element(width / 12, 9 * height / 12, color(255,0,0));
  soil = new Element(width / 12, 11 * height / 12, color(255,0,0));

  //Collumn 2

  kerosene = new Element(3 * width / 12, height / 12, color(255,0,0));
  friedEgg = new Element(3 * width / 12, 3 * height / 12, color(255,0,0));

  //MADELINE ALTERED CODE//
  boillingWater = null;// new Element(3 * width / 12, 5 * height / 12, color(90,90,230));
  //






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

    if (egg.active) {
      egg.handleDragging();
      egg.display();
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

    if (kerosene.active) {
      kerosene.handleDragging();
      kerosene.display();
    }

    if (friedEgg.active) {
      friedEgg.handleDragging();
      friedEgg.display();
    }

    //MADELINE ALTERED CODE//
    if (boillingWater != null && boillingWater.active) {
      boillingWater.handleDragging();
      boillingWater.display();
    }
    //

    // Draws the centreline
    drawBoundary();

    if (flame.x > width / 2 && water.x > width / 2 && !flame.isBeingDragged && !water.isBeingDragged) {
      instantSfx.play();

      flame.active = false;
      water.active = false;
      flame = new Element(width / 12, height / 12, color(255,0,0));
      water = new Element(width / 12, 3 * height / 12, color(0,0,250));
      //Makes:
      boillingWater = new Element(3 * width / 12, 5 * height / 12, color(90,90,230));
    }
    if (flame.x > width / 2 && egg.x > width / 2 && !flame.isBeingDragged && !egg.isBeingDragged) {
      instantSfx.play();

      flame.active = false;
      egg.active = false;
      flame = new Element(width / 12, height / 12, color(255,0,0));
      egg = new Element(width / 12, 5 * height / 12, color(0,250,0));
      //Makes:
      friedEgg = new Element(3 * width / 12, 3 * height / 12, color(255,0,0));

    }
    if (water.x > width / 2 && egg.x > width / 2 && !water.isBeingDragged && !egg.isBeingDragged) {
      instantSfx.play();

      water.active = false;
      egg.active = false;
      water = new Element(width / 12, 3 * height / 12, color(0,0,250));
      egg = new Element(width / 12, 5 * height / 12, color(0,250,0));
    }
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
    egg.mousePressed();
    raspberrySeed.mousePressed();
    cabbageSeed.mousePressed();
    soil.mousePressed();
    kerosene.mousePressed();
    friedEgg.mousePressed();

    //MADELINE ADDED CODE//
    if(boillingWater != null){
      boillingWater.mousePressed();
    }
    //

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
    egg.mouseReleased();
    raspberrySeed.mouseReleased();
    cabbageSeed.mouseReleased();
    soil.mouseReleased();
    kerosene.mouseReleased();
    friedEgg.mouseReleased();

    //MADELINE ALTERED CODE//
    if(boillingWater != null){
      boillingWater.mouseReleased();
    }

    //
  }
}

function lab() {

}
