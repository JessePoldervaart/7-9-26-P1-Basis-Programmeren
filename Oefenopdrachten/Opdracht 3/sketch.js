let colour = [
['green', 'red', 'blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'red'], 
['green', 'red', 'blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'red'], 
['green', 'red', 'blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'red'], 
['green', 'red', 'blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'red'], 
['green', 'red', 'blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'red'], 
['green', 'red', 'blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'red']];
  let randomX;
let randomY;
let randomx;
let randomy;
let randomRotate;

function setup() {
createCanvas(800,600);
 
randomX = random(0, 760);
  randomY = random(0, 280);
    randomx = random(0, 760);
  randomy = random(0, 280);
  randomRotate = random(0,0.000001);
 
}

function draw() {
 
  background(220);
  for(let y = 0; y <3; y++){
 for(let i = 0; i<10; i++){
  for(let t = 0; t < 1; t++){
    fill(colour[t][i]);
   
  rect(randomX+i*40,randomY+20*i*t, 40, 40)
 }
}
  }
 for(let i = 0; i<10; i++){
   for(let j = 0; j < 6; j++){
    rotate(randomRotate)
      fill(colour[j][i])
  circle(randomx+i*10+10,randomy+j*j+randomY,40)
 }
 randomRotate+=0.0001
}
}

function keyPressed() {
 
}