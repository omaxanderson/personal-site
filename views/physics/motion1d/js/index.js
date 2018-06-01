var p;
var paused;

function setup() {
  createCanvas(800, 600);
  background(0);
  p = new Particle();
  paused = false;
}

function draw() {
  background(0);
  strokeWeight(1);
  stroke(255);
  fill(255);
  line(0, height / 2, width, height / 2);
  line(width / 2, height / 2 + 10, width / 2, height / 2 - 10);
  drawText();

  p.update();
  p.draw();
}

function drawText() {
  strokeWeight(0.2);
  text("Pos: " + (parseFloat(p.getPos().x) - (width / 2)).toFixed(2)  +
        ", " + p.getPos().y, 10, 20);
  text("Vel: " + parseFloat(p.getVel().x).toFixed(1) +
        ", " + p.getVel().y, 10, 40);
  text("Acc: " + p.getAcc().x +
        ", " + p.getAcc().y, 10, 60);
}

function mouseClicked() {
  if (p.pause && mouseX < width / 5 && mouseY > 4 * height / 5) {
    print("yep");
    for (var i = 0; i < 1; i++) {
      p.update(true);
      p.draw();
    }
  } else {
    p.pause = !p.pause;
  }
}
