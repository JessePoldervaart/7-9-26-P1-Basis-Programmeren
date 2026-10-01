let colours = ['purple', 'white', 'purple', 'white']
let colour = ['white', 'purple', 'white', 'purple']
let col = ['purple', 'white', 'purple', 'white', 'purple', 'white', 'purple', 'white', 'white', 'purple']
let time = 0
let hoek = 0

function setup() {
  
 
  createCanvas(800, 600);
rectMode(CENTER)
 angleMode(DEGREES);
  
}

 function draw() {
  background(220);
  

   


for(i=0;i<60;i++){
   let x = random(10, 720);
      let y = random(10, 720);
     let X = random(10, 785);
      let Y = random(10, 500);
    let l = random(10, 785);
      let p = random(10, 585);


  for(let i = 0; i < 4; i++){
    frameRate(time)
    fill(colours[i])
    rect(x*i, y*i, 20, 20)
  }
  
  for(let t = 0; t < 4; t++){
    frameRate(time)
    fill(colour[t])
    rect(x*t-10, y*t-10, 10, 10)
  }

    for(let i = 0; i < 4; i++){
      frameRate(time)
    fill(colours[i])
    rect(X+i, Y+390/(i*2), 10, 10)
  }
  
  for(let t = 0; t < 4; t++){
    frameRate(time)
    fill(colour[t])
    rect(X+t+50, Y+300/(t*2)+5, 50, 50)
  }

      for(let i = 0; i < 10; i++){
        frameRate(time)
    fill(col[i])
   circle(l+(i), p+i*10, 60)
  }
  
  for(let t = 0; t < 10; t++){
    frameRate(time)
    fill(col[t])
    circle(l/t+(50*t*0.2), p-(t*4)+50,20)
  }
  }

 

  
 }