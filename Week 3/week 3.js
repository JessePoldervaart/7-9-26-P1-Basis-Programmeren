let vakje1 = 'gray'
let vakje2 = 'gray'
let vakje3 = 'gray'
let vakje4 = 'gray'
let vakje5 = 'gray'
let vakje6 = 'gray'
let vakje7 = 'gray'
let vakje8 = 'gray'
let vakje9 = 'gray'
let playerturn = 1

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
  if (playerturn == 2 || playerturn == 4 || playerturn == 6 || playerturn == 8 || playerturn == 10) {
    fill(0, 0, 0, 100)
    rect(0, 0, 190, 380)
  }
  if (playerturn == 1 || playerturn == 3 || playerturn == 5 || playerturn == 7 || playerturn == 9) {
    fill(0, 0, 0, 100)
    rect(190, 0, 190, 380)
  }
  fill('black')
  text(playerturn, 20, 20)
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

  fill('black')
  rect(140, 340, 100, 30, 10)
  fill('white')
  textSize(20)
  text('restart', 160, 360)


  //winconditions

  //draw
  if (playerturn >= 10) {
    fill('black')
    rect(165, 22, 53, 25, 10)
    fill(255)
    textSize(20)
    text('draw', 170, 40)
  }

  //blue
  if (vakje1 == 'blue' && vakje2 == 'blue' && vakje3 == 'blue') {
    fill('black')
    rect(140, 22, 100, 25, 10)
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
  }
  if (vakje4 == 'blue' && vakje5 == 'blue' && vakje6 == 'blue') {
    fill('black')
    rect(140, 22, 100, 25, 10)
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
  }
  if (vakje7 == 'blue' && vakje8 == 'blue' && vakje9 == 'blue') {
    fill('black')
    rect(140, 22, 100, 25, 10)
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
  }
  if (vakje1 == 'blue' && vakje4 == 'blue' && vakje7 == 'blue') {
    fill('black')
    rect(140, 22, 100, 25, 10)
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
  }
  if (vakje2 == 'blue' && vakje5 == 'blue' && vakje8 == 'blue') {
    fill('black')
    rect(140, 22, 100, 25, 10)
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
  }
  if (vakje3 == 'blue' && vakje6 == 'blue' && vakje9 == 'blue') {
    fill('black')
    rect(140, 22, 100, 25, 10)
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
  }
  if (vakje1 == 'blue' && vakje5 == 'blue' && vakje9 == 'blue') {
    fill('black')
    rect(140, 22, 100, 25, 10)
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
  }
  if (vakje3 == 'blue' && vakje5 == 'blue' && vakje7 == 'blue') {
    fill('black')
    rect(140, 22, 100, 25, 10)
    fill(255)
    textSize(20)
    text('blue wins', 149, 40)
  }

  //red
  if (vakje1 == 'red' && vakje2 == 'red' && vakje3 == 'red') {
    fill('black')
    rect(140, 22, 100, 25, 10)
    fill(255)
    textSize(20)
    text('red wins', 153, 40)
  }
  if (vakje4 == 'red' && vakje5 == 'red' && vakje6 == 'red') {
    fill('black')
    rect(140, 22, 100, 25, 10)
    fill(255)
    textSize(20)
    text('red wins', 153, 40)
  }
  if (vakje7 == 'red' && vakje8 == 'red' && vakje9 == 'red') {
    fill('black')
    rect(140, 22, 100, 25, 10)
    fill(255)
    textSize(20)
    text('red wins', 153, 40)
  }
  if (vakje1 == 'red' && vakje4 == 'red' && vakje7 == 'red') {
    fill('black')
    rect(140, 22, 100, 25, 10)
    fill(255)
    textSize(20)
    text('red wins', 153, 40)
  }
  if (vakje2 == 'red' && vakje5 == 'red' && vakje8 == 'red') {
    fill('black')
    rect(140, 22, 100, 25, 10)
    fill(255)
    textSize(20)
    text('red wins', 153, 40)
  }
  if (vakje3 == 'red' && vakje6 == 'red' && vakje9 == 'red') {
    fill('black')
    rect(140, 22, 100, 25, 10)
    fill(255)
    textSize(20)
    text('red wins', 153, 40)
  }
  if (vakje1 == 'red' && vakje5 == 'red' && vakje9 == 'red') {
    fill('black')
    rect(140, 22, 100, 25, 10)
    fill(255)
    textSize(20)
    text('red wins', 153, 40)
  }
  if (vakje3 == 'red' && vakje5 == 'red' && vakje7 == 'red') {
    fill('black')
    rect(140, 22, 100, 25, 10)
    fill(255)
    textSize(20)
    text('red wins', 153, 40)
  }
}



//hoover function
function mouseMoved() {
  if (playerturn >= 0) {


    if (vakje1 == 'gray' || vakje1 == 170) {
      if (mouseX >= 60 && mouseX <= 140 && mouseY >= 60 && mouseY <= 140) {
        vakje1 = 170
      } else {
        vakje1 = 'gray'
      }
    }
    if (vakje2 == 'gray' || vakje2 == 170) {
      if (mouseX >= 150 && mouseX <= 230 && mouseY >= 60 && mouseY <= 140) {
        vakje2 = 170
      } else {
        vakje2 = 'gray'
      }
    }
    if (vakje3 == 'gray' || vakje3 == 170) {
      if (mouseX >= 240 && mouseX <= 320 && mouseY >= 60 && mouseY <= 140) {
        vakje3 = 170
      } else {
        vakje3 = 'gray'
      }
    }
    if (vakje4 == 'gray' || vakje4 == 170) {
      if (mouseX >= 60 && mouseX <= 140 && mouseY >= 150 && mouseY <= 230) {
        vakje4 = 170
      } else {
        vakje4 = 'gray'
      }
    }
    if (vakje5 == 'gray' || vakje5 == 170) {
      if (mouseX >= 150 && mouseX <= 230 && mouseY >= 150 && mouseY <= 230) {
        vakje5 = 170
      } else {
        vakje5 = 'gray'
      }
    }
    if (vakje6 == 'gray' || vakje6 == 170) {
      if (mouseX >= 240 && mouseX <= 320 && mouseY >= 150 && mouseY <= 230) {
        vakje6 = 170
      } else {
        vakje6 = 'gray'
      }
    }
    if (vakje7 == 'gray' || vakje7 == 170) {
      if (mouseX >= 60 && mouseX <= 140 && mouseY >= 240 && mouseY <= 320) {
        vakje7 = 170
      } else {
        vakje7 = 'gray'
      }
    }
    if (vakje8 == 'gray' || vakje8 == 170) {
      if (mouseX >= 150 && mouseX <= 230 && mouseY >= 240 && mouseY <= 320) {
        vakje8 = 170
      } else {
        vakje8 = 'gray'
      }
    }
    if (vakje9 == 'gray' || vakje9 == 170) {
      if (mouseX >= 240 && mouseX <= 320 && mouseY >= 240 && mouseY <= 320) {
        vakje9 = 170
      } else {
        vakje9 = 'gray'
      }
    }
  }
}

function changeTurn()
{
    playerturn += 1
}

function mouseClicked() {
  //turns



  //reset
  if (mouseX >= 140 && mouseX <= 240 && mouseY >= 340 && mouseY <= 370) {
    playerturn = 1
    vakje1 = 'gray'
    vakje2 = 'gray'
    vakje3 = 'gray'
    vakje4 = 'gray'
    vakje5 = 'gray'
    vakje6 = 'gray'
    vakje7 = 'gray'
    vakje8 = 'gray'
    vakje9 = 'gray'
  }
  //code player red
  if (playerturn == 1 || playerturn == 3 || playerturn == 5 || playerturn == 7 || playerturn == 9 || playerturn == 11) {
    if (mouseX >= 60 && mouseX <= 140 && mouseY >= 60 && mouseY <= 140 && vakje1 == 170) {
      vakje1 = 'red'
      changeTurn();
    }
    if (mouseX >= 150 && mouseX <= 230 && mouseY >= 60 && mouseY <= 140 && vakje2 == 170) {
      vakje2 = 'red'
      changeTurn();
    }
    if (mouseX >= 240 && mouseX <= 320 && mouseY >= 60 && mouseY <= 140 && vakje3 == 170) {
      vakje3 = 'red'
      changeTurn();
    }
    if (mouseX >= 60 && mouseX <= 140 && mouseY >= 150 && mouseY <= 230 && vakje4 == 170) {
      vakje4 = 'red'
      changeTurn();
    }
    if (mouseX >= 150 && mouseX <= 230 && mouseY >= 150 && mouseY <= 230 && vakje5 == 170) {
      vakje5 = 'red'
      changeTurn();
    }
    if (mouseX >= 240 && mouseX <= 320 && mouseY >= 150 && mouseY <= 230 && vakje6 == 170) {
      vakje6 = 'red'
      changeTurn();
    }
    if (mouseX >= 60 && mouseX <= 140 && mouseY >= 240 && mouseY <= 320 && vakje7 == 170) {
      vakje7 = 'red'
      changeTurn();
    }
    if (mouseX >= 150 && mouseX <= 230 && mouseY >= 240 && mouseY <= 320 && vakje8 == 170) {
      vakje8 = 'red'
      changeTurn();
    }
    if (mouseX >= 240 && mouseX <= 320 && mouseY >= 240 && mouseY <= 320 && vakje9 == 170) {
      vakje9 = 'red'
      changeTurn();
    }
  }

  //code player blue
  if (playerturn == 2 || playerturn == 4 || playerturn == 6 || playerturn == 8 || playerturn == 10) {
    if (mouseX >= 60 && mouseX <= 140 && mouseY >= 60 && mouseY <= 140 && vakje1 == 170) {
      vakje1 = 'blue'
      changeTurn();
    }
    if (mouseX >= 150 && mouseX <= 230 && mouseY >= 60 && mouseY <= 140 && vakje2 == 170) {
      vakje2 = 'blue'
      changeTurn();
    }
    if (mouseX >= 240 && mouseX <= 320 && mouseY >= 60 && mouseY <= 140 && vakje3 == 170) {
      vakje3 = 'blue'
      changeTurn();
    }
    if (mouseX >= 60 && mouseX <= 140 && mouseY >= 150 && mouseY <= 230 && vakje4 == 170) {
      vakje4 = 'blue'
      changeTurn();
    }
    if (mouseX >= 150 && mouseX <= 230 && mouseY >= 150 && mouseY <= 230 && vakje5 == 170) {
      vakje5 = 'blue'
      changeTurn();
    }
    if (mouseX >= 240 && mouseX <= 320 && mouseY >= 150 && mouseY <= 230 && vakje6 == 170) {
      vakje6 = 'blue'
      changeTurn();
    }
    if (mouseX >= 60 && mouseX <= 140 && mouseY >= 240 && mouseY <= 320 && vakje7 == 170) {
      vakje7 = 'blue'
      changeTurn();
    }
    if (mouseX >= 150 && mouseX <= 230 && mouseY >= 240 && mouseY <= 320 && vakje8 == 170) {
      vakje8 = 'blue'
      changeTurn();
    }
    if (mouseX >= 240 && mouseX <= 320 && mouseY >= 240 && mouseY <= 320 && vakje9 == 170) {
      vakje9 = 'blue'
      changeTurn();
    }
  }

}


