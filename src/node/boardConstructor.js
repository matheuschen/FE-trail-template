const Tile = require('./tile.js');

function BoardConstruct(boardDimension) {
  const matrixOfTiles = [];

  for (let i = 0; i < boardDimension; i += 1) {
    const rowOfTiles = [];
    for (let j = 0; j < boardDimension; j += 1) {

      rowOfTiles.push(Tile());
    }
    matrixOfTiles.push(rowOfTiles);
  }
  return matrixOfTiles;
}

module.exports = BoardConstruct;
