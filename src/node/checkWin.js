import { constants } from './constants.js';

export default function checkWin(tileSelected, board) {
  if (
    checkIfMoveWinsVertically(tileSelected, board) ||
    checkIfMoveWinsHorizontally(tileSelected, board) ||
    checkIfMoveWinsDiagonallyNEtoSWaxis(tileSelected, board) ||
    checkIfMoveWinsDiagonallyNWtoSEaxis(tileSelected, board)
  ) {
    return true;
  }
  return false;
}

function checkIfMoveWinsVertically(tileSelected, board) {
  const playerSymbol = board.getSymbol(tileSelected);
  const row = tileSelected.getAttribute('row');
  
  for (
    let colIterator = 0;
    colIterator < constants.boardSize;
    colIterator += 1
  ) {

    const tile = document.querySelector('[row="' + row + '"][col="' + colIterator + '"]');
    if (board.getSymbol(tile) !== playerSymbol) {
      return false;
    }
  }
  return true;
}

function checkIfMoveWinsHorizontally(tileSelected, board) {
  const playerSymbol = board.getSymbol(tileSelected);
  const col = tileSelected.getAttribute('col');

  for (
    let rowIterator = 0;
    rowIterator < constants.boardSize;
    rowIterator += 1
  ) {
    const tile = document.querySelector('[col="' + col + '"][row="' + rowIterator + '"]');
    if (board.getSymbol(tile) !== playerSymbol) {
      return false;
    }
  }
  return true;
}

function checkIfMoveWinsDiagonallyNWtoSEaxis(tileSelected, board) {
  if (isNotInTheDiagonalNWtoSE(tileSelected)) {
    return false;
  }

  const playerSymbol = board.getSymbol(tileSelected);
  let rowIterator = 0;
  let colIterator = 0;
  for(;
    rowIterator < constants.boardSize;
    rowIterator++, colIterator++
  ) {
    const tile = document.querySelector('[col="' + colIterator + '"][row="' + rowIterator + '"]');
    if (board.getSymbol(tile) !== playerSymbol) {
      return false;
    }
  }
  return true;
}

function checkIfMoveWinsDiagonallyNEtoSWaxis(tileSelected, board) {
  if (isNotInTheDiagonalNEtoSW(tileSelected)) {
    return false;
  }

  const playerSymbol = board.getSymbol(tileSelected);
  let rowIterator = 0;
  let colIterator = constants.boardSize - 1;
  for(;
    rowIterator < constants.boardSize;
    rowIterator++, colIterator--
  ) {
    
    
    const tile = document.querySelector('[col="' + colIterator + '"][row="' + rowIterator + '"]');
    if (board.getSymbol(tile) !== playerSymbol) {
      return false;
    }
  }
  
  return true;
}

function isNotInTheDiagonalNEtoSW(tileSelected) {
  const row = tileSelected.getAttribute('row');
  const colDiff = (constants.boardSize - 1) - tileSelected.getAttribute('col');
  if (row != colDiff) {
    
    return true;
  }
  return false;
}

function isNotInTheDiagonalNWtoSE(tileSelected) {
  if (tileSelected.getAttribute('row') !== tileSelected.getAttribute('col')) {
    return true;
  }
  return false;
}

