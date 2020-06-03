const tileGenerator = require('./tile.js');

function boardConstruct(newSize) {
  const boardLength = newSize;
  const boardWidth = newSize;
  const matrixOfTiles = [];

  for (let i = 0; i < boardLength; i += 1) {
    const rowOfTiles = [];
    for (let j = 0; j < boardWidth; j += 1) {
      rowOfTiles.push(tileGenerator());
    }
    matrixOfTiles.push(rowOfTiles);
  }
  return matrixOfTiles;
}

module.exports = boardConstruct;
