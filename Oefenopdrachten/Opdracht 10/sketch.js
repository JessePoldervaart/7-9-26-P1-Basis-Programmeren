let kleuren = ["red", "green", "blue", "orange", "purple", "yellow"];
let bestanden = ["elephant", "giraffe", "hippo", "monkey", "panda", "parrot", "penguin", "pig", "rabbit", "snake"];

function setup() {
  createCanvas(800, 400);
 

	let button = createButton('Klik mij');
	button.position(100, 100);
	button.style('background-color', '#4CAF50');
	button.style('font-size', '16px');
	button.mousePressed(mijnFunctie);
}

function mijnFunctie() {
  console.log('Button werd geklikt!');
}


function draw() {
  background(220);
}
