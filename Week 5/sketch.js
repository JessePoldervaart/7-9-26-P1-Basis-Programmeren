let score = 0
let a = 'white'
let b = 'black'
let c = 'black'
let d = 'white'
let winscore = 0
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


  if (score == 0 ){
  homepage()
  }
  if(score>=1 && score <=20){
    question()
  }
  if(score == 21){
    endscreen()
  }
if (score == 1){
  question1()
}

if(score == 2){
question1()
 a = 'green'
}
if (score == 3){
  question2()
  a = 'white'
}
if (score == 4){
  question2()
b = 'green'
}
if (score == 5){
  question3()
  b = 'black'
}
if (score == 6){
  question3()
  d = 'green'
}
if (score == 7){
  question4()
  d = 'white'
}
if (score == 8){
  question4()
  b = 'green'
}
if (score == 9){
  question5()
  b = 'black'
}
if (score == 10){
  question5()
  c = 'green'

}
if(score == 11){
  question6()
  c = 'black'
}
if(score == 12){
  question6()
  a = 'green'
}
if(score == 13){
  question7()
  a = 'white'
}
if(score == 14){
  question7()
  b = 'green'
}
if(score == 15){
  question8()
  b = 'black'
}
if(score == 16){
  question8()
  d = 'green'
}
if(score == 17){
  question9()
  d = 'white'
}
if(score == 18){
  question9()
  c = 'green'
}
if(score == 19){
  question10()
  c = 'black'
}
if(score == 20){
  question10()
  c = 'green'
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
  rect(290, 195, 230, 60, 10)
  fill('white')
  textSize(50)
  text('Start quiz!',292, 240)


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
text('Kubusvormig', 50, 380) //goede antwoord
text('Spiraalvormig', 450, 540)
fill('white')
text('Kegelvormig', 450, 380)
text('Stervormig', 50, 540)
fill('black')
rect(140, 172, 520, 40,10)
fill('white')
text('Welke unieke vorm heeft de ontlasting van een wombat?', 150, 200)
}



function question2(){
textSize(20)
fill('black')
text('Nicolas Cage', 50, 380)
text('Keanu Reeves', 450, 540)
fill('white')
text('Steve Buscemi', 450, 380)//goede antwoord
text('Tom Hanks', 50, 540)
fill('black')
rect(110, 172, 590, 40,10)
fill('white')
text('Welke Hollywood-acteur werkte als brandweerman tijdens 9-11?', 120, 200)
}

function question3(){
textSize(20)
fill('black')
text('Een zilveren lepel', 50, 380)
text('Een houten emmer', 450, 540)//goede antwoord
fill('white')
text('Een koperen kroonluchter', 450, 380)
text('Een linnen vlag', 50, 540)
fill('black')
rect(110, 172, 580, 40,10)
fill('white')
text('Over welk voorwerp werd in 1325 oorlog uitgevochten in Italië?', 120, 200)
}

function question4(){
textSize(20)
fill('black')
text('Vloeibaar goud', 50, 380)
text('Zwavelzuur', 450, 540)
fill('white')
text('Diamanten', 450, 380)//goede antwoord
text('Ijskristallen', 50, 540)
fill('black')
rect(170, 172, 460, 40,10)
fill('white')
text('Op de gasreuzen Jupiter en Saturnus regent het...', 180, 200)
}

function question5(){
textSize(20)
fill('black')
text('Bemanning van een containerschip', 50, 380)
text('Wetenschappers op paaseiland', 450, 540)
fill('white')
text('Wetenschappers op antartica', 450, 380)
text('De bemanning van het ISS', 50, 540)//goede antwoord
fill('black')
rect(90, 172, 620, 40,10)
fill('white')
text('Wie zijn de dichtstbijzijnde mensen als je je bevindt op Point Nemo?', 100, 200)
}

function question6(){
textSize(20)
fill('black')
text('Paars en Geel', 50, 380) //goede antwoord
text('Grijs en Zwart', 450, 540)
fill('white')
text('Rood', 450, 380)
text('Felgroen', 50, 540)
fill('black')
rect(190, 172, 435, 40,10)
fill('white')
text('Welke kleur hadden wortels voor de 17e eeuw?', 200, 200)
}

function question7(){
textSize(20)
fill('black')
text('Angst voor roofdieren', 50, 380) 
text('Elkaar warm houden', 450, 540)
fill('white')
text('Voorkomen dat ze wegdrijven', 450, 380)//goede antwoord
text('Een dominantieritueel', 50, 540)
fill('black')
rect(70, 172, 675, 40,10)
fill('white')
text('Waarom houden zeeotters elkaars pootjes vast als ze in het water slapen?', 80, 200)
}

function question8(){
textSize(20)
fill('black')
text('Pablo Picasso', 50, 380) 
text('Salvador Dali', 450, 540)//goede antwoord
fill('white')
text('Andy Warhol', 450, 380)
text('Joan Miró', 50, 540)
fill('black')
rect(70, 172, 675, 40,10)
fill('white')
text('Welke kunstenaar ontwierp in 1969 het logo van lollymerk Chupa Chups?', 80, 200)
}

function question9(){
textSize(20)
fill('black')
text('Hello World!', 50, 380) 
text('First Test Video', 450, 540)
fill('white')
text('Cat jumping of couch', 450, 380)
text('Me at the zoo', 50, 540)//goede antwoord
fill('black')
rect(160, 172, 470, 40,10)
fill('white')
text('Wat was de titel van de allereerste YouTube-video?', 170, 200)
}

function question10(){
textSize(20)
fill('black')
text('Kwik', 50, 380) 
text('Bismut', 450, 540)
fill('white')
text('Koper', 450, 380)
text('Gallium', 50, 540)//goede antwoord
fill('black')
rect(120, 172, 570, 40,10)
fill('white')
text('Welk vast chemisch element smelt al in de palm van je hand?', 130, 200)
}

function endscreen(){
  fill('black')
  rect(300, 100, 200, 400, 30)
  fill('white')
  if(winscore <= 3){
    textSize(50)
    text('bad', 360, 150)
    
    
  }
  if(winscore > 3 && winscore <=6){
    textSize(50)
    text('decent', 327, 150)
    
    
  }
  if(winscore > 6 && winscore <=9){
    textSize(50)
    text('good', 345, 150)
    
    
  }
    if(winscore == 10){
    textSize(50)
    text('perfect', 320, 150)
    
    
  }
 if(winscore <=9){
   fill('white')
  textSize(50)
  text(winscore, 360, 300)
    text('/10', 390, 300)
 }
 if(winscore==10){
   fill('white')
  textSize(50)
  text(winscore, 335, 300)
    text('/10', 390, 300)
 }
}


function nextquestion(){
  score++
  console.log(score)
}

function mouseClicked() {
  // HOMEPAGE
  if (score == 0) {
    if (mouseX > 290 && mouseX < 520 && mouseY > 195 && mouseY < 255) {
      nextquestion();
    }
  } 
  // QUESTION 1
  else if (score == 1) {
    // a
    if (mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 450) {
      nextquestion();
      winscore++
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
  else if (score == 3) {
    // a
    if (mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // b
    else if (mouseX > 400 && mouseX < 800 && mouseY > 300 && mouseY < 450) {
      nextquestion()
      winscore++
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
      winscore++
    }
  }
    // QUESTION 4
  else if (score == 7) {
    // a
    if (mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // b
    else if (mouseX > 400 && mouseX < 800 && mouseY > 300 && mouseY < 450) {
      nextquestion();
      winscore++
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
      winscore++
    } 
    // d
    else if (mouseX > 400 && mouseX < 800 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    }
  }
    // QUESTION 6
  else if (score == 11) {
    // a
    if (mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 450) {
      nextquestion();
      winscore++
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
  else if (score == 13) {
    // a
    if (mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // b
    else if (mouseX > 400 && mouseX < 800 && mouseY > 300 && mouseY < 450) {
      nextquestion();
      winscore++
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
  else if (score == 15) {
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
      winscore++
    }
  }
    // QUESTION 9
  else if (score == 17) {
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
      winscore++
    } 
    // d
    else if (mouseX > 400 && mouseX < 800 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    }
  }
    // QUESTION 10
  else if (score == 19) {
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
      winscore++
    } 
    // d
    else if (mouseX > 400 && mouseX < 800 && mouseY > 450 && mouseY < 600) {
      nextquestion();
    }
  }






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
  // QUESTION 2
  else if (score == 4) {
    // a
    if (mouseX > 0 && mouseX < 400 && mouseY > 300 && mouseY < 450) {
      nextquestion();
    } 
    // b
    else if (mouseX > 400 && mouseX < 800 && mouseY > 300 && mouseY < 450) {
      nextquestion()
      
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
    // QUESTION 4
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
    // QUESTION 5
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
    // QUESTION 6
  else if (score == 12) {
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
  else if (score == 14) {
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
  else if (score == 16) {
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
  else if (score == 18) {
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
  else if (score == 20) {
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

