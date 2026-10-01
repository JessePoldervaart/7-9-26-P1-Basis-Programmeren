let colourPalette = [
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
let randomR;
let randomG;
let randomB;

function setup() {
createCanvas(800,600);
 
randomX = random(0, 760);
  randomY = random(0, 280);
    randomx = random(30, 100);
  randomy = random(100, 120);
  randomRotate = random(0,0.000001);

 
}

function draw() {
 
  background(220);
  for(let y = 0; y <3; y++){
 for(let i = 0; i<10; i++){
  for(let t = 0; t < 6; t++){
    fill(colourPalette[t][i]);
   
  rect(i*40,50*t, 40, 40)
 }
}
  }
 for(let i = 0; i<10; i++){
   for(let j = 0; j < 6; j++){
    rotate(randomRotate)
      fill(colourPalette[j][i])
  circle(randomx*i,randomy+20*j,40)
 }
 randomRotate+=0.00005
}
}

function keyPressed() {
    randomR = random(0,255)
  randomG = random(0,255)
  randomB = random(0,255)
 

  if (keyCode === BACKSPACE) { 
    colourPalette = [];
      console.log("Backspace was pressed!");
    for (let j = 0; j < 6; j++) {
      let row = [];
      for (let i = 0; i < 10; i++) {
        let r = random(0, 255);
        let g = random(0, 255);
        let b = random(0, 255);
        
        row.push(color(r, g, b));
      }
      colourPalette.push(row);
    }
  }
}
