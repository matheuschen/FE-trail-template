const prompt = require('prompt-sync')();
const constants = require('./constants.js');
const Point = require('./point.js');

function Player() {
  const player = {
    isWinner: false,
    symbol: ' ',
    move: board => getUserMove(board),
  };
  return player;
}

function getUserMove(board) {
  let userMove = promptPlayer();
  while (inputIsInvalid(userMove, board)) {
    console.log('Please select it again');
    userMove = promptPlayer();
  }
  return userMove;
}

function changeIntoZeroIndex(userMove) {
  userMove.x -= 1;
  userMove.y -= 1;
}

function promptPlayer() {
  console.log('Into which tile do you want to place your piece?');
  const userInput = prompt('Please type in the format: row, column -> ');
  return Point(Number(userInput[0]), Number(userInput[3]));
}

function inputIsInvalid(userMove, board) {
  if (Number.isNaN(userMove.x) || Number.isNaN(userMove.y)) {
    console.log('ERROR: the coordinates you typed are not numbers');
    return true;
  }
  if (
    userMove.x > constants.boardSize ||
    userMove.y > constants.boardSize ||
    userMove.x < 1 ||
    userMove.y < 1
  ) {
    console.log('ERROR: the coordinates you typed are out of the Board');
    return true;
  }
  changeIntoZeroIndex(userMove);

  if (board.tileIsOccupied(userMove)) {
    console.log('ERROR: the tile is already occupied');
    return true;
  }
  return false;
}

module.exports = Player;
