
"use strict";
function Game (parentElement) {
  
  this.parentElement = parentElement;
  this.gameScreenElement = null;
  this.endGameButtonElement = null;
  this.handleEndGameClick = null;
  this.ctx = null;
}


Game.prototype.build = function () {
  
  this.gameScreenElement = createHtml(`<div class="screen">
  <canvas id="canvas" width="400" height="400"></canvas>
  <button class="button">End Game</button>      
  </div>`);
  this.parentElement.appendChild(this.gameScreenElement);
  this.endGameButtonElement = document.querySelector('.button');
  this.endGameButtonElement.addEventListener('click', this.handleEndGameClick)
  this.ctx = document.getElementById('canvas').getContext('2d');
  this.draw();

  // window.addEventListener('keydown', game.update())
  
}

Game.prototype.draw = function() {
  this.player = new Player(this.ctx);
  this.player.draw();
  this.target = new Target(this.ctx);
  this.target.draw();
  // this.setUpKeyBinding ();
  // this.render();  
}

// Game.prototype.render = function () {
//   var self = this;
//   self.updateAll();
//   self.clear();
//   self.drawAll();
// }




Game.prototype.destroy = function() {
  this.gameScreenElement.remove();
}

Game.prototype.onEnded = function (callback) {
  this.handleEndGameClick = callback;
}

