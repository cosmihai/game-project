"use strict";

function Player (ctx) {
  this.ctx = ctx;
}

Player.prototype.draw = function () {
  this.ctx.fillRect(100, 100, 20, 20);
}