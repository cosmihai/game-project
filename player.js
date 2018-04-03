"use strict";

function Player (ctx) {
  this.ctx = ctx;
  this.x = 290;
  this.y = 470;
  this.width = 20;
  this.height = 20;
  this.speed = 0;
  this.direction = null;
  this.fillColor = 'rgb(30, 30, 30)';
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

  if(this.x>600) {
    this.x %=600;
  }else if (this.x<0){
    this.x = 600-this.x;
  }else if(this.y>500){
    this.y %=500;
  }else if(this.y<0){
    this.y = 500-this.y;
  }
}

Player.prototype.setSpeed = function (speed) {
  this.speed = speed;
}

Player.prototype.setDirection = function (direction) {
  this.direction = direction;
}


