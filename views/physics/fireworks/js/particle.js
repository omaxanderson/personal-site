function Particle(x, y, exploded) {
  this.pos = createVector(x, y);
  this.exploded = exploded;

  var vel;
  if (this.exploded) {
    //this.vel = createVector(random(-3, 3), random(-6, 3));
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0, 3));
    //this.vel.y -= 2;
  } else {
    this.vel = createVector(0, random(-14, -10));
  }
  this.acc = createVector(0,0);

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.show = function() {
    point(this.pos.x, this.pos.y);
  }

}
