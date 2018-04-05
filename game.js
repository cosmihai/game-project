
"use strict";
function Game (parentElement, canvaWidth, canvaHeight) {
  
  this.parentElement = parentElement;
  this.gameScreenElement = null;
  this.endGameButtonElement = null;
  this.handleEndGame = null;
  this.ctx = null;
  this.player = null; 
  this.targetArray = [];
  this.canvaWidth= canvaWidth;
  this.canvaHeight = canvaHeight;
  this.intervalId =0;
  this.counterTime = 0;
 
}

Game.prototype.build = function () {
  
  this.gameScreenElement = createHtml(`<div class="screen"> <canvas id="canvas"></canvas> </div>`);
  this.parentElement.appendChild(this.gameScreenElement);  
  this.canva = document.getElementById('canvas');
  this.canva.width = this.canvaWidth;
  this.canva.height = this.canvaHeight;
  this.ctx = this.canva.getContext('2d');
  this.pointsElement = document.getElementById('points');  
  this.player = new Player(this.ctx, this.canvaWidth, this.canvaHeight);  
  this.collision = false;  
  this.createTargetArray();  
  this.setupKeyBinding ();
  this.setupTimeInterval();
  this.render(); 
  
}

Game.prototype.setupTimeInterval = function(){ 
  this.intervalId = setInterval (function () {
    this.counterTime ++;
  }, 1000)
}


Game.prototype.createTargetArray = function () {
  for (var i=0; i<15; i++) {
    this.target = new Target(this.ctx, this.canvaWidth, this.canvaHeight);
    this.targetArray.push(this.target);
  }
}

Game.prototype.setupKeyBinding = function () {
  var self = this;

  self.handleKeyDown = function (event) {
    var key = event.key;

    switch (key) {
      case "ArrowUp":
        self.player.setSpeed(3);
        self.player.setDirection('up');
        break;
      case "ArrowDown":
        self.player.setSpeed(3);
        self.player.setDirection('down');
        break;
      case "ArrowLeft":
        self.player.setSpeed(3);
        self.player.setDirection('left');
        break;
      case "ArrowRight":
        self.player.setSpeed(3);
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
  if (this.collision === true) {
    return this.handleEndGame();    
  }
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
  this.ctx.clearRect(0, 0, this.canvaWidth, this.canvaHeight);

}
Game.prototype.drawAll = function () {
  for (var i=0; i<this.targetArray.length; i++) {
    this.targetArray[i].draw();
  }
  this.player.draw();
}



Game.prototype.checkColision = function () {
  var self = this;
  //-------check canva's border---------------
  if (self.player.x > self.canvaWidth) {
    self.player.x %= self.canvaWidth;
  } else if (self.player.x < 0) {
    self.player.x = self.canvaWidth - self.player.x;
  } else if (self.player.y > self.canvaHeight) {
    self.player.y %= self.canvaHeight;
  } else if (self.player.y < 0) {
    self.player.y = self.canvaHeight - self.player.y;
  }

  //---------CHECK COLISION--------------------------------------------------------------------------
  var xp = self.player.x+self.player.width/2;
  var yp = self.player.y+self.player.height/2;
  var xt = self.target.x;
  var yt = self.target.y;
  var rt = self.target.radius;
  //---------getting the distance in between-----
  var distance;
  distance = Math.sqrt(Math.pow((xp-xt), 2)+Math.pow((yp-yt), 2))

  //------------------efect of colision-------
  if (distance < rt + self.player.width / 3) {
    self.target.changeColor();
    var sound = new Audio('sounds/bark.mp3');
    // sound.loop = false;
    sound.play(); 
    clearInterval(self.intervalId)
    // ---------  
    setTimeout(function () {
      self.collision = true
    }, 2000)
  } 
}

Game.prototype.destroy = function() {
  this.gameScreenElement.remove();
}

Game.prototype.onEnded = function (callback) {
  this.handleEndGame = callback;
}

