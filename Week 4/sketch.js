let colourPalette = [
['green', 'red', 'blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'red'], 
['green', 'red', 'blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'red'], 
['green', 'red', 'blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'red'], 
['green', 'red', 'blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'red'], 
['green', 'red', 'blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'red'], 
['green', 'red', 'blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'red']];

let positionx = [];
let positiony = [];
let randomx;
let randomy;
let randomRotate;


function setup() {
createCanvas(800,600);
 

    randomx = random(30, 100)
  randomy = random(100, 120)
  randomRotate = random(0,0.000001)

 
}

function draw() {
 
  
  background(220);
  
 if (positionx.length > 0 && positiony.length > 0) {
    for (let i = 0; i < 10; i++) {
      for (let t = 0; t < 6; t++) {
        fill(colourPalette[t][i])
        rect(positionx[t][i], positiony[t][i], 100, 100)
      }
    }
  }
  
 for(let i = 0; i<10; i++){
   for(let j = 0; j < 6; j++){
    rotate(randomRotate)
      fill(colourPalette[j][i])
  circle(randomx*i,randomy+20*j,60)
 }
 randomRotate+=0.00005
}
}

function keyPressed() {
  randomR = random(0,255)
  randomG = random(0,255)
  randomB = random(0,255)
 

  if (keyCode === BACKSPACE) { 
    colourPalette = []
    for (let j = 0; j < 6; j++) {
      let row = []
      for (let i = 0; i < 10; i++) {
        let r = random(0, 255)
        let g = random(0, 255)
        let b = random(0, 255)
        
        row.push(color(r, g, b))
      }
      colourPalette.push(row)
    }
  }

  if (keyCode === ENTER) { 
    
    positionx = []
    positiony = []

    for (let t = 0; t < 6; t++) {
      let rowX = []
      let rowY = []
      
      for (let i = 0; i < 10; i++) {
        rowX.push(random(0, 720))
        rowY.push(random(0, 520))
      }
      
      positionx.push(rowX)
      positiony.push(rowY)
    }
  }
}
