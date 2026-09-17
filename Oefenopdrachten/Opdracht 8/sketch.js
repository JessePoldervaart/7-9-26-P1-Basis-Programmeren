
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200)

let a = random (0, 100)
let b = random (0, 100)
  if(a > b) {
    text('a is groter dan b', 100, 100)
  }
  if(a == b) {
    text('a is gelijk aan b', 100, 100)
  }
  if(a < b) {
    text('a is kleiner dan b', 100, 100)
  }

  if (keyIsDown(LEFT_ARROW) === true) {
    frameRate(5)
  }
  
}

