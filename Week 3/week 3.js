let vakje1 = 'gray'
let vakje2 = 'gray'
let vakje3 = 'gray'
let vakje4 = 'gray'
let vakje5 = 'gray'
let vakje6 = 'gray'
let vakje7 = 'gray'
let vakje8 = 'gray'
let vakje9 = 'gray'
let playerturn = 0
function setup() {
  createCanvas(380, 380);
}
//code for the base
function draw() {
  noStroke()
  background(200);
  fill('red')
  rect(0, 0, 190, 380)
  fill('blue')
  rect(190, 0, 190, 380)
  fill('black')
  rect(50, 50, 280, 280, 20)
  fill(vakje1)
  rect(60, 60, 80, 80, 10)
   fill(vakje2)
  rect(150, 60, 80, 80, 10)
   fill(vakje3)
  rect(240, 60, 80, 80, 10)
   fill(vakje4)
  rect(60, 150, 80, 80, 10)
   fill(vakje5)
  rect(150, 150, 80, 80, 10)
   fill(vakje6)
  rect(240, 150, 80, 80, 10)
   fill(vakje7)
  rect(60, 240, 80, 80, 10)
   fill(vakje8)
  rect(150, 240, 80, 80, 10)
   fill(vakje9)
  rect(240, 240, 80, 80, 10)

  //winconditions

     //blue
  if (vakje1 == 'blue' && vakje2 == 'blue' && vakje3 == 'blue') {
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
  }
  if (vakje4 == 'blue' && vakje5 == 'blue' && vakje6 == 'blue') {
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
  }
  if (vakje7 == 'blue' && vakje8 == 'blue' && vakje9 == 'blue') {
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
  }
  if (vakje1 == 'blue' && vakje4 == 'blue' && vakje7 == 'blue') {
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
  }
  if (vakje2 == 'blue' && vakje5 == 'blue' && vakje8 == 'blue') {
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
  }
  if (vakje3 == 'blue' && vakje6 == 'blue' && vakje9 == 'blue') {
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
  }
  if (vakje1 == 'blue' && vakje5 == 'blue' && vakje9 == 'blue') {
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
  }
  if (vakje3 == 'blue' && vakje5 == 'blue' && vakje7 == 'blue') {
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
  }

     //red
    if (vakje1 == 'red' && vakje2 == 'red' && vakje3 == 'red') {
    fill(255)
    textSize(20)
    text('red wins', 149, 40)
  }
  if (vakje4 == 'red' && vakje5 == 'red' && vakje6 == 'red') {
    fill(255)
    textSize(20)
    text('red wins', 149, 40)
  }
  if (vakje7 == 'red' && vakje8 == 'red' && vakje9 == 'red') {
    fill(255)
    textSize(20)
    text('red wins', 149, 40)
  }
  if (vakje1 == 'red' && vakje4 == 'red' && vakje7 == 'red') {
    fill(255)
    textSize(20)
    text('red wins', 149, 40)
  }
  if (vakje2 == 'red' && vakje5 == 'red' && vakje8 == 'red') {
    fill(255)
    textSize(20)
    text('red wins', 149, 40)
  }
  if (vakje3 == 'red' && vakje6 == 'red' && vakje9 == 'red') {
    fill(255)
    textSize(20)
    text('red wins', 149, 40)
  }
  if (vakje1 == 'red' && vakje5 == 'red' && vakje9 == 'red') {
    fill(255)
    textSize(20)
    text('red wins', 149, 40)
  }
  if (vakje3 == 'red' && vakje5 == 'red' && vakje7 == 'red') {
    fill(255)
    textSize(20)
    text('red wins', 149, 40)
  }
}

function mouseClicked() {
//turnchanging
    if (mouseClicked) {
    playerturn += 1
  }
//code player red
 if (playerturn == 1 || playerturn == 3 || playerturn == 5 || playerturn == 7 || playerturn == 9) {
  if (mouseX >= 60 && mouseX <= 140 && mouseY >= 60 && mouseY <= 140) {
    vakje1 = 'red'
  }
  if (mouseX >= 150 && mouseX <= 230 && mouseY >= 60 && mouseY <= 140) {
    vakje2 = 'red'
  }
  if (mouseX >= 240 && mouseX <= 320 && mouseY >= 60 && mouseY <= 140) {
    vakje3 = 'red'
  }
  if (mouseX >= 60 && mouseX <= 140 && mouseY >= 150 && mouseY <= 230) {
    vakje4 = 'red'
  }
  if (mouseX >= 150 && mouseX <= 230 && mouseY >= 150 && mouseY <= 230) {
    vakje5 = 'red'
  }
  if (mouseX >= 240 && mouseX <= 320 && mouseY >= 150 && mouseY <= 230) {
    vakje6 = 'red'
  }
    if (mouseX >= 60 && mouseX <= 140 && mouseY >= 240 && mouseY <= 320) {
    vakje7 = 'red'
  }
  if (mouseX >= 150 && mouseX <= 230 && mouseY >= 240 && mouseY <= 320) {
    vakje8 = 'red'
  }
  if (mouseX >= 240 && mouseX <= 320 && mouseY >= 240 && mouseY <= 320) {
    vakje9 = 'red'
  }
 }

 //code player blue
 if (playerturn == 2 || playerturn == 4 || playerturn == 6 || playerturn == 8) {
  if (mouseX >= 60 && mouseX <= 140 && mouseY >= 60 && mouseY <= 140) {
    vakje1 = 'blue'
  }
  if (mouseX >= 150 && mouseX <= 230 && mouseY >= 60 && mouseY <= 140) {
    vakje2 = 'blue'
  }
  if (mouseX >= 240 && mouseX <= 320 && mouseY >= 60 && mouseY <= 140) {
    vakje3 = 'blue'
  }
  if (mouseX >= 60 && mouseX <= 140 && mouseY >= 150 && mouseY <= 230) {
    vakje4 = 'blue'
  }
  if (mouseX >= 150 && mouseX <= 230 && mouseY >= 150 && mouseY <= 230) {
    vakje5 = 'blue'
  }
  if (mouseX >= 240 && mouseX <= 320 && mouseY >= 150 && mouseY <= 230) {
    vakje6 = 'blue'
  }
    if (mouseX >= 60 && mouseX <= 140 && mouseY >= 240 && mouseY <= 320) {
    vakje7 = 'blue'
  }
  if (mouseX >= 150 && mouseX <= 230 && mouseY >= 240 && mouseY <= 320) {
    vakje8 = 'blue'
  }
  if (mouseX >= 240 && mouseX <= 320 && mouseY >= 240 && mouseY <= 320) {
    vakje9 = 'blue'
  }
}

}