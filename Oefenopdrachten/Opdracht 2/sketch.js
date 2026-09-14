let x = 100;
let greeting = "hello world!";
let a = 20;
let b = 10;
let plus = a + b;
let minus = a - b;
let times = a * b;
let delen = a / b;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // plaats x op het canvas
  text(x, 20, 20);

  // plaats greeting op het canvas
  text(greeting, 20, 60)

  // a+b
  text(plus, 20, 80)

  // a-b
  text(minus, 20, 100)

  // a*b
  text(times, 20, 120)

  // a/b
  text(delen, 20, 140)
}
