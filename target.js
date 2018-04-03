"use strict";

function Target(ctx) {
  this.ctx = ctx;
  this.x = Math.floor(Math.random() * 380 + 10);
  this.y = Math.floor(Math.random() * 380 + 10) ;
  this.radius = 10;
  this.fillColor = 'yellow';
}

Target.prototype.draw = function () {
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
  this.ctx.fillStyle = this.fillColor;
  this.ctx.fill();
}