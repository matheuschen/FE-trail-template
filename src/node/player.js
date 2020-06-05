const prompt = require('prompt-sync')();
const constants = require('./constants.js');
const Point = require('./point.js');

function Player() {
  const player = {
    isWinner: false,
    symbol: ' ',
    move(board) {
      let userMove = player.promptMove();
      while (inputIsInvalid(userMove, board)) {
        userMove = player.promptMove();
      }
      return userMove;
    },
    promptMove() {
      console.log(`Vez de ${player.symbol}. Qual sua jogada? (linha, coluna)`);
      const userInput = prompt();
      return Point(Number(userInput[0]), Number(userInput[3]));
    },
  };
  return player;
}

function inputIsInvalid(userMove, board) {
  if (Number.isNaN(userMove.x) || Number.isNaN(userMove.y)) {
    console.log('Movimento invalido!');
    return true;
  }
  if (
    userMove.x > constants.boardSize - 1 ||
    userMove.y > constants.boardSize - 1 ||
    userMove.x < 0 ||
    userMove.y < 0
  ) {
    console.log('Movimento invalido!');
    return true;
  }

  if (board.tileIsOccupied(userMove)) {
    console.log(`Casa já ocupada por ${board.getSymbol(userMove)}!`);
    return true;
  }
  return false;
}

module.exports = Player;
