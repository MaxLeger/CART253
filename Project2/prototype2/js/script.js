/***********************************************
Template p5 project #2
MGL

This is a description of this template project.
************************************************/

let bubbles = [];

let poison = [];

let orangebubbleImage
let testtubeImage
let introImage

let waterImage

let boilingwaterImage

let letterImage
let messageImage

let brainBackImage

let conclusionImage

let instantSfx

// Closing eyelids properties

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


let on = false;


let state = `test`;

function preload() {
  introImage = loadImage("assets/images/INTRO.png");
  orangebubbleImage = loadImage("assets/images/OrangeBubble.png");
  testtubeImage = loadImage("assets/images/testTube.png");
  topEyeImage.image = loadImage("assets/images/topeye.png");
  botEyeImage.image = loadImage("assets/images/bottomeye.png");

  flameImage = loadImage("assets/images/flame.png");
  waterImage = loadImage("assets/images/water.png");
  raspberrySeedImage = loadImage("assets/images/raspberrySeed.png");
  cabbageSeedImage = loadImage("assets/images/cabbageSeed.png");
  soilImage = loadImage("assets/images/soil.png");

  boilingwaterImage = loadImage("assets/images/boilingwater.png");
  raspberryImage = loadImage("assets/images/raspberry.png");
  cabbageImage = loadImage("assets/images/cabbage.png");
  blueDyeImage = loadImage("assets/images/blueDye.png");
  blueRasberryImage = loadImage("assets/images/blueRaspberry.png");

  letterImage = loadImage("assets/images/letter.png");
  messageImage = loadImage("assets/images/message.png");

  brainBackImage = loadImage("assets/images/brainBack.png");

  conclusionImage = loadImage("assets/images/conclusion.jpg");


  instantSfx = loadSound("assets/sounds/Instant.mp3");
}

function setup() {
  createCanvas(700, 700);

  topEyeImage.vy = 3;
  botEyeImage.vy = -3;

  //Element Collumn 1

  flame = new Element(width / 8, height / 11, color(255, 0, 0), flameImage); //, flameImage
  water = new Element(width / 8, 3 * height / 11, color(0, 0, 250), waterImage); //, waterImage
  raspberrySeed = new Element(width / 8, 5 * height / 11, color(255, 0, 0), raspberrySeedImage); //, raspberrySeedImage
  cabbageSeed = new Element(width / 8, 7 * height / 11, color(255, 0, 0), cabbageSeedImage); //, cabbageSeedImage
  soil = new Element(width / 8, 9 * height / 11, color(255, 0, 0), soilImage); //, soilImage

  //Element Collumn 2

  //MADELINE ALTERED CODE//
  boillingWater = null; // new Element(3 * width / 12, 5 * height / 12, color(90,90,230));
  raspberry = null;
  cabbage = null;
  blueDye = null;
  blueRaspberry = null;

  for (let i = 0; i < 72; i++) {
    let y = 5 + 4 * i;
    bubbles[i] = new Bubble(342, y, 27);
  }
  for (let i = 0; i < 9; i++) {
    let x = random(200, 400);
    let y = random(200, 400);
    let r = random(20, 60);
    let b = new Poison(x, y, r);
    poison.push(b);
    if (i < 0) {
      state = 'conclusion';
    }
  }
}


//Intro titlecard:
function title() {
  image(introImage, 0, 0);
}

//Poison and Passout sequence
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


function lab() {

}


function draw() {
  background(0);
  statemachine();
}

// Indication of the state
function statemachine() {
  if (state === `title`) {
    title();
  } else if (state === `transition`) {
    transition();
    sleep();
  } else if (state === 'wake') {
    lab();

    // The Test State: Crafting System
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

    // Draws the centreline
    drawBoundary();

    // Draws letter
    drawletter();

    //Combination system:

    if (flame.x > width / 2 && water.x > width / 2 && !flame.isBeingDragged && !water.isBeingDragged) {
      instantSfx.play();

      flame.active = false;
      water.active = false;
      flame = new Element(width / 8, height / 11, color(255, 0, 0), flameImage);
      water = new Element(width / 8, 3 * height / 11, color(0, 0, 250), waterImage);
      //Makes:
      boillingWater = new Element(3 * width / 8, height / 11, color(90, 90, 230), boilingwaterImage);
    }

    if (soil.x > width / 2 && raspberrySeed.x > width / 2 && !soil.isBeingDragged && !raspberrySeed.isBeingDragged) {
      instantSfx.play();

      soil.active = false;
      raspberrySeed.active = false;
      soil = new Element(width / 8, 9 * height / 11, color(255, 0, 0), soilImage);
      raspberrySeed = new Element(width / 8, 5 * height / 11, color(255, 0, 0), raspberrySeedImage);
      //Makes:
      raspberry = new Element(3 * width / 8, 3 * height / 11, color(90, 90, 230), raspberryImage);


    }
    if (soil.x > width / 2 && cabbageSeed.x > width / 2 && !soil.isBeingDragged && !cabbageSeed.isBeingDragged) {
      instantSfx.play();

      soil.active = false;
      cabbageSeed.active = false;
      soil = new Element(width / 8, 9 * height / 11, color(255, 0, 0), soilImage);
      cabbageSeed = new Element(width / 8, 7 * height / 11, color(255, 0, 0), cabbageSeedImage);
      //Makes:
      cabbage = new Element(3 * width / 8, 5 * height / 11, color(255, 0, 0), cabbageImage);
    }

    //PLEASE HELP

    // if (boillingWater.x > width / 2 && cabbage.x > width / 2 && !boillingWater.isBeingDragged && !cabbage.isBeingDragged) {
    //   instantSfx.play();
    //
    //   boillingWater.active = false;
    //   cabbage.active = false;
    //   boillingWater = new Element(3 * width / 8, height / 11, color(90,90,230), boilingwaterImage);
    //   cabbage = new Element(3 * width / 8, 5 * height / 11, color(255,0,0), cabbageImage);
    //   //Makes:
    //   blueDye = new Element(3 * width / 8, 7 * height / 11, color(255,0,0), blueDyeImage);
    // }
    //
    // if (blueDye.x > width / 2 && raspberry.x > width / 2 && !blueDye.isBeingDragged && !raspberry.isBeingDragged) {
    //   instantSfx.play();
    //
    //   blueDye.active = false;
    //   raspberry.active = false;
    //   blueDye = new Element(3 * width / 8, 7 * height / 11, color(255,0,0), blueDyeImage);
    //   raspberry = new Element(3 * width / 8, 3 * height / 11, color(90,90,230), raspberryImage);
    //   //Makes:
    //   blueRaspberry = new Element(3 * width / 8, 9 * height / 11, color(90,90,230), blueRasberryImage);
    // }
    //
    // if (blueRaspberry.x > width / 2 && !blueDye.isBeingDragged) {
    //   state = 'cure';
    // }

  } else if (state === `cure`) {
    cure();

    // cured();
  } else if (state === `conclusion`) {
    conclusion();
  }
}

function cure() {
  image(brainBackImage, 0, 0);

  for (let i = 0; i < poison.length; i++) {
    if (poison[i].clicked(mouseX, mouseY)) {
      poison[i].changeColor(255);
    } else {
      poison[i].changeColor(0);
    }
    if (i < 0) {
      state = 'conclusion';
    }
    poison[i].move();
    poison[i].show();
  }
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
    if (boillingWater != null) {
      boillingWater.mousePressed();
    }

    if (raspberry != null) {
      raspberry.mousePressed();
    }
    //
    if (cabbage != null) {
      cabbage.mousePressed();
    }

    if (blueRaspberry != null) {
      blueRaspberry.mousePressed();
    }

    if (blueDye != null) {
      blueDye.mousePressed();
    }

  }

  if (state === "cure") {
    for (let i = poison.length - 1; i >= 0; i--) {
      if (poison[i].clicked(mouseX, mouseY)) {
        poison.splice(i, 1);
      }
      if (poison.length <= 0) {
        state = 'conclusion';
      }
    }
  }
}


function drawBoundary() {
  push();
  stroke(255);
  line(width / 2, 0, width / 2, height);
  pop();
}

function drawletter() {
  let square = {
    x: random(width / 2 - 1, width / 2 + 1),
    y: random(height / 2 - 1, height / 2 + 1),
    // x: width / 2,
    // y: height / 22,
    w: width / 6,
    h: height / 6,
  }


  //draw a rectangle
  noStroke();
  fill(255, 255, 255);
  imageMode(CENTER);
  image(letterImage, square.x, square.y, square.w, square.h);

  //let the rectangle pop when mouse is inside of it
  if (mouseX > width / 3 && mouseX < width / 2 && mouseY > height / 3 && mouseY < height / 2) {
    square.x = width / 3;
    square.y = height / 3;square.w = square.w * 2
    square.h = square.h * 2
  }

  //define "on"
  if (on) {
    noStroke();
    fill(204, 153, 255);
    imageMode(CENTER);
    image(messageImage, width / 2, height / 2, width / 2, height / 2);
  }
}

function mouseReleased() {
  if (state === "test") {
    flame.mouseReleased();
    water.mouseReleased();
    raspberrySeed.mouseReleased();
    cabbageSeed.mouseReleased();
    soil.mouseReleased();


    //MADELINE ALTERED CODE//
    if (boillingWater != null) {
      boillingWater.mouseReleased();
    }

    if (raspberry != null) {
      raspberry.mouseReleased();
    }

    if (cabbage != null) {
      cabbage.mouseReleased();
    }

    if (blueRaspberry != null) {
      blueRaspberry.mouseReleased();
    }

    if (blueDye != null) {
      blueDye.mouseReleased();
    }
    // letter activation
    if (mouseX > width / 3 && mouseX < width / 3 * 2 && mouseY > height / 3 && mouseY < height / 3 * 2) {
    on = !on
  }
  }
}


function conclusion() {
  image(conclusionImage, 0, 0)
}
