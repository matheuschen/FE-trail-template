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
  if (isNotNumber(userMove)) {
    console.log(
      `Movimento inválido! A sua jogada (${userMove.row}, ${userMove.col}) não são números.`,
    );
    return true;
  }
  if (isOutOfBoard(userMove)) {
    console.log(
      `Movimento inválido! A sua jogada (${userMove.row}, ${userMove.col}) está fora do tabuleiro.`,
    );
    return true;
  }

  if (board.tileIsOccupied(userMove)) {
    console.log(
      `Movimento inválido! Casa já ocupada por ${board.getSymbol(userMove)}!`,
    );
    return true;
  }
  return false;
}

function isNotNumber(userMove) {
  if (Number.isNaN(userMove.row) || Number.isNaN(userMove.col)) {
    return true;
  }
  return false;
}

function isOutOfBoard(userMove) {
  const isOutsideBottomBound = userMove.row > constants.boardSize - 1;
  const isOustideRightBound = userMove.col > constants.boardSize - 1;
  const isOustideTopBound = userMove.row < 0;
  const isOustideLeftBound = userMove.col < 0;

  if (
    isOutsideBottomBound ||
    isOustideTopBound ||
    isOustideRightBound ||
    isOustideLeftBound
  ) {
    return true;
  }
  return false;
}
module.exports = Player;
