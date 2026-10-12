let img;

function preload() {

  img = loadImage('./hoge heer.png');
}

function setup() {
  createCanvas(1000, 600);
} 
function draw() {
  background(220); 

  image(img, 0, 0, 100, 180); 
}