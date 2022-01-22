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
let colorInps = [];

function setup() {
  //let cnv = createCanvas(windowWidth, windowHeight);
  let cnv = createCanvas(700, 700); // setting the canvas to the screen size
  cnv.position(windowWidth/2-350, windowHeight/2-350);
  cols = floor(width/scl);
  rows = floor(height/scl);

  //screen position
  let xPosElem = windowWidth/2+355; 

  //fr = createP('');
  //text 
  colorP = createP('Color');
  colorP.style('color', 'white')
  colorP.position(xPosElem, windowHeight/2-30);

  angleSlideP = createP('Angle multiplier');
  angleSlideP.style('color', 'white')
  angleSlideP.position(xPosElem, windowHeight/2+100);

  //create particles
  field = new Array(cols * rows);

  for (let i = 0; i < 10000; i++){
    particle[i] = new Particle();
  }
  background(0);

  //angle multiplier slider
  slider = createSlider(1, 20, 4);
  slider.position(xPosElem, windowHeight/2+130);
  //slider.style('width', '80px');


  //inputs
  for (let i = 0; i < 3; i++){
    colorInps[i] = createInput('255', 'number');
    colorInps[i].style('background-color', 'white');
    colorInps[i].style('color', 'black');
    colorInps[i].position(xPosElem, windowHeight/2+(i*30));
    colorInps[i].attribute("max", "255");
    colorInps[i].attribute("min", "0");
    colorInps[i].class("block text-gray-700 text-sm font-bold mb-2");
  }
  

  //type of display
  display = createRadio();
  display.position(xPosElem, windowHeight/2-300);
  display.option(1, '&nbsp;Flowfield&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
  display.option(2, '&nbsp;Particle flow');
  display.class("bg-transparent bg-white text-stone-700 font-semibold py-2 px-4 border border-stone-500 rounded");
  display.style('width', '150px');
  display.style('background-color', 'white');
  display.attribute('name', 'first')
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
  sliderVal = slider.value();
  if (displayState == 1) { background(0);}
  
  let yoff = 0;
  for (let i = 0; i < rows; i++){
    let xoff = 0;
    for (let j = 0; j < cols; j++){
      let index = (i+j * cols);
      field[index] = v;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * sliderVal;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      xoff += increment;

      if (displayState == 1){
        stroke(`rgba(${colorInps[0].value()},${colorInps[1].value()},${colorInps[1].value()},0.25)`);
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
      particle[i].follow(field);
      particle[i].update();
      particle[i].edge();
      particle[i].show(colorInps[0].value(), colorInps[1].value(), colorInps[2].value());
    }
  }
  //fr.html(floor(frameRate()));
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
}