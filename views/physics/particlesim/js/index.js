var previousPositions = [];
var objects = [];
var gravity;

function setup() {
  createCanvas(800, 800);
  //background(0);
  //gravity = createVector(0, 0.2);
  //238,900
  objects.push(new SpaceObject(width / 4, height / 2, 7300000, 1.0));
  objects[0].vel = createVector(0, 3);
  //objects[0].vel = createVector(0, .25);
  objects.push(new SpaceObject(2 * width / 4, height / 2, 597200000, 3.9));
  objects[1].vel = createVector(0, -0.03)

  objects.push(new SpaceObject(width / 2, height / 4, 100, 2.0));
  objects[2].vel = createVector(3, 0);
  //objects.push(new SpaceObject(width / 2, height / 2, 9999999, 50));
  //objects[1].vel = createVector(0, .25);
  //objects.push(new SpaceObject(width / 2, height / 3, 250, 50));
}

function draw() {
  background(0);
  stroke(255);
  fill(255);

  for (var i = objects.length - 1; i >= 0; i--) {
    for (var j = objects.length - 1; j >= 0; j--) {
      if (i != j) {
        objects[i].interact(objects[j]);
        objects[i].update();
        objects[i].draw();
        //previousPositions.push(objects[i].getPos());
      }
    }
    //console.log(objects[i].pos.x + ", " + objects[i].pos.y);
  }

  //console.log("\n");
  //console.log(previousPositions.length);
  stroke(255, 0, 0);
  ellipse(width / 2, height / 2, 1, 1);

}

function distance(m1, m2) {
  return sqrt(pow(m1.pos.x - m2.pos.x, 2) +
    pow(m1.pos.y - m2.pos.y, 2));
}
