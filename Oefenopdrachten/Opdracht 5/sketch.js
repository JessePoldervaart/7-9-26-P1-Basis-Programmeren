
function setup() {
  createCanvas(900, 600);
}

function draw() {
  strokeWeight(1)
  background(220);
  fill('black')
  text('1', 20, 15)
  text('2', 20, 105)
  text('3', 80, 105)
  text('4', 80, 205)
  text('5', 540, 20)
  text('6', 350, 105)
  text('7', 710, 105)
//1
  for (let i = 0; i < 10; i++) {
   fill('white')
    if(i==6){
      fill('blue'); 
    }
    rect(20+(i*50), 20, 50); 
  }
//2
   for (let i = 0; i < 5; i++) {
    fill(0+(61*i))
    rect(20, 110+(50*i), 50); 
  }
//3
   for (let i = 0; i < 2.5; i+=0.5) {
    fill(0,0+(i*150),0)
    if(i>=1){
     i+=0.25
    }
    if(i>=2){
      i+=0.25
    }
    rect(80+(50*i), 110, 25+(25*i), 50); 
  }
//4
   for (let i = 0; i < 2.5; i+=0.5) {
    fill(0,0,255-(i*150))
    if(i>=1){
     i+=0.25
    }
    if(i>=2){
      i+=0.25
    }
    rect(80+(50*i), 210, 25+(25*i), 50+(i*25)); 
  }
//5
for (let i = 0; i < 5; i++) {
   fill('white')
   strokeWeight(1+3*i)
    circle(560+(i*50), 50, 30); 
  }
//6
for (let i = 0; i < 10; i++) {
  strokeWeight(0)
  if(i==0||i==2||i==4||i==6||i==8||i==10){
    fill('red')
    circle(500, 300, 390-(i*40)); 
   }
  if(i==1||i==3||i==5||i==7||i==9){
    fill('white')
    circle(500, 300, 390-(i*40)); 
  }
  }
//7
let o = 0
let p = 0
  for (let i = 0; i < 11; i++) {
   if(i>0){
    o++}
    fill('white')
   if(i==0||i==2||i==4||i==6||i==8||i==10){
    fill('gray')
   }
   strokeWeight(1)
    rect(710,110+(10*i),10+(10*o),10); 
  }
    for (let i = 0; i < 10; i++) {
   if(1>0){
    p--}
   fill('white')
      if(i==1||i==3||i==5||i==7||i==9||i==11){
    fill('gray')
   }
   strokeWeight(1)
    rect(710,220+(10*i),110+(10*p),10); 
  }
}
