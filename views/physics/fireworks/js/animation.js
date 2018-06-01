var fireworks = [];
var gravity;
var lightgravity;

function setup() {
  createCanvas(800, 600);
  stroke(255);
  strokeWeight(4);
  gravity = createVector(0, 0.2);
  lightgravity = createVector(0, 0.01);
  fireworks.push(new Firework(random(0, width), height));
}

function draw() {
  background(0);
  stroke(255);
  if (random(0, 1) < 0.05 && fireworks.length < 7) {
    fireworks.push(new Firework(random(0, width), height));
  }
  //firework.applyForce(gravity);

  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].lifetime <= 0) {
      fireworks.splice(i, 1);
    }
  }
  console.log(fireworks.length);
}
