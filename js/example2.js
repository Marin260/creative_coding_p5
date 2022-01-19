let increment = 0.1;
let scl = 10;
let cols, rows;
let zoff = 0;
//let fr;

let particle = [];

let field = [];


function setup() {
  //createCanvas(windowWidth, windowHeight);
  let cnv = createCanvas(700, 700); // setting the canvas to the screen size
  cnv.position(windowWidth/2-350, windowHeight/2-350);
  cols = floor(width/scl);
  rows = floor(height/scl);

  //fr = createP('');

  field = new Array(cols * rows);

  for (let i = 0; i < 500; i++){
    particle[i] = new Particle();
  }
  background(0);
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight); // auto resize as the window resizes
// }

function draw() {
  
  let yoff = 0;
  for (let i = 0; i < rows; i++){
    let xoff = 0;
    for (let j = 0; j < cols; j++){
      let index = (i+j * cols);
      field[index] = v;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      xoff += increment;
      stroke('rgba(0,0,0,0.25)');

      // push();
      // translate(j*scl, i*scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();

      
    }
    yoff += increment;
    zoff += 0.0003;
  }
  for (let i = 0; i < particle.length; i++){
    particle[i].follow(field);
    particle[i].update();
    particle[i].edge();
    particle[i].show();
  }
  //fr.html(floor(frameRate()));
}