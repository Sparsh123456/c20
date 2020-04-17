var ellipse;
var r, g, b;
var mr, mg, mb;
function setup() {
  createCanvas(255, 255);
  
}

function draw() {
  background(r, g, b);
  r = mouseY;
  g = mouseX;
  b = mouseX;
  mr = mouseX;
  mg = mouseY;
  mg = mouseY;
  ellipse(mouseX, mouseY, 20, 20);
  
}