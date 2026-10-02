let colourPalette = [
  ['green', 'red', 'blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'red'], 
  ['green', 'red', 'blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'red'], 
  ['green', 'red', 'blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'red'], 
  ['green', 'red', 'blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'red'], 
  ['green', 'red', 'blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'red'], 
  ['green', 'red', 'blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'red']
];

let positionx = [];
let positiony = [];
let randomx;
let randomy;
let randomRotate;

function setup() {
  createCanvas(800, 600);
  
  randomx = random(30, 100);
  randomy = random(100, 120);
  randomRotate = random(0, 0.01); // Iets grotere startwaarde voor zichtbaarheid
}

function draw() {
  background(220);
  
  // 1. RECHTHOEKEN TEKENEN (Alleen als ENTER is ingedrukt en arrays gevuld zijn)
  if (positionx.length > 0 && positiony.length > 0) {
    for (let i = 0; i < 10; i++) {
      for (let t = 0; t < 6; t++) {
        fill(colourPalette[t][i]);
        // OPLOSSING: Gebruik [t][i] om de juiste coördinaat uit de 2D-array te halen
        rect(positionx[t][i], positiony[t][i], 80, 80);
      }
    }
  }
  
  // 2. CIRKELS TEKENEN
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 6; j++) {
      push(); // Sla de huidige staat van het canvas op
      
      // Bereken de positie van de cirkel
      let cx = randomx * i + 50; 
      let cy = randomy + 40 * j;
      
      translate(cx, cy); // Verplaats het nulpunt naar het midden van de cirkel
      rotate(randomRotate); // Roteer om het nieuwe nulpunt
      
      fill(colourPalette[j][i]);
      circle(0, 0, 60); // Teken de cirkel op het nieuwe (geroteerde) nulpunt
      
      pop(); // Herstel de staat van het canvas voor de volgende vorm
    }
    randomRotate += 0.0001; // Subtiele rotatie per frame
  }
}

function keyPressed() {
  // BACKSPACE: Verander kleuren naar willekeurige RGB-kleuren
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

  // ENTER: Genereer willekeurige posities voor de rechthoeken
  if (keyCode === ENTER) { 
    console.log("Enter was pressed!");
    
    positionx = [];
    positiony = [];

    for (let t = 0; t < 6; t++) {
      let rowX = [];
      let rowY = [];
      
      for (let i = 0; i < 10; i++) {
        rowX.push(random(0, 720)); // Aangepast zodat ze binnen het canvas vallen
        rowY.push(random(0, 520));     
      }
      
      positionx.push(rowX);
      positiony.push(rowY);
    }
  }
}
