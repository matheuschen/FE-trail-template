const Tile = require('./tile.js');

function BoardConstruct(newSize) {
  const boardHeight = newSize;
  const boardWidth = newSize;
  const matrixOfTiles = [];

  for (let i = 0; i < boardHeight; i += 1) {
    const rowOfTiles = [];
    for (let j = 0; j < boardWidth; j += 1) {
      rowOfTiles.push(Tile());
    }
    matrixOfTiles.push(rowOfTiles);
  }
  return matrixOfTiles;
}

module.exports = BoardConstruct;
