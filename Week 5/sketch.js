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
    question()
  }
if (score == 1){
  question1()
}
if (score == 2){
  question2()
}
if (score == 3){
  question3()
}
if (score == 4){
  question4()
}
if (score == 5){
  question5()
}
if (score == 6){
  question6()
}
if (score == 7){
  question7()
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

function question(){
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

}

function question1(){
textSize(20)
fill('black')
text('kubusvormig', 50, 380) //goede antwoord
text('spiraalvormig', 450, 540)
fill('white')
text('kegelvormig', 450, 380)
text('stervormig', 50, 540)
fill('black')
rect(140, 172, 520, 40,10)
fill('white')
text('Welke unieke vorm heeft de ontlasting van een wombat?', 150, 200)
}

function question2(){
textSize(20)
fill('black')
text('nicolas cage', 50, 380)
text('keanu reeves', 450, 540)
fill('white')
text('steve buscemi', 450, 380)//goede antwoord
text('tom hanks', 50, 540)
fill('black')
rect(110, 172, 590, 40,10)
fill('white')
text('Welke Hollywood-acteur werkte als brandweerman tijdens 9-11?', 120, 200)
}

function question3(){
textSize(20)
fill('black')
text('een zilveren lepel', 50, 380)
text('een houten emmer', 450, 540)//goede antwoord
fill('white')
text('een koperen kroonluchter', 450, 380)
text('een linnen vlag', 50, 540)
fill('black')
rect(110, 172, 580, 40,10)
fill('white')
text('Over welk voorwerp werd in 1325 oorlog uitgevochten in Italië?', 120, 200)
}

function question4(){
textSize(20)
fill('black')
text('vloeibaar goud', 50, 380)
text('zwavelzuur', 450, 540)
fill('white')
text('diamanten', 450, 380)//goede antwoord
text('ijskristallen', 50, 540)
fill('black')
rect(170, 172, 460, 40,10)
fill('white')
text('op de gasreuzen Jupiter en Saturnus regent het...', 180, 200)
}

function question5(){
textSize(20)
fill('black')
text('bemanning van een containerschip', 50, 380)
text('wetenschappers op paaseiland', 450, 540)
fill('white')
text('wetenschappers op antartica', 450, 380)
text('de bemanning van het ISS', 50, 540)//goede antwoord
fill('black')
rect(90, 172, 620, 40,10)
fill('white')
text('Wie zijn de dichtstbijzijnde mensen als je je bevindt op Point Nemo?', 100, 200)
}

function question6(){
textSize(20)
fill('black')
text('paars en geel', 50, 380) //goede antwoord
text('grijs en zwart', 450, 540)
fill('white')
text('rood', 450, 380)
text('felgroen', 50, 540)
fill('black')
rect(190, 172, 435, 40,10)
fill('white')
text('welke kleur hadden wortels voor de 17e eeuw?', 200, 200)
}

function question7(){
textSize(20)
fill('black')
text('angst voor roofdieren', 50, 380) 
text('elkaar warm houden', 450, 540)
fill('white')
text('voorkomen dat ze wegdrijven', 450, 380)//goede antwoord
text('een dominantieritueel', 50, 540)
fill('black')
rect(70, 172, 675, 40,10)
fill('white')
text('Waarom houden zeeotters elkaars pootjes vast als ze in het water slapen?', 80, 200)
}

function nextquestion(){
  score++
  console.log(score)
}

function mouseClicked() {
  // HOMEPAGE
  if (score == 0) {
    if (mouseX > 290 && mouseX < 505 && mouseY > 195 && mouseY < 255) {
      nextquestion();
    }
  } 
  // QUESTION 1
  else if (score == 1) {
    // a
    if (mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // b
    else if (mouseX > 400 && mouseX < 800 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // c
    else if (mouseX > 0 && mouseX < 400 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    } 
    // d
    else if (mouseX > 400 && mouseX < 800 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    }
  } 
  // QUESTION 2
  else if (score == 2) {
    // a
    if (mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // b
    else if (mouseX > 400 && mouseX < 800 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // c
    else if (mouseX > 0 && mouseX < 400 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    } 
    // d
    else if (mouseX > 400 && mouseX < 800 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    }
  }
     // QUESTION 3
  else if (score == 3) {
    // a
    if (mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // b
    else if (mouseX > 400 && mouseX < 800 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // c
    else if (mouseX > 0 && mouseX < 400 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    } 
    // d
    else if (mouseX > 400 && mouseX < 800 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    }
  }
    // QUESTION 4
  else if (score == 4) {
    // a
    if (mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // b
    else if (mouseX > 400 && mouseX < 800 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // c
    else if (mouseX > 0 && mouseX < 400 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    } 
    // d
    else if (mouseX > 400 && mouseX < 800 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    }
  }
    // QUESTION 5
  else if (score == 5) {
    // a
    if (mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // b
    else if (mouseX > 400 && mouseX < 800 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // c
    else if (mouseX > 0 && mouseX < 400 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    } 
    // d
    else if (mouseX > 400 && mouseX < 800 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    }
  }
    // QUESTION 6
  else if (score == 6) {
    // a
    if (mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // b
    else if (mouseX > 400 && mouseX < 800 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // c
    else if (mouseX > 0 && mouseX < 400 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    } 
    // d
    else if (mouseX > 400 && mouseX < 800 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    }
  }
    // QUESTION 7
  else if (score == 7) {
    // a
    if (mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // b
    else if (mouseX > 400 && mouseX < 800 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // c
    else if (mouseX > 0 && mouseX < 400 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    } 
    // d
    else if (mouseX > 400 && mouseX < 800 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    }
  }
    // QUESTION 8
  else if (score == 8) {
    // a
    if (mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // b
    else if (mouseX > 400 && mouseX < 800 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // c
    else if (mouseX > 0 && mouseX < 400 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    } 
    // d
    else if (mouseX > 400 && mouseX < 800 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    }
  }
    // QUESTION 9
  else if (score == 9) {
    // a
    if (mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // b
    else if (mouseX > 400 && mouseX < 800 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // c
    else if (mouseX > 0 && mouseX < 400 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    } 
    // d
    else if (mouseX > 400 && mouseX < 800 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    }
  }
    // QUESTION 10
  else if (score == 10) {
    // a
    if (mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // b
    else if (mouseX > 400 && mouseX < 800 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // c
    else if (mouseX > 0 && mouseX < 400 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    } 
    // d
    else if (mouseX > 400 && mouseX < 800 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    }
  }
}