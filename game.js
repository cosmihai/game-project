
"use strict";
function Game (parentElement) {
  
  this.parentElement = parentElement;
  this.gameScreenElement = null;
  this.endGameButtonElement = null;
  this.handleEndGameClick = null;
  this.ctx = null;
  this.player = null;
  this.target = null;
    
}




Game.prototype.build = function () {
  
  this.gameScreenElement = createHtml(`<div class="screen">
  <canvas id="canvas" width="600" height="500"></canvas>
  <button class="button">End Game</button>      
  </div>`);
  this.parentElement.appendChild(this.gameScreenElement);
  this.endGameButtonElement = document.querySelector('.button');
  this.endGameButtonElement.addEventListener('click', this.handleEndGameClick)
  this.ctx = document.getElementById('canvas').getContext('2d');
  this.player = new Player(this.ctx);
  this.player.draw();
  this.target = new Target(this.ctx);
  this.target.draw();
  this.setupKeyBinding ();
  this.render();   
}

Game.prototype.setupKeyBinding = function () {
  var self = this;

  self.handleKeyDown = function (event) {
    var key = event.key;

    switch (key) {
      case "ArrowUp":
        self.player.setSpeed(2);
        self.player.setDirection('up');
        break;
      case "ArrowDown":
        self.player.setSpeed(2);
        self.player.setDirection('down');
        break;
      case "ArrowLeft":
        self.player.setSpeed(2);
        self.player.setDirection('left');
        break;
      case "ArrowRight":
        self.player.setSpeed(2);
        self.player.setDirection('right');
        break;
    }
  }

  self.handleKeyUp = function () {

    self.player.setSpeed(0);

  }

  document.addEventListener('keydown', self.handleKeyDown);
  document.addEventListener('keyup', self.handleKeyUp);
}



Game.prototype.render = function () {
  var self = this;

  self.updateAll();
  self.clear();
  self.drawAll();

  requestAnimationFrame(function () {
    self.render();
  });
}

Game.prototype.updateAll = function () {
  this.player.update();
}
Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, 600, 500);

}
Game.prototype.drawAll = function () {
  this.player.draw();
  this.target.draw();
}





Game.prototype.destroy = function() {
  this.gameScreenElement.remove();
}

Game.prototype.onEnded = function (callback) {
  this.handleEndGameClick = callback;
}

