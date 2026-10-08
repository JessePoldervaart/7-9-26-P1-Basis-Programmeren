let score = 0
let a = 'white'
let b = 'black'
let c = 'black'
let d = 'white'
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background('purple');
  for(i=0;i<8;i++){
  for(j=0; j<6; j++){
    fill(0+i*20+j*20)
    rect(0+i*100,0+j*100,100,100)
  }
}
  if (score == 0){
  homepage()
  }
  if(score>=1){
    question1()
  }

}




function homepage(){
for(i=0;i<8;i++){
  for(j=0; j<6; j++){
    fill(0+i*20+j*20)
    rect(0+i*100,0+j*100,100,100)
  }
}
  fill('black')
  rect(290, 195, 215, 60, 10)
  fill('white')
  textSize(50)
  text('start quiz',297, 240)

}

function question1(){
  for(i=0;i<8;i++){
  for(j=0; j<6; j++){
    fill(0+i*20+j*20)
    rect(0+i*100,0+j*100,100,100)
  }}
  line(400, 300, 400, 600)
line(0, 300, 800, 300)
line(0,450,800,450)
fill(a)
rect(0, 300, 400, 150)
fill(b)
rect(400, 300, 400, 150)
fill(c)
rect(0, 450, 400,150)
fill(d)
rect(400, 450, 400, 150)
textSize(20)
fill('black')
text('a', 50, 380)
text('d', 450, 540)
fill('white')
text('b', 450, 380)
text('c', 50, 540)
}
function nextquestion(){
  score++
  console.log(score)
}

function mouseClicked(){

  if(mouseClicked){
    if(mouseX > 290 && mouseX < 505 && mouseY > 195 && mouseY < 255 && score ==0)
    nextquestion()
}

//question1
  //a
 if(mouseClicked){
    if(mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 450 && score ==1)
    nextquestion()
}
  //b
 if(mouseClicked){
    if(mouseX > 400 && mouseX < 800 && mouseY > 300 && mouseY < 450 && score ==1)
    nextquestion()
}
  //c
 if(mouseClicked){
    if(mouseX > 0 && mouseX < 400 && mouseY > 450 && mouseY < 600 && score ==1)
   nextquestion()
}
  //d
 if(mouseClicked){
    if(mouseX > 400 && mouseX < 800 && mouseY > 450 && mouseY < 600 && score ==1)
   nextquestion()
}

//question2
  //a
 if(mouseClicked){
    if(mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 450 && score ==2)
   nextquestion()
}
  //b
 if(mouseClicked){
    if(mouseX > 400 && mouseX < 800 && mouseY > 300 && mouseY < 450 && score ==2)
   nextquestion()
}
  //c
 if(mouseClicked){
    if(mouseX > 0 && mouseX < 400 && mouseY > 450 && mouseY < 600 && score ==2)
   nextquestion()
}
  //d
 if(mouseClicked){
    if(mouseX > 400 && mouseX < 800 && mouseY > 450 && mouseY < 600 && score ==2)
    nextquestion()
}
}

