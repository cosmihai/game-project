"use strict";

function Player (ctx) {
  this.ctx = ctx;
  this.x = 190;
  this.y = 370;
  this.width = 20;
  this.height = 20;
  this.speed = 2;
}

Player.prototype.draw = function () {  
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

// Player.prototype.update = function () {
//  pressArrowKeys(event)
//   
// }

// function pressArrowKeys(event) {
//     switch (event.keyCode) {
//       case 38:
//         this.y-=this.speed;
//         break;
//       case 40:
//         this.y+=this.speed;
//         break;
//       case 37:
//         this.x-=this.speed;
//         break;
//       case 39:
//         this.x+=this.speed;
//         break;
//     }
//   }
