"use strict";

function Target(ctx, canvaWidth, canvaHeight) {
  this.ctx = ctx;
  this.radius = 40;
  this.x = Math.floor(Math.random() * (canvaWidth-2*this.radius) + this.radius);
  this.y = Math.floor(Math.random() * (canvaHeight-2*this.radius) + this.radius) ;
  // this.fillColor = 'yellow';
  this.img = new Image ();
  this.img.src = 'pics/hole-clipart-bullet_hole_PNG6064.png'
 
}

Target.prototype.draw = function () {

  this.ctx.drawImage(this.img, this.x, this.y, this.radius, this.radius);
  // this.ctx.beginPath();
  // this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
  // this.ctx.fillStyle = this.fillColor;
  // this.ctx.fill();

  // this.ctx.beginPath();
  // this.ctx.arc(this.x, this.y, this.radius+3, 0, Math.PI * 2, true);
  // this.ctx.strokeStyle = 'yellow';
  // this.ctx.stroke();
}



Target.prototype.changeColor = function () {
  this.img.src = 'pics/mole.png';
}


// Target.prototype.resetColor = function () {
//   this.fillColor = 'yellow'
// }


