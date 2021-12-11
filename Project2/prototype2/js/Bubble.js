/***********************************************
The Bubble Object Oriented Class

By MGL
************************************************/

class Bubble {

  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    //Moves the bubbles
    this.x = this.x + random(-9, 9);
    this.y = this.y + random(-9, 9);
  }

  show() {
    //Displays the bubbles as an image
    image(orangebubbleImage, this.x, this.y, this.r * 2);
  }
}
