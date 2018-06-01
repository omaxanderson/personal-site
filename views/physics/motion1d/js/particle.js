function Particle() {
  this.pos = createVector(0, height / 2);
  this.vel = createVector(0, 0);
  this.acc = createVector(.1, 0);
  this.pause = false;

  this.getPos = function() {
    return createVector(this.pos.x, this.pos.y);
  }

  this.getVel = function() {
    return createVector(this.vel.x, this.vel.y);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.getAcc = function() {
    return createVector(this.acc.x, this.acc.y);
  }

  this.update = function(step) {
    if (!this.pause || step) {
      if ((this.pos.x > width / 2 && this.acc.x > 0)
            || (this.pos.x < width / 2 && this.acc.x < 0)) {
        this.acc.mult(-1);
      }
      this.vel.add(this.acc);
      this.pos.add(this.vel);
    }
  }

  this.draw = function() {
    stroke(255, 0, 0);
    fill(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, 25, 25);
  }

}
