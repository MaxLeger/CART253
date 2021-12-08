class Element {

  constructor(x, y, color) { //, image
    this.x = x;
    this.y = y;
    this.size = 63;
    this.color = color;
    // this.image = image;
    this.isBeingDragged = false;
    this.offsetX = 0;
    this.offsetY = 0;
    this.feedbackSizeChangeAmount = 5;
    this.active = true;
  }

  handleDragging() {
    // Only handle dragging behaviour if the shape is actually being dragged
    if (this.isBeingDragged) {
      // Set the shape's position to the mouse position, taking
      // account of the offset when they grabbed the shape
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;

      // Make sure the shape stays on the canvas (can't drag it off)
      this.x = constrain(this.x, 0, width);
      this.y = constrain(this.y, 0, height);
    }
  }

  display() {
    push();

    // image(this.image, this.x, this.y, this.size)

    // Red!
    fill(this.color);
    noStroke();
    // Draw that shape!
    ellipse(this.x, this.y, this.size);

    pop();

  }

  mouseIsOver() {
    // Get the distance between the mouse and the shape
    let d = dist(mouseX, mouseY, this.x, this.y);
    // If it's smaller than the radius of the shape (circle)
    // then the mouse is inside the shape! Otherwise not!
    if (d < this.size / 2) {
      return true;
    } else {
      return false;
    }
  }

  mousePressed() {
    // Only respond to the mouse click if the shape is active
    // and the mouse is in the shape
    if (this.active && this.mouseIsOver()) {
      // Start dragging
      this.isBeingDragged = true;
      // Remember the offset of the shape's centre relative to the mouse
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
      // Make the shape a bit smaller for feedback
      this.size -= this.feedbackSizeChangeAmount;
    }
  }

  mouseReleased() {
    if (this.isBeingDragged) { // NEW!
      // Reset dragging
      this.isBeingDragged = false;
      // Reset the size
      this.size += this.feedbackSizeChangeAmount;
      // Reset the offset
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }
}
