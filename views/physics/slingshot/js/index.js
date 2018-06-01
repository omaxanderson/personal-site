var ball;

var gravity;
var slingshot;

var dragging;
var flying;
var inSlingshot;
var launched;

var previousLen;
var initSlingshotVel;

function setup() {
  createCanvas(800, 600);
  ball = new Ball(width / 2, height / 2);
  gravity = createVector(0, 0.2);
  dragging = false;
  slingshot = createVector(0, 0);
  flying = false;
  inSlingshot = true;
  previousLen = 0;
  launched = false;
}

function draw() {
  background(100);
  stroke(255);
  if (inSlingshot) {
    line(width / 2, height / 2, ball.pos.x, ball.pos.y);
  }

  //console.log(slingshot.x + " " + slingshot.y);

  if (launched) {
    slingshot.x = ((width / 2) - ball.pos.x) / 100;
    slingshot.y = ((height / 2) - ball.pos.y) / 100;
  }

  if (launched && (abs(slingshot.x) <= 0.1 && abs(slingshot.y) <= 0.1)) {
    console.log("slingshot released");
    inSlingshot = false;
    flying = true;
  }
  //previousLen = distance(width / 2, height / 2, ball.pos.x, ball.pos.y);

  if (dragging) {
    ball.pos.x = mouseX;
    ball.pos.y = mouseY;
  } else if (flying) {
    ball.applyForce(gravity);
  }
  if (inSlingshot) {
    ball.applyForce(slingshot);
  }
  ball.update();
  ball.draw();
}

function mousePressed() {
  if (dragging) {
    dragging = false;
    launchBall();
  } else if (distance(mouseX, mouseY, ball.pos.x, ball.pos.y) <= ball.size) {
    console.log("ball clicked");
    dragging = true;
  }
}

function distance(x, y, a, b) {
  return sqrt((x - a)**2 + (y - b)**2);
}

function launchBall() {
  launched = true;
  console.log("lanch sequence initiated");
  initSlingshotVel = createVector(((width / 2) - ball.pos.x) / 100, ((height / 2) - ball.pos.y) / 100)
  slingshot.x = ((width / 2) - ball.pos.x) / 100;
  slingshot.y = ((height / 2) - ball.pos.y) / 100;
}
