//initial state vars
let unsorted = [];
let i = 0;
let j = 1; // for insertion sort
let timeSorting = 0;
let sorting = false;
//DOM elements vars
let radio;
let order;
let button;
let reset;
let slider;
let sliderVal;

//background field vars
let increment = 0.1;
let scl = 10;
let cols, rows;
let zoff = 0;
let fr;

let particle = [];

let field = [];



function setup() {
  createCanvas(windowWidth, windowHeight); // setting the canvas to the screen size
  for (let i = 0; i < width; i++) {
    unsorted.push(Math.floor(Math.random() * height)); //generate rand numbers
    //unsorted.push(noise(i/100.0)*height); //use perlin noise
  }
  //radio buttons
  radio = createRadio();
  radio.position(width - 140, 158);
  radio.option(1, '&nbsp;Bubble&nbsp;&nbsp;');
  radio.option(2, '&nbsp;Selection');
  radio.option(3, '&nbsp;Insertion');
  radio.option(4, '&nbsp;Quick&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
  radio.option(5, '&nbsp;Merge');
  radio.selected(1);
  radio.class("bg-transparent bg-white text-stone-700 font-semibold py-2 px-4 border border-stone-500 rounded");
  radio.style('width', '123px');
  radio.style('background-color', 'white');
  radio.attribute('name', 'first')
  textAlign(CENTER);

  order = createRadio();
  order.position(width - 157, 300);
  order.option(1, '&nbsp;Ascending&nbsp;&nbsp;');
  order.option(2, '&nbsp;Descending');
  order.class("bg-transparent bg-white text-stone-700 font-semibold py-2 px-4 border border-stone-500 rounded");
  order.style('width', '140px');
  order.style('background-color', 'white');
  order.attribute('name', 'second')
  textAlign(CENTER);

  //sort button
  button = createButton('SORT');
  button.class("bg-transparent bg-white hover:bg-gray-500 text-stone-700 font-semibold hover:text-white py-2 px-4 border border-stone-500 hover:border-transparent rounded")
  button.position(width - 100, 32);
  button.mousePressed(startSort);

  //reset button
  reset = createButton('RESET');
  reset.class("bg-transparent bg-white hover:bg-gray-500 text-stone-700 font-semibold hover:text-white py-2 px-4 border border-stone-500 hover:border-transparent rounded")
  reset.position(width - 100, 96);
  reset.mousePressed(resetSort);

  //speed slider
  slider = createSlider(1, 60, 100);
  slider.position(30, 100);
  slider.style('width', '80px');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // auto resize as the window resizes
}

function draw() {
  background('#60594d'); //reset background
  //using the slider value to alter the framerate(speed)
  sliderVal = slider.value();
  frameRate(sliderVal);
  //background('#60594d');

  //sorting alg depends on the radio choice
  let choice = radio.value();
  if (sorting) {
    if (i >= unsorted.length || j >= unsorted.length) {
      //stop sorting when sorting done
      fill(255);
      textSize(32);
      text('Sorting done: ' + (timeSorting / 1000).toFixed(2), 30, 64);
      textAlign(LEFT);
    }
    else {
      timeSorting += deltaTime;
      if (choice == 1) bubbleSort();
      else if (choice == 2) selectionSort();
      else if (choice == 3) insertionSort();
      else if (choice == 4) quickSort();
      else if (choice == 5) mergesort();
      fill(255);
      textSize(32);
      text('Sorting timer: ' + (timeSorting / 1000).toFixed(2), 30, 64);
      textAlign(LEFT);
    }
  }

  // variables for colors
  let subdivisions = Math.floor(width / 255);
  let gradientColor = 0;

  //draw the lines
  for (let i = 0; i < unsorted.length; i++) {
    if (i % subdivisions == 0) gradientColor += 1;
    stroke(254, 198, 1 + gradientColor);
    line(i, height, i, height - unsorted[i]);
  }
}

function startSort() {
  //start sorting with the button click
  sorting = !sorting;
}

function resetSort() {
  // reset to initial state
  sorting = false;
  i = 0;
  j = 1;
  timeSorting = 0;
  unsorted = [];
  for (let i = 0; i < width; i++) unsorted.push(Math.floor(Math.random() * height));
}

function swap(arr, a, b) {
  let tmp = a;
  arr[a] = arr[b];
  arr[b] = tmp;
}

function bubbleSort() {
  //for (let i = 0; i < unsorted.length; i++){
  for (let j = 0; j < unsorted.length - 1; j++) {
    if (order.value() == 2) {
      if (unsorted[j] < unsorted[j + 1]) {
        //swap(unsorted, j, j+1);
        let tmp = unsorted[j];
        unsorted[j] = unsorted[j + 1];
        unsorted[j + 1] = tmp;
      }
    }
    else {
      if (unsorted[j] > unsorted[j + 1]) {
        //swap(unsorted, j, j+1);
        let tmp = unsorted[j];
        unsorted[j] = unsorted[j + 1];
        unsorted[j + 1] = tmp;
      }
    }
  }
  i += 1;
  //}
}

function selectionSort() {
  min_ind = i;
  for (let j = i + 1; j < unsorted.length; j++) {
    if (order.value() == 2) {
      if (unsorted[j] > unsorted[min_ind]) min_ind = j;
    }
    else {
      if (unsorted[j] < unsorted[min_ind]) min_ind = j;
    }
  }
  let tmp = unsorted[min_ind];
  unsorted[min_ind] = unsorted[i];
  unsorted[i] = tmp;
  i += 1;
}

function insertionSort() {
  let k = unsorted[j];
  let z = j - 1;
  if (order.value() == 2) {
    while (k > unsorted[z] && z >= 0) {
      unsorted[z + 1] = unsorted[z];
      --z;
    }
  }
  else {
    while (k < unsorted[z] && z >= 0) {
      unsorted[z + 1] = unsorted[z];
      --z;
    }
  }
  unsorted[z + 1] = k;
  j += 1;
}

function quickSort() {
  alert("Coming soon. Not yet implemented");
  sorting = false;
}

function mergesort() {
  alert("Coming soon. Not yet implemented");
  sorting = false;
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