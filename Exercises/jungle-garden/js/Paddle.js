class Paddle {
  constructor(image) {
    this.width = 150
    this.height = 81
    this.color = color(255)
    this.image = image
    this.location = createVector((width / 2) - (this.width / 2), height - 35)
    const speed = 24
    this.speed = {
      right: createVector(speed, 0),
      left: createVector(speed * -1, 0)
    }
  }

  display() {
    imageMode(CENTER);
    image(this.image,this.location.x + 71, this.location.y, this.width, this.height)
  }

  move(direction) {
    this.location.add(this.speed[direction])

    if(this.location.x < 0) {
      this.location.x = 0
    } else if(this.location.x + this.width > width) {
      this.location.x = width - this.width
    }
  }
}
