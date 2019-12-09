var vibrate = 0
var w = 0
function setup() {
  createCanvas(600, 600);
  background(78,38,19);
  textAlign(LEFT, CENTER);
}

function mousePressed() {
  clear();
  background(78,38,19);
  vibrate = (vibrate + 20)
  w = sin(vibrate)*10
}

function keyPressed() {
  textSize(50)
  text("ZAP!", 300, 30)

}

function draw() {

  fill(251, 143, 1);

  textSize(32);
  text('Pizza Menu:', 20, 30);
  
  textSize(20);
  text('"c" For Cheese', 20, 60);

  textSize(20);
  text('"p" For Pepperoni', 20, 90);
 
  textSize(20);
  text('"h" For Ham', 20, 120);

  textSize(20);
  fill(251,millis()%256,millis()%128)
  text('Click to bake!!', 220, 570);

  //pizza crust
  fill(247, 226, 137);
  ellipse(300+w, 300+w, 450+w, 450+w);


  //pizza sauce
  if (keyIsPressed === true) {
    fill(30,30,30)
  } else {
    fill(182, 43, 20)
  }
  ellipse(300+w, 300+w, 400+w, 400+w);

  //cheese
if (keyCode === 67) {
for (let i=0; i<10; i++){
  for (let j=0; j<8; j++){
    x = i*30
    y = j*30
    fill(248, 216, 88)
    triangle(150+x, 175+y, 160+x, 200+y, 170+x, 185+y)
  }
}
}
  //pepperonni
if (keyCode === 80) {
  fill(240, 30, 6)
  ellipse(320,320,35,35)
  ellipse(370,378,35,35)
  ellipse(280,220,35,35)
  ellipse(360,270,35,35)
  ellipse(175,290,35,35)
  ellipse(190,230,35,35)
  ellipse(300,395,35,35)
  ellipse(340,149,35,35)
  ellipse(210,350,35,35)
  ellipse(250,288,35,35)
  ellipse(420,329,35,35)
  ellipse(250,440,35,35)
  ellipse(420,215,35,35)
}
if (keyCode === 72) {
  //ham
  fill(252, 168, 182)
  rect(280, 280, 20, 20)
  rect(420, 260, 20, 20)
  rect(360, 430, 20, 20)
  rect(240, 157, 20, 20)
  rect(240, 390, 20, 20)
  rect(150, 356, 20, 20)
  rect(355, 200, 20, 20)
}
}

