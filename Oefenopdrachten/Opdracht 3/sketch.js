let colours = ['red', 'salmon', 'pink', 'gray'];
let colour = ['green', 'blue', 'white', 'purple'];
let col = ['purple', 'white', 'salmon', 'green', 'green', 'blue', 'white', 'purple', 'red', 'blue'];
let time = 30; 

let isRunning = false; 
let angle = 0; 

// 1. Create arrays to store the fixed coordinates
let positions = []; 

function setup() {
  createCanvas(400, 400);
  frameRate(time);
  rectMode(CENTER); 
}

function draw() {
  background(220);
 
  if (isRunning) {
    angle += 0.05; 

    // 3. Loop through the pre-saved random coordinates instead of generating new ones
    for (let i = 0; i < positions.length; i++) {
      let pos = positions[i]; // Get the locked coordinates for this iteration
      
      // SPINNING RECTS (Set 1)
      for (let j = 0; j < 4; j++) {
        push(); 
        translate(pos.x * j, pos.y * j); 
        rotate(angle); 
        fill(colours[j]);
        rect(0, 0, 20, 20); 
        pop(); 
      }
      
      // SPINNING RECTS (Set 2)
      for (let t = 0; t < 4; t++) {
        push();
        translate(pos.x * t - 10, pos.y * t - 10);
        rotate(angle * 1.5); 
        fill(colours[t]);
        rect(0, 0, 10, 10);
        pop();
      }

      // SPINNING RECTS (Set 3)
      for (let j = 0; j < 4; j++) {
        push();
        translate(pos.X + j, pos.Y + 390 / (j * 2));
        rotate(angle);
        fill(colour[j]);
        rect(0, 0, 10, 10);
        pop();
      }
      
      // SPINNING RECTS (Set 4)
      for (let t = 0; t < 4; t++) {
        push();
        translate(pos.X + t + 50, pos.Y + 300 / (t * 2) + 5);
        rotate(-angle); 
        fill(colour[t]);
        rect(0, 0, 50, 50);
        pop();
      }

      // CIRCLES
      for (let j = 0; j < 10; j++) {
        fill(col[j]);
        circle(pos.l + (j), pos.p + j * 10, 60);
      }
      
      for (let t = 0; t < 10; t++) {
        fill(col[t]);
        circle(pos.l / t + (50 * t * 0.2), pos.p - (t * 4) + 50, 20);
      }
    }
  }
}

function keyPressed() {
  if (keyCode === 13) {
    isRunning = true;
    
    // 2. Generate the 20 random positions ONCE when Enter is hit
    positions = []; // Clear old positions if pressing Enter again
    for (let i = 0; i < 20; i++) {
      positions.push({
        x: random(10, 120),
        y: random(10, 120),
        X: random(10, 385),
        Y: random(10, 100),
        l: random(10, 385),
        p: random(10, 385)
      });
    }
  }
}