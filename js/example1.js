function setup() {
  createCanvas(windowWidth, windowHeight); // setting the canvas to the screen size
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // auto resize as the window resizes
}

function draw() {
  if (mouseIsPressed) {
    fill(6);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}