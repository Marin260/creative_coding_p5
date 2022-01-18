let unsorted = [];
let i = 0;
let sorting = false;

function setup() {
  createCanvas(windowWidth, windowHeight); // setting the canvas to the screen size
  for(let i = 0; i < width; i++){
    unsorted.push(Math.floor(Math.random() * height));
    //unsorted.push(noise(i/100.0)*height);
  }
  radio = createRadio();
  radio.position(width - 100, 70)
  radio.option(1, '&nbsp;Bubble&nbsp;');
  radio.option(2, '&nbsp;Selection');
  radio.option(3, '&nbsp;Insertion');
  radio.option(4, '&nbsp;Quick&nbsp;&nbsp;&nbsp;&nbsp;');
  radio.option(5, '&nbsp;Merge');
  //radio.style('display', 'block');
  radio.style('width', '84px');
  radio.style('background-color', 'white');
  textAlign(CENTER);

  button = createButton('&nbsp;SORT &nbsp;');
  button.class("bg-transparent bg-white hover:bg-gray-500 text-stone-700 font-semibold hover:text-white py-2 px-4 border border-stone-500 hover:border-transparent rounded")
  
  //button.style('background-color', 'white');
  button.position(width - 100, 32);
  button.mousePressed(startSort);
  
  
  //frameRate(30);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // auto resize as the window resizes
}

function draw() {
  background(0);
  let choice = radio.value();
  if (sorting){
    if (i < unsorted.length){
      if (choice == 1) bubbleSort();
      else if (choice == 2) selectionSort();
    }
    else{
      fill(255);
      textSize(32);
      text('Sorting done', 32, 64);
    }
  }
  
  for (let i = 0; i < unsorted.length; i++){
    stroke(255);
    line(i, height, i, height-unsorted[i]);
  }
}

function startSort(){
  sorting = !sorting;
}

function swap(arr, a, b){
  let tmp = a;
  arr[a] = arr[b];
  arr[b] = tmp;
}

function bubbleSort(){
  //for (let i = 0; i < unsorted.length; i++){
    for (let j = 0; j < unsorted.length-1; j++){
      if (unsorted[j] > unsorted[j+1]){
        // swap(unsorted, j, j+1);
        let tmp = unsorted[j];
        unsorted[j] = unsorted[j+1];
        unsorted[j+1] = tmp;
      }
    }
    i+=1;
  //}
}

function selectionSort(){
  min_ind = i;
  console.log(min_ind)
  for (let j = i+1; j < unsorted.length; j++){
    if (unsorted[j] < unsorted[min_ind]) min_ind = j;
  }
  let tmp = unsorted[min_ind];
  unsorted[min_ind] = unsorted[i];
  unsorted[i] = tmp;
  i+=1;
}

function insertionSort(){

}

function quickSort(){

}

function mergesort(){
  
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