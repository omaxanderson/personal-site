var gravitationalConst = 0.0000000000667;

function SpaceObject(x, y, mass, radius) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = mass;
  this.radius = radius;
  this.color = createVector(255, 0, 0);

  this.getPos = function() {
    return createVector(this.pos.x, this.pos.y);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.acc = this.acc.mult(1 / this.mass);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.draw = function() {
    //stroke(this.color.x, this.color.y, this.color.z);
    //fill(this.color.x, this.color.y, this.color.z);
    stroke(255);
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
  }

  this.interact = function(otherObject) {
    var xdir = otherObject.getPos().x - this.pos.x;
    var ydir = otherObject.getPos().y - this.pos.y;
    //var force = createVector(otherObject.mass * xdir / 1000000,
      //otherObject.mass * ydir / 1000000);
    var force = (gravitationalConst * this.mass *
      otherObject.mass) / distance(this, otherObject);
    var grav = createVector(force * xdir, force * ydir);
    this.applyForce(grav);
  }
}
