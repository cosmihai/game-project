"use strict";

function createHtml(html) {
  var div = document.createElement("div");
  div.innerHTML = html;
  return div.children[0];  
}


function main() {
  
  var mainContentElement = document.getElementById('main-content');
  
  // -----TITLE SCREEN
  
  var startingScreenElement;
  var startButtonElement;

  function handleStartClick () {
    destroyStartingScreen ();
    buildGameScreen ();
  }

  function buildStartingScreen() {
    startingScreenElement = createHtml(`<div class="screen">
      <h1 class="game-title">Ugly Tank</h1>
      <button class="button">PLay</button>      
    </div>`);
    mainContentElement.appendChild(startingScreenElement);
    startButtonElement = document.querySelector('.button');
    startButtonElement.addEventListener('click', handleStartClick);
  }
  
  function destroyStartingScreen () {
    startingScreenElement.remove();
    startButtonElement.removeEventListener('click', handleStartClick);
  }

  // ------GAME SCREEN

  var game;

  function handleGameEnd() {
    destroyGameScreen();
    buildGameOverScreen();
  }

  function buildGameScreen () {
    game = new Game(mainContentElement);
    game.onEnded( handleGameEnd);
    game.build();
  }

  function destroyGameScreen() {
    game.destroy();
    
  }


  // -----GAME OVER SCREEN

  var gameOverScreenElement;
  var restartGameButtonElement;

  function handleRestartClick() {
    destroyGameOverScreen();
    buildStartingScreen();
  }

  function buildGameOverScreen() {
    gameOverScreenElement = createHtml(` <div class="screen">
      <h1 class="game-title">Your score :</h1>
      <button class="button">Try again</button>      
    </div>`);
    mainContentElement.appendChild(gameOverScreenElement);
    restartGameButtonElement = gameOverScreenElement.querySelector('button');
    restartGameButtonElement.addEventListener('click', handleRestartClick);
  }

  function destroyGameOverScreen() {
    gameOverScreenElement.remove();
    restartGameButtonElement.removeEventListener('click', handleRestartClick);
  }

  // ----------start the game--------------

  buildStartingScreen();
}

window.addEventListener("load", main);

