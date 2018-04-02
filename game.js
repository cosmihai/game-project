
"use strict";
function Game (parentElement, ctx) {
  
  this.parentElement = parentElement;
  this.gameScreenElement = null;
  this.endGameButtonElement = null;
  this.handleEndGameClick = null;
  this.ctx = null;
}


Game.prototype.build = function () {
  
  this.gameScreenElement = createHtml(`<div class="starting-screen">
  <canvas id="canvas" width="400" height="400"></canvas>
  <button class="play-button">End Game</button>      
  </div>`);
  this.parentElement.appendChild(this.gameScreenElement);
  this.endGameButtonElement = document.querySelector('.play-button');
  this.endGameButtonElement.addEventListener('click', this.handleEndGameClick)
  this.ctx = document.getElementById('canvas').getContext('2d');
  this.draw();
  
}

Game.prototype.draw = function() {
  this.player = new Player(this.ctx);
  this.player.draw();
}

Game.prototype.destroy = function() {
  this.gameScreenElement.remove();
}

Game.prototype.onEnded = function (callback) {
  this.handleEndGameClick = callback;
}

