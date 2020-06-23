import Coordinate from "./coordinate";
import { constants } from "./constants";

export default function checkWin(userMove, board) {
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
  const playerSymbol = getSymbol(userMove, board);
  for (
    let pointIterator = Coordinate(userMove.row, 0);
    pointIterator.col < constants.boardSize;
    pointIterator.col += 1
  ) {
    if (getSymbol(pointIterator, board) !== playerSymbol) {
      return false;
    }
  }
  return true;
}

function checkIfMoveWinsHorizontally(userMove, board) {
  const playerSymbol = getSymbol(userMove, board);
  for (
    let pointIterator = Coordinate(0, userMove.col);
    pointIterator.row < constants.boardSize;
    pointIterator.row += 1
  ) {
    if (getSymbol(pointIterator, board) !== playerSymbol) {
      return false;
    }
  }
  return true;
}

function checkIfMoveWinsDiagonallyNWtoSEaxis(userMove, board) {
  if (isNotInTheDiagonalNWtoSE(userMove)) {
    return false;
  }

  const playerSymbol = getSymbol(userMove, board);
  for (
    let pointIterator = Coordinate(0, 0);
    pointIterator.row < constants.boardSize;
    pointIterator.row++, pointIterator.col++
  ) {
    if (getSymbol(pointIterator, board) !== playerSymbol) {
      return false;
    }
  }
  return true;
}

function checkIfMoveWinsDiagonallyNEtoSWaxis(userMove, board) {
  if (isNotInTheDiagonalNEtoSW(userMove)) {
    return false;
  }

  const playerSymbol = getSymbol(userMove, board);
  for (
    let pointIterator = Coordinate(0, constants.boardSize - 1);
    pointIterator.row < constants.boardSize;
    pointIterator.row++, pointIterator.col--
  ) {
    if (getSymbol(pointIterator, board) !== playerSymbol) {
      return false;
    }
  }
  return true;
}

function isNotInTheDiagonalNEtoSW(userMove) {
  const colDiff = constants.boardSize - userMove.col - 1;
  if (userMove.row !== colDiff) {
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

function getSymbol(coordinate, board) {
  return board[coordinate.row][coordinate.col];
}
