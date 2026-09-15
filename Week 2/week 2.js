let sun = 900
let cloud = 1000
let cloud2 = 1600
let car = -150
let wiel1 = -130
let wiel2 = -30
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background('lightblue');
  noStroke();
  fill('gray');
  rect(0, 400, 800, 200)
  fill('white');
  rect(0, 490, 100, 20);
  rect(120, 490, 100, 20);
  rect(240, 490, 100, 20);
  rect(360, 490, 100, 20);
  rect(480, 490, 100, 20);
  rect(600, 490, 100, 20);
  rect(720, 490, 100, 20);
  fill('darkgray');
  triangle(400, 400, 200, 100, 0, 400);
  fill('lightgray');
  triangle(600, 400, 400, 50, 200, 400);

  //trees
  fill('brown')
  rect(200, 300, 20, 100)
  fill('green')
  ellipse(210, 290, 70, 100)
  fill('brown')
  rect(550, 300, 20, 100)
  fill('green')
  ellipse(560, 290, 70, 100)
  
  //sun
  fill('yellow')
  circle(sun, 60, 100) 
  if (sun < 901) {
    sun -= 0.5;
  }
  if (sun < -50) {
    sun = 900;
  }

  //clouds
  fill('white')
  ellipse(cloud, 90, 150, 40)
  ellipse(cloud, 100, 200, 30)
   if (cloud < 1001) {
    cloud -= 1;
  }
  if (cloud < -100) {
    cloud = 1000;
  }

   fill('white')
  ellipse(cloud2, 130, 150, 40)
  ellipse(cloud2, 140, 200, 30)
   if (cloud2 < 1601) {
    cloud2 -= 1.3;
  }
  if (cloud2 < -100) {
    cloud2 = 1600;
  }

  //car
  fill('red')
  rect(car, 430, 150, 30)
  fill('red')
  rect(car, 410, 100, 40)
fill('black')
  circle(wiel1, 460, 30)
  circle(wiel2, 460, 30)
if (car > -151) {
  car += 5
}
if (car > 900) {
  car = -150
}
if (wiel1 > -141) {
  wiel1 += 5
}
if (wiel1 > 910) {
  wiel1 = -140
}
if (wiel2 > -41) {
  wiel2 += 5
}
if (wiel2 > 1010) {
  wiel2 = -40
}
}
