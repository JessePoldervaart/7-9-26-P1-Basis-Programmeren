let img1;
let img2;
let happy = 100
let energy = 100
let hunger = 100
let health = 100
let drunk = 0
let thirst = 100
let eatscore = 0
function preload() {

  img1 = loadImage('./hoge heer.png');
  img2 = loadImage('./kamer.png');
}

function setup() {
  createCanvas(1000, 600);
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
    drunk -= 0.01666666666
  }
    if(thirst >= 0){
    thirst -= 0.03333333333
  }
  if(hunger > 100){
  hunger = 100
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
 rect(300, 10, 100, 70)


food();

}

function food(){
  fill('#c79e78')
  rect(300, 110, 400, 220, 20)
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
  textSize(20)
  fill('black')
  text('fills 30 hunger', 370, 160)
  text('fills 20 hunger', 370, 220)
  text('fills 10 hunger', 370, 290)
  text('eat', 655, 160)
  text('eat', 655, 220)
  text('eat', 655, 290)
  
}

function mouseClicked(){
  if(mouseX >= 650 && mouseX <= 690 && mouseY >= 139 && mouseY <= 169){
    hunger += 30
  }
  if(mouseX >= 650 && mouseX <= 690 && mouseY >= 199 && mouseY <= 239){
    hunger += 20
  }
  if(mouseX >= 650 && mouseX <= 690 && mouseY >= 269 && mouseY <= 309){
    hunger += 10
  }

}
