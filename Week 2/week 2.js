let sun = 900
let cloud = 1000
let cloud2 = 1600
let car = -150
let wiel1 = -130
let wiel2 = -30
let car2 = -150
let wiel3 = -130
let wiel4 = -30
let value = 255
let red = 0
let yellow = 'black'
let green = 155
let score = 1
let ship = -100
let ship2 = 100
let ship3 = 95

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background('lightblue');
  noStroke();
  //sun
  fill(255, 255, 0, 50)
  circle(sun, 60, 100) 
  fill(250, 250, 51)
  circle(sun, 60, 80)
 
  if (sun < 901) {
    sun -= 0.5;
  }
  if (sun < -50) {
    sun = 900;
  }

 
  //spaceship
  fill('black')
  ellipse(ship, ship2, 50, 10)
  ellipse(ship, ship3, 25, 5)
  fill(0, 255, 0)
  ellipse(ship, ship2, 50, 1)

  if (ship < 901) {
    ship += 2;
  }
  if (ship > 901) {
    ship = -100
}


  //scenery
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
  fill('lightgray');
  triangle(400, 400, 200, 100, 0, 400);
  triangle(600, 400, 400, 50, 200, 400);
  fill('darkgray')
  triangle(250, 400, 400, 50, 200, 400)
  triangle(50, 400, 200, 100, 0, 400)

  //trees
  fill('brown')
  rect(200, 300, 20, 100)
  fill('green')
  ellipse(210, 290, 70, 100)
  fill('brown')
  rect(550, 300, 20, 100)
  fill('green')
  ellipse(560, 290, 70, 100)
  
 
  //clouds
  fill('white')
  ellipse(cloud, 90, 150, 40)
  ellipse(cloud, 100, 200, 30)
  fill(0, 0, 0, 50)
  ellipse(cloud, 420, 300, 40)
   if (cloud < 1001) {
    cloud -= 1;
  }
  if (cloud < -100) {
    cloud = 1000;
  }

   fill('white')
  ellipse(cloud2, 130, 150, 40)
  ellipse(cloud2, 140, 200, 30)
  fill(0, 0, 0, 50)
  ellipse(cloud2, 450, 300, 40)

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
  fill('grey')
  circle(wiel1, 460, 20)
  circle(wiel2, 460, 20)

if (car > 900) {
  car = -150
}

if (wiel1 > 910) {
  wiel1 = -140
}

if (wiel2 > 1010) {
  wiel2 = -40
}
if (green == 155) {
  car += 5;
  wiel1 += 5;
  wiel2 += 5;
 }
 if (yellow == 'yellow') {
  car += 2;
  wiel1 += 2;
  wiel2 += 2;
 }
 if (red == 255) {
  car += 0;
  wiel1 += 0;
  wiel2 += 0;
 }


//stoplicht
fill('darkgray')
rect(690, 370, 20, 30)
rect(680, 270, 40, 100)
fill(red, 0, 0)
circle(700, 290, 20)
fill(yellow)
circle(700, 320, 20)
fill(0, green, 0)
circle(700, 350, 20)


  //tree in front of car
  fill('brown')
  rect(450, 500, 20, 100)
  fill('green')
  ellipse(460, 490, 70, 100)

 
}


function keyPressed() {
  if (keyCode === 13 && score <= 2) {
    red = 255;
    green = 0;
    yellow = 'black';
    score += 1;
    
  }
  if (keyCode === 13 && score == 3 && yellow == 'black') {
    green = 0;
    yellow = 'yellow';
    red = 0;
    score += 2;
  }
  if (keyCode ===13 && score <=6 && yellow == 'yellow') {
    score += 1;
  }
  if (keyCode === 13 && score == 7 && red == 0) {
    green = 155;
    yellow = 'black';
    red = 0;
    score += 1;
}
if (keyCode === 13 && score >= 8 && green == 155){
  score += 1;
}
if (score >= 8) {
  score = 1;
}


}
