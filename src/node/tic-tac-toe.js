const Game = require('./game.js');
const promptCustomizeSymbols = require('./promptCustomizeSymbols.js');
const prompt = require('prompt-sync')();

let userWantsToPlay = true;
while (userWantsToPlay) {
  promptCustomizeSymbols();
  const ticTacToe = Game();
  ticTacToe.start();
  userWantsToPlay = promptPlayAgain();
}

function promptPlayAgain() {
  console.log('Jogar novament? y/n');
  const userInput = prompt();
  if (userInput === 'y') {
    return true;
  }
  if (userInput === 'n') {
    return false;
  }

  console.log('Comando inválido.');
  return false;
}
