
"use strict";
function Game (parentElement, canvaWidth, canvaHeight) {
  
  this.parentElement = parentElement;
  this.gameScreenElement = null;
  this.endGameButtonElement = null;
  this.handleEndGameClick = null;
  this.ctx = null;
  this.player = null;
  this.target = null;
  this.canvaWidth= canvaWidth;
  this.canvaHeight = canvaHeight;
    
}




Game.prototype.build = function () {
  
  this.gameScreenElement = createHtml(`<div class="screen">
  <canvas id="canvas"></canvas>
  <button class="button">End Game</button>      
  </div>`);
  this.parentElement.appendChild(this.gameScreenElement);
  this.endGameButtonElement = document.querySelector('.button');
  this.endGameButtonElement.addEventListener('click', this.handleEndGameClick)
  this.canva = document.getElementById('canvas');
  this.canva.width = this.canvaWidth;
  this.canva.height = this.canvaHeight;
  this.ctx = this.canva.getContext('2d');
  this.player = new Player(this.ctx, this.canvaWidth, this.canvaHeight);
  this.target = new Target(this.ctx, this.canvaWidth, this.canvaHeight);
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
  self.checkColision();
  self.clear();
  self.drawAll();

  requestAnimationFrame(function () {
    self.render();
  });
}

Game.prototype.updateAll = function () {
  this.player.update();
  // this.target.update()
}
Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvaWidth, this.canvaHeight);

}
Game.prototype.drawAll = function () {
  this.target.draw();
  this.player.draw();
}

Game.prototype.checkColision = function () {

  //-------check canva's border---------------
  if (this.player.x > this.canvaWidth) {
    this.player.x %= this.canvaWidth;
  } else if (this.player.x < 0) {
    this.player.x = this.canvaWidth - this.player.x;
  } else if (this.player.y > this.canvaHeight) {
    this.player.y %= this.canvaHeight;
  } else if (this.player.y < 0) {
    this.player.y = this.canvaHeight - this.player.y;
  }

  //---------check colision-------
  var xp = this.player.x+this.player.width/2;
  var yp = this.player.y+this.player.height/2;
  var xt = this.target.x;
  var yt = this.target.y;
  var rt = this.target.radius;
  //---------getting the distance in between-----
  var distance;
  distance = Math.sqrt(Math.pow((xp-xt), 2)+Math.pow((yp-yt), 2))

  //------------------efect of colision-------
    if (distance < rt + this.player.width / 2) {
      console.log('auchhhh')
  }

  
}



Game.prototype.destroy = function() {
  this.gameScreenElement.remove();
}

Game.prototype.onEnded = function (callback) {
  this.handleEndGameClick = callback;
}

