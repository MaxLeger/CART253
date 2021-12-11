/***********************************************
The Posion Object Oriented Class

By MGL
************************************************/

class Poison {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  changeColor(bright) {
    //Sets up the color in terms of brightness
    this.brightness = bright;
  }

  clicked(px, py) {
    //Verifies if the poison is being clicked on
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    //Moves the poison Bubbles
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    //Shows the poison Bubbles
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}
