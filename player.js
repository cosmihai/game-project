"use strict";

function Player (ctx, canvaWidth, canvaHeight) {
  
  this.ctx = ctx;
  this.width = 50;
  this.height = 50;
  this.x = canvaWidth/2-this.width/2;
  this.y = canvaHeight-2*this.height;
  this.speed = 0;
  this.direction = null;
  this.fillColor = 'rgb(30, 30, 30)';
  this.canvaWidth = canvaWidth;
  this.canvaHeight = canvaHeight;
  this.img = new Image();
  this.img.src = 'pics/dog.png'
}

Player.prototype.draw = function () {
  this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);    
  // this.ctx.fillStyle = this.fillColor;
  // this.ctx.fillRect(this.x, this.y, this.width, this.height);
  // this.ctx.fillStyle = 'red';
  // this.ctx.fillRect(this.x+5, this.y+5, this.width-10, this.height-10);
}

Player.prototype.update = function () {  
  switch (this.direction) {
    case 'up':
      this.y -= this.speed;    
      break;
    case 'down':
      this.y += this.speed;
      break;
    case 'right':
      this.x += this.speed;
      break;
    case 'left':
      this.x -= this.speed;
      break;
  } 
}

Player.prototype.setSpeed = function (speed) {
  this.speed = speed;
}

Player.prototype.setDirection = function (direction) {
  this.direction = direction;
}


