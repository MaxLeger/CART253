/***********************************************
JUNGLE GUARDEN

By MGL
************************************************/
let playerScore = 0
let paddle
let ball
let bricks
let gameState

let flakes = []
curTime = 0;

function preload() {
  frogImage = loadImage("assets/images/frogon.png");
  eggImage = loadImage("assets/images/egg.png");
  jungleImage = loadImage("assets/images/jungle.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  let colors = createColors()
  gameState = 'playing'
  paddle = new Paddle(frogImage)
  ball = new Ball(eggImage)

  bricks = createBricks(colors)

  genFlakes(200, 100);
  genFlakes(width / 2, height / 2);
}

function createColors() {
  const colors = []
  colors.push(color(250, 165, 0))
  colors.push(color(0, 206, 0))
  colors.push(color(0, 250, 0))
  for (let i = 0; i < 10; i++) {
    colors.push(color(random(0, 100), random(0, 255), random(0, 255)))
  }
  return colors
}

function createBricks(colors) {
  const bricks = []
  const rows = 5
  const bricksPerRow = 9
  const brickWidth = width / bricksPerRow
  for (let row = 0; row < rows; row++) {
    for (let i = 0; i < bricksPerRow; i++) {
      brick = new Brick(createVector(brickWidth * i, 25 * row), brickWidth, 25, colors[floor(random(0, colors.length))])
      bricks.push(brick)
    }
  }
  return bricks
}

function draw() {
  if (gameState === 'playing') {
    imageMode(CENTER);
    image(jungleImage, 1000, 1000, 2500, 2000)

    ball.bounceEdge()
    ball.bouncePaddle()

    ball.update()

    if (keyIsDown(LEFT_ARROW)) {
      paddle.move('left')
    } else if (keyIsDown(RIGHT_ARROW)) {
      paddle.move('right')
    }

    for (let i = bricks.length - 1; i >= 0; i--) {
      const brick = bricks[i]
      if (brick.isColliding(ball)) {
        ball.reverse('y')
        bricks.splice(i, 1)
        playerScore += brick.points
        genFlakes()
      } else {
        brick.display()
      }
    }

    paddle.display()
    ball.display()

    textSize(32)
    fill(255)
    text(`Score:${playerScore}`, width - 150, 50)

    if (ball.belowBottom()) {
      gameState = 'Lose'
    }

    if (bricks.length === 0) {
      gameState = 'Win'
    }
  } else {
    textSize(100)
    gameState === 'Lose' ? fill(255, 140, 0) : fill(255)
    text(`You ${gameState}!`, width / 2 - 220, height / 2)
  }
  // Displays the firework
  curTime++;
  for(let i = 0; i < flakes.length; i++) {
    flakes[i].pos.add(flakes[i].vel);
    flakes[i].size--;
    if(flakes[i].size > 0) {
      stroke(flakes[i].color);
      strokeWeight(flakes[i].size);
      point(flakes[i].pos.x, flakes[i].pos.y);
    } else {
      flakes.splice(i, 1);
    }
  }
}



// Condditions of the Firework upon collision

function genFlakes(x, y) {
  let i = 100;
  while(i--) {
    flakes.push({
      color: color(color('hsl(' + floor(random(349)) + ', 100%, 50%)')),
      pos: createVector(ball.location.x, ball.location.y),
      vel: p5.Vector.fromAngle(random(2*PI)).mult(random(10)),
      size: random(50)
    });
  }
}
