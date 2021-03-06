class Paddle {
  constructor(image) {
    this.width = 180
    this.height = 99
    this.color = color(255)
    this.image = image
    this.location = createVector((width / 2) - (this.width / 2), height - 35)
    const speed = 24
    this.speed = {
      right: createVector(speed, 0),
      left: createVector(speed * -1, 0)
    }
  }

//Displays the paddle as a frogImage
  display() {
    imageMode(CENTER);
    image(this.image,this.location.x + 81, this.location.y, this.width, this.height)
  }

//Mechanics of mouving the paddle
  move(direction) {
    this.location.add(this.speed[direction])

    if(this.location.x < 0) {
      this.location.x = 0
    } else if(this.location.x + this.width > width) {
      this.location.x = width - this.width
    }
  }
}
