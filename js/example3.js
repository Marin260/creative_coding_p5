// TOOOOODOOOO
// napravi prazan 2D grid
// dupla for petlja pushaj novi cell unutra
// mjenjaj pozicije sa konstruktorom

function setup() {
  createCanvas(windowWidth, windowHeight); // setting the canvas to the screen size

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // auto resize as the window resizes
}

function draw() {
  for (let i = 0; i < width; i++){
    for (let j = 0; j < height; j++){
      //tu crtaj grid
      //square(1 + j*sSize, 1 + i*sSize, sSize);
    }
  }
  // if (mouseIsPressed) {
  //   fill(0);
  // } else {
  //   fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80);
}