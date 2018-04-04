"use strict";

function Player (ctx, canvaWidth, canvaHeight) {
  
  this.ctx = ctx;
  this.width = 20;
  this.height = 20;
  this.x = canvaWidth/2-this.width/2;
  this.y = canvaHeight-2*this.height;
  this.speed = 0;
  this.direction = null;
  this.fillColor = 'rgb(30, 30, 30)';
  this.canvaWidth = canvaWidth;
  this.canvaHeight = canvaHeight;
}

Player.prototype.draw = function () {  
  this.ctx.fillStyle = this.fillColor;
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
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

  // if(this.x>this.canvaWidth) {
  //   this.x %=this.canvaWidth;
  // }else if (this.x<0){
  //   this.x = this.canvaWidth-this.x;
  // }else if(this.y>this.canvaHeight){
  //   this.y %=this.canvaHeight;
  // }else if(this.y<0){
  //   this.y = this.canvaHeight-this.y;
  // }
}

Player.prototype.setSpeed = function (speed) {
  this.speed = speed;
}

Player.prototype.setDirection = function (direction) {
  this.direction = direction;
}


