let img1;
let img2;
let happy = 100
let energy = 100
let hunger = 100
let health = 100
let drunk = 0
let thirst = 100
let eatscore = 0
let food = 0
let drink = 0
function preload() {

  img1 = loadImage('./hoge heer.png');
  img2 = loadImage('./kamer.png');
}

function setup() {
  createCanvas(1000, 600);
  console.log(food);
  
} 
function draw() {
  if(happy >= 0){
    happy -= 0.01666666666
  }
    if(energy >= 0){
    energy -= 0.01666666666
  }
    if(hunger >= 0){
    hunger -=  0.03333333333
  }

    if(drunk >= 0){
    drunk -= 0.00555555555
  }
    if(thirst >= 0){
    thirst -= 0.03333333333
  }
  if(health <= 100){
    health+=0.00555555555
  }
  if(hunger > 100){
  hunger = 100
  }
  if(happy > 100){
  happy = 100
  }
   if(thirst > 100){
  thirst = 100
  }
  if(drunk > 100){
    drunk = 100
  }
  if(health > 100){
    health = 100
  }
  if(energy > 100){
    energy = 100
  }
    if(hunger < 0){
  hunger = 0
  }
  if(happy < 0){
  happy = 0
  }
   if(thirst < 0){
  thirst = 0
  }
  if(drunk < 0){
    drunk = 0
  }
  if(health < 0){
    health = 0
  }
  if(energy < 0){
    energy = 0
  }

image(img2, 0, 0, 1000, 600); 
image(img1, 500, 300, 150, 280); 

fill('#A87545') 
rect(0, -10, 1000, 100, 10)
textSize(15)
text('🌟', 10, 20)
text('⚡', 10, 50)
text('🍖', 10, 80)
text('🫀', 140, 20)
text('🍺', 140, 50)
text('💧', 140, 80)

fill('green')
rect(30, 10, happy, 10)
fill('orange')
rect(30, 40, energy, 10)
fill('red')
rect(30, 70, hunger, 10)
fill('pink')
rect(160, 10, health, 10)
fill('yellow')
rect(160, 40, drunk, 10)
fill('skyblue')
rect(160, 70, thirst, 10)

 fill('#c79e78')
 rect(300, 10, 105, 70, 10)
 rect(410, 10, 145, 70, 10)
 fill('black')
 textSize(50)
 text('food', 305, 60)
text('drinks', 415, 60)
if(food==1){
  foods()
}
if(drink==1){
  drinks()
}
}

function foods(){
  fill('#c79e78')
  rect(300, 110, 400, 270, 20)
  textSize(50)
  text('🍖', 300, 170)
  text('🐟', 300, 230)
  text('🍎', 300, 300)
  fill('lightgray')
  rect(365, 139, 135, 30, 10)
  rect(365, 199, 135, 30, 10)
  rect(365, 269, 135, 30, 10)

  rect(650, 139, 40, 30, 10)
  rect(650, 199, 40, 30, 10)
  rect(650, 269, 40, 30, 10)
  rect(480, 330, 40, 30, 10)
  textSize(20)
  fill('black')
  text('fills 30 hunger', 370, 160)
  text('fills 20 hunger', 370, 220)
  text('fills 10 hunger', 370, 290)
  text('eat', 655, 160)
  text('eat', 655, 220)
  text('eat', 655, 290)
  text('exit', 485, 352)
}

function drinks(){
  fill('#c79e78')
  rect(300, 110, 400, 270, 20)
  textSize(50)
  text('🍺', 300, 170)
  text('💧', 300, 230)
  
  fill('lightgray')
  rect(365, 139, 115, 30, 10)
  rect(365, 199, 115, 30, 10)


  rect(635, 139, 55, 30, 10)
  rect(635, 199, 55, 30, 10)
  
  rect(480, 330, 40, 30, 10)
  textSize(20)
  fill('black')
  text('fills 5 thirst', 370, 160)
  text('fills 15 thirst', 370, 220)
  
  text('drink', 640, 160)
  text('drink', 640, 220)
 
  text('exit', 485, 352)
}


function mouseClicked(){

  //eating
  if(food == 1){
    if(mouseX >= 480 && mouseX <= 520 && mouseY >= 330 && mouseY <= 360){
   food = 0
  }
  if(mouseX >= 650 && mouseX <= 690 && mouseY >= 139 && mouseY <= 169){
    hunger += 30
    happy += 5
    food = 0
  }
  if(mouseX >= 650 && mouseX <= 690 && mouseY >= 199 && mouseY <= 239){
    hunger += 20
    food = 0
  }
  if(mouseX >= 650 && mouseX <= 690 && mouseY >= 269 && mouseY <= 309){
    hunger += 10
    happy -= 5
    health += 5
    food = 0
  }
}
if(food == 0){
  if(mouseX >= 300 && mouseX <= 405 && mouseY >= 10 && mouseY <= 80){
   food = 1
drink = 0
  }
}


//drinking
  if(drink == 1){
    if(mouseX >= 480 && mouseX <= 520 && mouseY >= 330 && mouseY <= 360){
   drink = 0
  }
  if(mouseX >= 650 && mouseX <= 690 && mouseY >= 139 && mouseY <= 169){
    thirst += 5
    happy += 20
    drunk += 20
    drink = 0
  }
  if(mouseX >= 650 && mouseX <= 690 && mouseY >= 199 && mouseY <= 239){
    thirst += 15
    health -= 20
    drunk -= 10
    drink = 0
  }

  
} rect(410, 10, 145, 70, 10)
if(drink == 0){
  if(mouseX >= 410 && mouseX <= 555 && mouseY >= 10 && mouseY <= 80){
   drink = 1
   food = 0
  }
}
}
