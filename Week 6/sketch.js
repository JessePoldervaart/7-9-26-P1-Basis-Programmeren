let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let happy = 100
let energy = 100
let hunger = 100
let health = 100
let drunk = 0
let thirst = 100
let eatscore = 0
let food = 0
let drink = 0
let sleeps = 0
function preload() {
//images
  img1 = loadImage('./hoge heer.png');
  img2 = loadImage('./kamer.png');
  img3 = loadImage('./hoge-heer-energy-low2.png');
  img4 =  loadImage('./hoge-heer-health-0-2.png')
  img5 =  loadImage('./hoge-heer-hunger-low.png')
  img6 =  loadImage('./hoge-heer-hunger_energy-low.png')
  img7 =  loadImage('./hoge-heer-sick-and-hungry_1.png')
  img8 =  loadImage('./hoge-heer-sick.png')
}

function setup() {
  createCanvas(1000, 600);
  
  
} 
function draw() {
  //calculations for the bars
  if(thirst == 0 && hunger == 0){
    health -= 0.03333333333
  } else if(thirst == 0){
    health -= 0.01666666666
  } else if(hunger == 0){
    health -= 0.01666666666
  }
  if(happy >= 0){
    happy -= 0.01666666666
  }
    if(energy >= 0){
    energy -= 0.03333333333
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

//calculation for the figure
image(img2, 0, 0, 1000, 600); 
if(health == 0){
  image(img4, 500, 300, 150, 280)
}else if(health <= 50 && hunger <=30){
  image(img7, 500, 300, 150, 280) 
}else if(health <= 50){
   image(img8, 500, 300, 150, 280)
}else if(hunger <= 30 && energy <= 30){
  image(img6, 500, 300, 150, 280)
}else if(hunger <= 30){
  image(img5, 500, 300, 150, 280)
}else if(energy <= 30){
  image(img3, 500, 300, 150, 280)
}else{
image(img1, 500, 300, 150, 280); 
}

//bar for options
fill('#A87545') 
rect(0, -10, 1000, 100, 10)
textSize(15)
text('🌟', 10, 20)
text('⚡', 10, 50)
text('🍖', 10, 80)
text('🫀', 140, 20)
text('🍺', 140, 50)
text('💧', 140, 80)


fill('lightgray')
rect(30, 10, 100, 10)
rect(30, 40, 100, 10)
rect(30, 70, 100, 10)
rect(160, 10, 100, 10)
rect(160, 40, 100, 10)
rect(160, 70, 100, 10)


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
 rect(560, 10, 130, 70, 10)
 fill('black')
 textSize(50)
 text('food', 305, 60)
text('drinks', 415, 60)
text('sleep', 565, 60)

//optionselects and deathscreen
if(food==1){
  foods()
}
if(drink==1){
  drinks()
}
if(sleeps==1){
  sleep()
}
if(health == 0){
dead()
happy = 0
energy = 0
hunger = 0
drunk = 0
thirst = 0
}
}

//foods options
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
  text('fills 15 hunger', 370, 220)
  text('fills 10 hunger', 370, 290)
  text('eat', 655, 160)
  text('eat', 655, 220)
  text('eat', 655, 290)
  text('exit', 485, 352)
}

//drinks options
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
  text('fills 10 thirst', 370, 160)
  text('fills 30 thirst', 370, 220)
  
  text('drink', 640, 160)
  text('drink', 640, 220)
 
  text('exit', 485, 352)
}

//sleeping options
function sleep(){
  fill('#c79e78')
  rect(300, 110, 400, 270, 20)
  textSize(50)
  text('💤', 300, 170)
  text('🧘', 300, 230)
  
  fill('lightgray')
  rect(365, 139, 135, 30, 10)
  rect(365, 199, 135, 30, 10)


  rect(635, 139, 57, 30, 10)
  rect(645, 199, 47, 30, 10)
  
  rect(480, 330, 40, 30, 10)
  textSize(20)
  fill('black')
  text('fills 70 energy', 370, 160)
  text('fills 30 energy', 370, 220)
  
  text('sleep', 640, 160)
  text('rest', 653, 220)
 
  text('exit', 485, 352)
}

//deathscreen
function dead(){
  fill(0,0,0,160)
  rect(0,0,1000,600)
  fill('lightgray')
  rect(290, 100, 420, 140, 50)
  fill('black')
  textSize(100)
  text('He Died!', 300, 200)
  fill('lightgray')
  rect(450, 500, 100, 30, 10)
  fill('black')
  textSize(20)
  text('try again',461,522)
}

//button code
function mouseClicked(){
if(health > 0){
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
    hunger += 15
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
sleeps = 0
  }
}


//drinking
  if(drink == 1){
    if(mouseX >= 480 && mouseX <= 520 && mouseY >= 330 && mouseY <= 360){
   drink = 0
  }
  if(mouseX >= 650 && mouseX <= 690 && mouseY >= 139 && mouseY <= 169){
   thirst += 10
   happy += 20
   drunk += 20
   drink = 0
  }
  if(mouseX >= 650 && mouseX <= 690 && mouseY >= 199 && mouseY <= 239){
   thirst += 30
   health -= 20
   drunk -= 15
   drink = 0
  } 
} 
if(drink == 0){
  if(mouseX >= 410 && mouseX <= 555 && mouseY >= 10 && mouseY <= 80){
   drink = 1
   food = 0
   sleeps = 0
  }
 }

//sleeping
 rect(560, 10, 130, 70, 10)
 if(sleeps == 1){
   if(mouseX >= 480 && mouseX <= 520 && mouseY >= 330 && mouseY <= 360){
   sleeps = 0
  }
  if(energy <= 50){
  if(mouseX >= 650 && mouseX <= 690 && mouseY >= 139 && mouseY <= 169){
   energy += 70
   health += 20
   drunk -= 100
  }
 }
  if(mouseX >= 650 && mouseX <= 690 && mouseY >= 199 && mouseY <= 239){
   energy += 30
  } 
 }
if(sleeps == 0){
  if(mouseX >= 560 && mouseX <= 690 && mouseY >= 10 && mouseY <= 80){
   sleeps = 1
   drink = 0
   food = 0   
   }
  }
}else{
//deathchanges
  if(mouseX >= 450 && mouseX <= 550 && mouseY >= 500 && mouseY <= 530){
    health = 100
    energy = 100
    drunk = 0
    hunger = 100
    thirst = 100
    happy = 100
   }
  }
}
