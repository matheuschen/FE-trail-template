const constants = require('./constants.js');
const Point = require('./point.js');

function checkWin(userMove, board) {
  if (
    checkIfMoveWinsVertically(userMove, board) ||
    checkIfMoveWinsHorizontally(userMove, board) ||
    checkIfMoveWinsDiagonallyNEtoSWaxis(userMove, board) ||
    checkIfMoveWinsDiagonallyNWtoSEaxis(userMove, board)
  ) {
    return true;
  }
  return false;
}

function checkIfMoveWinsVertically(userMove, board) {
  const playerSymbol = board.getSymbol(userMove);
  for (
    let pointIterator = Point(userMove.row, 0);
    pointIterator.col < constants.boardSize;
    pointIterator.col += 1
  ) {
    if (board.getSymbol(pointIterator) !== playerSymbol) {
      return false;
    }
  }
  return true;
}

function checkIfMoveWinsHorizontally(userMove, board) {
  const playerSymbol = board.getSymbol(userMove);
  for (
    let pointIterator = Point(0, userMove.col);
    pointIterator.row < constants.boardSize;
    pointIterator.row += 1
  ) {
    if (board.getSymbol(pointIterator) !== playerSymbol) {
      return false;
    }
  }
  return true;
}

function checkIfMoveWinsDiagonallyNWtoSEaxis(userMove, board) {
  if (isNotInTheDiagonalNWtoSE(userMove)) {
    return false;
  }

  const playerSymbol = board.getSymbol(userMove);
  for (
    let pointIterator = Point(0, 0);
    pointIterator.row < constants.boardSize;
    pointIterator.row++, pointIterator.col++
  ) {
    if (board.getSymbol(pointIterator) !== playerSymbol) {
      return false;
    }
  }
  return true;
}

function checkIfMoveWinsDiagonallyNEtoSWaxis(userMove, board) {
  if (isNotInTheDiagonalNEtoSW(userMove)) {
    return false;
  }

  const playerSymbol = board.getSymbol(userMove);
  for (
    let pointIterator = Point(0, constants.boardSize - 1);
    pointIterator.row < constants.boardSize;
    pointIterator.row++, pointIterator.col--
  ) {
    if (board.getSymbol(pointIterator) !== playerSymbol) {
      return false;
    }
  }
  return true;
}

function isNotInTheDiagonalNEtoSW(userMove) {
  const rowDiff = constants.boardSize - userMove.row;
  const colDiff = constants.boardSize - userMove.col;
  if (rowDiff !== colDiff) {
    return true;
  }
  return false;
}

function isNotInTheDiagonalNWtoSE(userMove) {
  if (userMove.row !== userMove.col) {
    return true;
  }
  return false;
}

module.exports = checkWin;
