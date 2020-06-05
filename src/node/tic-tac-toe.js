const Game = require('./game.js');
const prompt = require('prompt-sync')();

const ticTacToe = Game();
ticTacToe.start();
promptNewGame();

function promptNewGame() {
  const userInput = prompt('Jogar novament? y/n');
  if (userInput === 'y') {
    console.log('New game!');
  }
  if (userInput === 'n') {
    console.log('Bye');
  }
  console.log('error');
}
