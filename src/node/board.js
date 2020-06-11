const constants = require('./constants.js');
const Tile = require('./tile.js');

function Board() {
  const board = {
    matrix: buildBoardWithTiles(),
    placeSymbol: (point, symbol) => {
      board.matrix[point.row][point.col].setSymbol(symbol);
      board.matrix[point.row][point.col].setOccupiedToTrue();
    },
    eraseSymbol: point => {
      board.matrix[point.row][point.col].setSymbol(' ');
      board.matrix[point.row][point.col].setOccupiedToFalse();
    },
    tileIsOccupied: point => {
      return board.matrix[point.row][point.col].isOccupied;
    },
    getSymbol: point => {
      return board.matrix[point.row][point.col].symbol;
    },
    print() {
      printBoard(board);
    },
  };

  return board;
}

function buildBoardWithTiles() {
  const matrixOfTiles = [];

  for (let i = 0; i < constants.boardSize; i += 1) {
    const rowOfTiles = [];
    for (let j = 0; j < constants.boardSize; j += 1) {
      rowOfTiles.push(Tile());
    }
    matrixOfTiles.push(rowOfTiles);
  }
  return matrixOfTiles;
}

function printBoard(board) {
  let boardString = '  0   1   2\n';

  board.matrix.forEach((row, rowIndex) => {
    boardString += `${rowIndex} `;
    row.forEach(tile => {
      boardString += `${tile.symbol}`;
      if (tile !== row[row.length - 1]) {
        boardString += ' | ';
      }
    });

    if (rowIndex !== constants.boardSize - 1) {
      boardString += '\n  - | - | -\n';
    }
  });

  boardString += '\n';
  console.log(boardString);
}

module.exports = Board;
