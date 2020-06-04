const constants = require('./constants.js');
const Tile = require('./tile.js');

function Board() {
  const board = {
    matrix: BoardConstruct(),
    placeSymbol: (point, symbol) => {
      board.matrix[point.x][point.y].setSymbol(symbol);
      board.matrix[point.x][point.y].setOccupiedToTrue();
    },
    tileIsOccupied: point => {
      return board.matrix[point.x][point.y].isOccupied;
    },
    print() {
      BoardPrinter(board);
    },
  };

  return board;
}

function BoardConstruct() {
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

function BoardPrinter(board) {
  let boardString = '  _   _   _\n\n';

  board.matrix.forEach(row => {
    boardString += '| ';
    row.forEach(tile => {
      boardString += `${tile.symbol} | `;
    });
    boardString += '\n  _   _   _\n\n';
  });
  console.log(boardString);
}

module.exports = Board;
