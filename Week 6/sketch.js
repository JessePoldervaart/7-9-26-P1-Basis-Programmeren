let img1;
let img2;
function preload() {

  img1 = loadImage('./hoge heer.png');
  img2 = loadImage('./kamer.png');
}

function setup() {
  createCanvas(1000, 600);
} 
function draw() {
  background(220);

image(img2, 0, 0, 1000, 600); 
image(img1, 500, 300, 150, 280); 

fill('#A87545') 
rect(0, -10, 1000, 100, 10)

text('🌟', 10, 20)
text('⚡', 10, 50)
text('🍖', 10, 80)
text('🫀', 140, 20)
text('🍺', 140, 50)

fill('yellow')
rect(30, 10, 100, 10, 10)
fill('orange')
rect(30, 40, 100, 10, 10)
fill('red')
rect(30, 70, 100, 10, 10)
fill('pink')
rect(160, 10, 100, 10, 10)
fill('skyblue')
rect(160, 40, 100, 10, 10)
}