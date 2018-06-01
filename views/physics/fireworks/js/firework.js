function Firework(x, y) {
  this.firework = new Particle(x, y, false);
  this.exploded = false;
  this.particles = [];
  this.lifetime = 400;
  this.hue = createVector(random(0,255), random(0, 255), random(0, 255));

  this.explode = function() {
    for (var i = 0; i < 100; i++) {
      var p = new Particle(this.firework.pos.x, this.firework.pos.y, true);
      this.particles.push(p);
    }
  }

  this.update = function() {
    if (this.exploded) {
      this.lifetime -= 5;
    }

    if (this.firework.vel.y >= 0 && !this.exploded) {
      this.exploded = true;
      this.explode();
    }

    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
    }

    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].applyForce(lightgravity);
      this.particles[i].update();
    }
  }

  this.show = function() {
    if (!this.exploded) {
      this.firework.show();
    }
    for (var i = 0; i < this.particles.length; i++) {
      stroke(this.hue.x, this.hue.y, this.hue.z, this.lifetime);
      this.particles[i].show();
    }
  }
}
