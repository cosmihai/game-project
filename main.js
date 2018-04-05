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
      <h1 class="game-title">Find the mole</h1><h3 id ="instructions">Instructions: <br> ─ use the arrowkeys to move across the garden and try to find the mole</h3>
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
  var canvaWidth = 700;
  var canvaHeight = 500;
  

  function handleGameEnd() {
    destroyGameScreen();
    buildGameOverScreen();
  }

  function buildGameScreen () {
    game = new Game(mainContentElement, canvaWidth, canvaHeight);
    game.onEnded( handleGameEnd);
    game.build();
  }

  function destroyGameScreen() {
    game.destroy();
    
  }

  // -----GAME OVER SCREEN

  var gameOverScreenElement;
  var restartGameButtonElement;
  var finalTimeElement;
  var time;

  function handleRestartClick() {
    destroyGameOverScreen();
    buildStartingScreen();
  }

  function buildGameOverScreen() {

    time = game.counterTime;
    gameOverScreenElement = createHtml(` <div class="screen">
      <h1 class="game-title">Your time : <span id="final-time"> </span> sec.</h1>
      <button class="button">Try again</button>      
    </div>`);
    mainContentElement.appendChild(gameOverScreenElement);
    finalTimeElement = document.getElementById('final-time');
    finalTimeElement.innerHTML = time;
    restartGameButtonElement = document.querySelector('button');
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

