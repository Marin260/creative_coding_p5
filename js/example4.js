let angle = 0;

function setup() {
  const dimension = min(windowWidth, windowHeight);
  createCanvas(dimension, dimension);
  background(100);
  colorMode(HSL, 1);
  noStroke();
}

function cosn(v){
  return cos(v * TWO_PI) * 0.5 + 0.5;
}

function invCosn(v){
  return 1 - cosn(v);
}

const dotSize = 0.1;
const radius = Math.sqrt(0.5) + dotSize;
const PHI = (1 + Math.sqrt(5)) / 2;

let t;
const frames = 1000;
function draw(){
  t = fract(frameCount / frames);

  scale(width, height);
  background(0);
  fill(1);

  const count = 1000 * invCosn(t);
  for (let i = 0; i < count; i++){

    const f = i / count;
    const a = i * PHI;
    const dist = f * radius;

    const x = 0.5 + cos(a * TWO_PI) * dist;
    const y = 0.5 + sin(a * TWO_PI) * dist;

    const sig = pow(cosn(f - t * 6), 2);
    const r = sig * f * dotSize;

    const hue = fract(f * 0.5 + t);
    const sat = 1;
    const light = 0.6 * sig + 0.25;
    fill(color(hue, sat, light));
    circle(x, y, r);
  }
}
