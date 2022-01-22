let increment = 0.05;
let scl = 10;
let cols, rows;
let zoff = 0;
//let fr;

let particle = [];

let field = [];

//user input vars
let slider;
let sliderVal;
let display;
let button;

let displayState = 1;

let inpR, inpG, inpB;


function setup() {
  //let cnv = createCanvas(windowWidth, windowHeight);
  let cnv = createCanvas(700, 700); // setting the canvas to the screen size
  cnv.position(windowWidth/2-350, windowHeight/2-350);
  cols = floor(width/scl);
  rows = floor(height/scl);

  //screen position
  let xPosElem = windowWidth/2+355; 

  //fr = createP('');

  //create particles
  field = new Array(cols * rows);

  for (let i = 0; i < 10000; i++){
    particle[i] = new Particle();
  }
  background(0);

  //speed slider
  // slider = createSlider(0.2, 10, 100);
  // slider.position(30, 100);
  // slider.style('width', '80px');


  //inputs
  inpR = createInput('255', 'number');
  inpR.style('background-color', 'white');
  inpR.style('color', 'black');
  inpR.position(xPosElem, windowHeight/2);
  inpR.attribute("max", "255");
  inpR.attribute("min", "0");
  inpR.class("block text-gray-700 text-sm font-bold mb-2");
  inpR.size(50);
  inpR.input(rColor);

  inpG = createInput('255', 'number');
  inpG.style('background-color', 'white');
  inpG.style('color', 'black');
  inpG.position(xPosElem, windowHeight/2+50);
  inpG.attribute("max", "255");
  inpG.attribute("min", "0");
  inpG.class("block text-gray-700 text-sm font-bold mb-2");
  inpG.size(50);
  inpG.input(gColor);

  inpB = createInput('255', 'number');
  inpB.style('background-color', 'white');
  inpB.style('color', 'black');
  inpB.position(xPosElem, windowHeight/2+100);
  inpB.attribute("max", "255");
  inpB.attribute("min", "0");
  inpB.class("block text-gray-700 text-sm font-bold mb-2");
  inpB.size(50);
  inpB.input(bColor);

  //type of display
  display = createRadio();
  display.position(xPosElem, windowHeight/2-300);
  display.option(1, '&nbsp;Flowfield&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
  display.option(2, '&nbsp;Particle flow');
  display.class("bg-transparent bg-white text-stone-700 font-semibold py-2 px-4 border border-stone-500 rounded");
  display.style('width', '150px');
  display.style('background-color', 'white');
  display.attribute('name', 'second')
  textAlign(CENTER);

  //show display button
  button = createButton('CHANGE DISPLY');
  button.class("bg-transparent bg-white hover:bg-gray-500 text-stone-700 font-semibold hover:text-white py-2 px-4 border border-stone-500 hover:border-transparent rounded")
  button.position(xPosElem, windowHeight/2-350);
  button.mousePressed(changeDispay);
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight); // auto resize as the window resizes
// }

function draw() {
  // sliderVal = slider.value();
  // frameRate(sliderVal);
  if (displayState == 1) { background(0);}
  
  let yoff = 0;
  let r = random(256);
  let g = random(256);
  let b = random(256);
  for (let i = 0; i < rows; i++){
    let xoff = 0;
    for (let j = 0; j < cols; j++){
      let index = (i+j * cols);
      field[index] = v;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      xoff += increment;

      if (displayState == 1){
        
        stroke(`rgba(${inpR.value()},${inpG.value()},${inpB.value()},0.25)`);
        push();
        translate(j*scl, i*scl);
        rotate(v.heading());
        strokeWeight(1);
        line(0, 0, scl, 0);
        pop();
      }
    }
    yoff += increment;
    zoff += 0.0003;
  }

  if (displayState != 1){
    for (let i = 0; i < particle.length; i++){
      //particle[i].chSpeed(sliderVal);
      particle[i].follow(field);
      particle[i].update();
      particle[i].edge();
      particle[i].show(inpR.value(), inpG.value(), inpB.value());
      //particle[i].show(0, 0, 0);
      //particle[i].show(r, g, b);
    }
  }
  //fr.html(floor(frameRate()));
}

function rColor() {
  console.log('you are typing: ', this.value());
}
function gColor() {
  console.log('you are typing: ', this.value());
}
function bColor() {
  console.log('you are typing: ', this.value());
}

function changeDispay() {
  //start sorting with the button click
  background(0);
  if(display.value() == 2){
    for (let i = 0; i < particle.length; i++){
      particle[i].reset();
    }
  }
  displayState = display.value();
  console.log(display.value())
  background(0);
}