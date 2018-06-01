function Ball(x, y) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.size = 25;
  this.bounciness = 0.8;

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    if (this.pos.x <= this.size / 2 || this.pos.x >= width - (this.size / 2)) {
      this.vel.x *= -1;
      this.vel.add(this.acc);
      this.pos.add(this.vel);

      this.vel.x *= this.bounciness;
      //this.acc.x *= -0.8;
    } else if (this.pos.y <= this.size / 2 || this.pos.y >= height - (this.size / 2)) {
      this.vel.y *= -1;
      this.vel.add(this.acc);
      this.pos.add(this.vel);

      this.vel.y *= this.bounciness;
      //this.acc.y *= -0.8;
    } else {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
    }
    //console.log(this.vel.x + " " + this.vel.y);

    if (this.pos.y > height - (this.size / 2)) {
      this.pos.y = height - (this.size / 2);
    }

    this.acc.mult(0);


  }

  this.draw = function() {
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }

}
