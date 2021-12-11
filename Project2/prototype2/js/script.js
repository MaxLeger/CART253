/***********************************************
p5 project #2: ESCAPE LAB

By MGL

MAIN JS CODE:
************************************************/

//List of all the (Let X):

let bubbles = [];

let poison = [];

let orangebubbleImage
let testtubeImage
let introImage

let frogInfoImage

let waterImage

let boilingwaterImage

let letterImage
let messageImage

let testBackgroundImage

let brainBackImage

let conclusionImage
let frogGif

let scaryMusic
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
let boilingwater = undefined;
let cabbage = undefined;
let blueDye = undefined;
let blueRaspberry = undefined;

let on = false;

let state = `title`;


function preload() {
  introImage = loadImage("assets/images/INTRO.png");
  orangebubbleImage = loadImage("assets/images/OrangeBubble.png");
  testtubeImage = loadImage("assets/images/testTube.png");
  topEyeImage.image = loadImage("assets/images/topeye.png");
  botEyeImage.image = loadImage("assets/images/bottomeye.png");

  frogInfoImage = loadImage("assets/images/frogInfo.png");

  flameImage = loadImage("assets/images/flame.png");
  waterImage = loadImage("assets/images/water.png");
  raspberrySeedImage = loadImage("assets/images/raspberrySeed.png");
  cabbageSeedImage = loadImage("assets/images/cabbageSeed.png");
  soilImage = loadImage("assets/images/soil.png");

  boilingwaterImage = loadImage("assets/images/boilingwater.png");
  raspberryImage = loadImage("assets/images/raspberry.png");
  cabbageImage = loadImage("assets/images/cabbage.png");
  blueDyeImage = loadImage("assets/images/blueDye.png");
  blueRaspberryImage = loadImage("assets/images/blueRaspberry.png");

  letterImage = loadImage("assets/images/letter.png");
  messageImage = loadImage("assets/images/message.png");

  testBackgroundImage = loadImage("assets/images/testbackground.jpg");

  brainBackImage = loadImage("assets/images/brainBack.png");

  conclusionImage = loadImage("assets/images/conclusion.jpg");
  frogGif = loadImage("assets/images/pepe-clap.gif");

  scaryMusic = loadSound("assets/sounds/scary.mp3");
  instantSfx = loadSound("assets/sounds/Instant.mp3");
}

function setup() {
  createCanvas(700, 700);

  topEyeImage.vy = 3;
  botEyeImage.vy = -3;

  //Element Collumn 1

  flame = new Element(width / 9, height / 10, color(255, 0, 0), flameImage); //, flameImage
  water = new Element(width / 9, 3 * height / 10, color(0, 0, 250), waterImage); //, waterImage
  raspberrySeed = new Element(width / 9, 5 * height / 10, color(255, 0, 0), raspberrySeedImage); //, raspberrySeedImage
  cabbageSeed = new Element(width / 9, 7 * height / 10, color(255, 0, 0), cabbageSeedImage); //, cabbageSeedImage
  soil = new Element(width / 9, 9 * height / 10, color(255, 0, 0), soilImage); //, soilImage


  //Element Collumn 2

  //Null allows an entity to exists without being Neither true or False
  boillingWater = null;
  raspberry = null;
  cabbage = null;
  blueDye = null;
  blueRaspberry = null;

  //Bubbles setup:
  for (let i = 0; i < 72; i++) {
    let y = 5 + 4 * i;
    bubbles[i] = new Bubble(342, y, 27);
  }

  //Poison setup:
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


  image(topEyeImage.image, topEyeImage.x, topEyeImage.y)

  image(botEyeImage.image, botEyeImage.x, botEyeImage.y)

}

function sleep() {
  if (topEyeImage.y > -270) {
    state = 'frogfrog';
  }
}

//Displays the little frog helper's message
function DisplayMessageFrog() {
  image(frogInfoImage, 0, 0);
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
  } else if (state === 'frogfrog') {
    DisplayMessageFrog();

    // The Test State repreents the Crafting System
  } else if (state === 'test') {

    testBackground();

    //Displaying the elements

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

    //Displaying the elements which are not present on screen at beggining of the the new state.

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

    //Combination system:

    if (flame.x > width / 2 && water.x > width / 2 && !flame.isBeingDragged && !water.isBeingDragged) {
      instantSfx.play();

      flame.active = false;
      water.active = false;
      //Respawns:
      flame = new Element(width / 10, height / 10, color(255, 0, 0), flameImage);
      water = new Element(width / 10, 3 * height / 10, color(0, 0, 250), waterImage);
      //Makes:
      boillingWater = new Element(3 * width / 9, height / 10, color(90, 90, 230), boilingwaterImage);
    }

    if (soil.x > width / 2 && raspberrySeed.x > width / 2 && !soil.isBeingDragged && !raspberrySeed.isBeingDragged) {
      instantSfx.play();

      soil.active = false;
      raspberrySeed.active = false;
      //Respawns:
      soil = new Element(width / 10, 9 * height / 10, color(255, 0, 0), soilImage);
      raspberrySeed = new Element(width / 10, 5 * height / 10, color(255, 0, 0), raspberrySeedImage);
      //Makes:
      raspberry = new Element(3 * width / 9, 3 * height / 10, color(90, 90, 230), raspberryImage);


    }
    if (soil.x > width / 2 && cabbageSeed.x > width / 2 && !soil.isBeingDragged && !cabbageSeed.isBeingDragged) {
      instantSfx.play();

      soil.active = false;
      cabbageSeed.active = false;
      //Respawns:
      soil = new Element(width / 10, 9 * height / 10, color(255, 0, 0), soilImage);
      cabbageSeed = new Element(width / 10, 7 * height / 10, color(255, 0, 0), cabbageSeedImage);
      //Makes:
      cabbage = new Element(3 * width / 9, 5 * height / 10, color(255, 0, 0), cabbageImage);
    }

    if (cabbage && boillingWater && boillingWater.x > width / 2 && cabbage.x > width / 2 && !boillingWater.isBeingDragged && !cabbage.isBeingDragged) {
      instantSfx.play();

      boillingWater.active = false;
      cabbage.active = false;
      //Respawns:
      boillingWater = new Element(3 * width / 9, height / 10, color(90, 90, 230), boilingwaterImage);
      cabbage = new Element(3 * width / 9, 5 * height / 10, color(255, 0, 0), cabbageImage);
      //Makes:
      blueDye = new Element(3 * width / 9, 7 * height / 10, color(255, 0, 0), blueDyeImage);
    }

    if (blueDye && raspberry && blueDye.x > width / 2 && raspberry.x > width / 2 && !blueDye.isBeingDragged && !raspberry.isBeingDragged) {
      instantSfx.play();

      blueDye.active = false;
      raspberry.active = false;
      //Respawns:
      blueDye = new Element(3 * width / 9, 7 * height / 10, color(255, 0, 0), blueDyeImage);
      raspberry = new Element(3 * width / 9, 3 * height / 10, color(90, 90, 230), raspberryImage);
      //Makes:
      blueRaspberry = new Element(3 * width / 9, 9 * height / 10, color(90, 90, 230), blueRaspberryImage); //THE ANTIDOTE!
    }

    if (blueRaspberry && blueRaspberry.x > width / 2 && !blueRaspberry.isBeingDragged) {
      //Consumming the ANTIDOTE transitions to the next state.
      state = 'cure';
    }

  } else if (state === `cure`) {
    DisplayCure();

  } else if (state === `conclusion`) {
    displayConclusion();
  }
}

function DisplayCure() {
  //Background Image:
  image(brainBackImage, 350, 350);

  //Displaying the poison bubbles
  for (let i = 0; i < poison.length; i++) {
    if (poison[i].clicked(mouseX, mouseY)) {
      poison[i].changeColor(255);
    } else {
      poison[i].changeColor(0);
    }
    if (i < 0) {
      //The method of transitioning once all the poison bubbles are popped
      state = 'conclusion';
    }
    poison[i].move();
    poison[i].show();
  }
}

function mousePressed() {
  //Click to transition to the next state
  if (state === "title") {
    state = 'transition';
  }

  if (state === "frogfrog") {
    state = 'test';
  }
  //Activation of the background music
  if (!scaryMusic.isPlaying()) {
    scaryMusic.loop();
  }

  if (state === "test") {
    //MousePressed function for the crafting elements which are present on screen
    flame.mousePressed();
    water.mousePressed();
    raspberrySeed.mousePressed();
    cabbageSeed.mousePressed();
    soil.mousePressed();


    //MousePressed function alterative for element which aren't present on screen yet
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
    // In the 'cure' state, only respond to the mouse click if the shape is active
    for (let i = poison.length - 1; i >= 0; i--) {
      if (poison[i].clicked(mouseX, mouseY)) {
        poison.splice(i, 1);
      }
      //The method of transitioning once all the poison bubbles are popped
      if (poison.length <= 0) {
        state = 'conclusion';
      }
    }
  }
}


function drawBoundary() {
  push();
  stroke(255);
  strokeWeight(7);
  line(width / 2, 0, width / 2, height);
  pop();
}

function testBackground() {
  imageMode(CENTER);
  image(testBackgroundImage, 350, 350);
}

function mouseReleased() {
  if (state === "test") {
    //Elements present at the start of the 'test' state
    flame.mouseReleased();
    water.mouseReleased();
    raspberrySeed.mouseReleased();
    cabbageSeed.mouseReleased();
    soil.mouseReleased();

    //Elements not present at the start of the 'test' state
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
  }
}


function displayConclusion() {
  imageMode(CENTER);
  image(frogGif, 350, 350, 700, 700);

  scaryMusic.stop();
}
