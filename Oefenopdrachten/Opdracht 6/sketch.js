let kleuren = ['red', 'green', 'blue', 'purple', 'yellow']
let letters = ['red', 'green', 'blue', 'purple', 'yellow']
letters.shift()
letters.push('red')
let hello = ['red', 'green', 'blue', 'purple', 'yellow']
hello.splice([2], [2])
let numbers = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill('black')
  text('1',20,15)
  text('2',20,100)
  text('3',20,190)
  text('4',20,250)
  text('5',120,15)
  text('6',120,100)
  text('7',120,190)
  text('8',120,280)
  text('9',240,15)

 
//1
  for(let i = 0; i<kleuren.length; i++) {
  fill(kleuren[i])
  text(kleuren[i], 30, 15+(15*i))
  }
//2
  for(let i = 0; i<letters.length; i++) {
  fill(letters[i])
  text(letters[i], 30, 100+(15*i))
  }
//3
 for(let i = 0; i<hello.length; i++) {
  fill(hello[i])
  text(hello[i], 30, 190+(15*i))
  }
//4
}
