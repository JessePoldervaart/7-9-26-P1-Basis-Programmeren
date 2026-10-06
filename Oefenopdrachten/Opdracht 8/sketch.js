
function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(200)
  house(0,0,0)
  house(100,30,0)
  house(-60,-10,0)
  house(40,70,0)
  straal(100)
  rectangle(50, 50)
  lijn(20, 20, 70, 20)
  textline(10,10,1,0)
}

function house(x, y, size){
  fill('brown')
rect(x+100,y+100,size+50,size+50)
fill('red')
triangle(x+150,y+100,x+100,y+100,x+125,y+75)
fill('gray')
rect(x+130,y+130,10,20)
fill('skyblue')
rect(x+110,y+130,10,10)
}
function straal (straal){
circle(300, 200, straal)
}
function rectangle(width, height){
  rect (400, 200, width, height)
}
function lijn(xstart,ystart,xend,yend){
  line(xstart,ystart,xend,yend)
}
function textline(x,y,size,colour){
  strokeWeight(size)
  fill(colour)
  text('test', x, y)
}