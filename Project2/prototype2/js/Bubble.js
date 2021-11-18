class Bubble {

  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-9, 9);
    this.y = this.y + random(-9, 9);
  }

  show() {
    image(orangebubbleImage, this.x, this.y, this.r * 2);
  }
}
