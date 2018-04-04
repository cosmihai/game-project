"use strict";

function Target(ctx, canvaWidth, canvaHeight) {
  this.ctx = ctx;
  this.radius = 10;
  this.x = Math.floor(Math.random() * (canvaWidth-2*this.radius) + this.radius);
  this.y = Math.floor(Math.random() * (canvaHeight-2*this.radius) + this.radius) ;
  this.fillColor = 'yellow';
}

Target.prototype.draw = function () {
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
  this.ctx.fillStyle = this.fillColor;
  this.ctx.fill();
  
}


