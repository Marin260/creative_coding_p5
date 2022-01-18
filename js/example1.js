let unsorted = [];
let i = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); // setting the canvas to the screen size
  for(let i = 0; i < width; i++){
    unsorted.push(Math.floor(Math.random() * height));
  }
  //frameRate(30);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // auto resize as the window resizes
}

function draw() {
  background(0);
  if (i < unsorted.length){
    //for (let i = 0; i < unsorted.length; i++){
      for (let j = 0; j < unsorted.length-1; j++){
        if (unsorted[j] > unsorted[j+1]){
          let tmp = unsorted[j];
          unsorted[j] = unsorted[j+1];
          unsorted[j+1] = tmp;
        }
      }
      i+=1;
    //}
  }
  else{
    fill(255);
    textSize(32);
    text('Sorting done', 32, 64);
  }
  
  for (let i = 0; i < unsorted.length; i++){
    stroke(255);
    line(i, height, i, height-unsorted[i]);
  }
}





























function hexagon(transX, transY, s) {
  noFill();
  push();
  translate(transX, transY);
  scale(s);
  triangle(0, 55, 28, 0, 56, 55);
  beginShape();
	vertex(-75, -130);
	vertex(75, -130);
	vertex(150, 0);
	vertex(75, 130);
  vertex(-75, 130);
	vertex(-150, 0);
	endShape(CLOSE);
  pop();
}