class Ball {
  constructor(image) {
    this.radius = 15
    this.size = this.radius * 2
    this.location = createVector(paddle.location.x + (paddle.width / 2), (paddle.location.y - this.radius - 5))
    this.image = image
    this.color = color(147, 112, 219)
    this.velocity = createVector(9, -9)
    this.paddle = paddle
  }

// Bounces the ball on the Paddle
  bouncePaddle() {
    // We are within the width of the paddle
    if (this.location.x + this.radius >= this.paddle.location.x &&
        this.location.x - this.radius <= this.paddle.location.x + this.paddle.width) {
          if (this.location.y + this.radius > this.paddle.location.y) {
            this.reverse('y');
            this.location.y = this.paddle.location.y - this.radius - 1;
          }
        }
  }

// Bounces the ball on edges
  bounceEdge() {
    if (this.location.x + this.radius >= width) { // Check right edge
      this.reverse('x')
    } else if(this.location.x - this.radius <= 0) { // Check left edge
      this.reverse('x')
    } else if(this.location.y - this.radius <= 0) { // Check the top
      this.reverse('y')
    }
  }

//Displays the ball as an eggImage
  display() {
    fill(this.color)
    image(this.image, this.location.x, this.location.y, this.size, this.size)
  }

//Updates the location of the ball
  update() {
    this.location.add(this.velocity)
  }

//Influences the ball's coordiation
  reverse(coord) {
    this.velocity[coord] *= -1
  }

// Allows the ball to fall off
  belowBottom() {
    return this.location.y - this.radius > height
  }
}
