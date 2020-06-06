const Game = require('./game.js');
const prompt = require('prompt-sync')();

let ticTacToe = Game();
ticTacToe.start();
while (WantsToPlayAgain()) {
  ticTacToe = Game();
  ticTacToe.start();
}

function WantsToPlayAgain() {
  console.log('Jogar novament? y/n');
  const userInput = prompt();
  if (userInput === 'y') {
    return true;
  }
  if (userInput === 'n') {
    return false;
  }
  return false;
}
