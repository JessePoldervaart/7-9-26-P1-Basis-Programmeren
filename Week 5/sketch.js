

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background('red');
  homepage()
}




function homepage(){
for(i=0;i<8;i++){
  for(j=0; j<6; j++){
    fill(0+i*20+j*20)
    rect(0+i*100,0+j*100,100,100)
  }
}
  fill('black')
  rect(290, 395, 215, 60, 10)
  fill('white')
  textSize(50)
  text('start quiz',297, 440)

}

function question1(){
  line(400, 300, 400, 600)
line(0, 300, 800, 300)
line(0,450,800,450)
fill('orange')
rect(0, 300, 400, 150)
fill('red')
rect(400, 300, 400, 150)
fill('green')
rect(0, 450, 400,150)
fill('blue')
rect(400, 450, 400, 150)
textSize(20)
fill('black')
text('a', 50, 380)
text('b', 450, 380)
text('c', 50, 540)
text('d', 450, 540)
}