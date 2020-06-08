function Tile() {
  const tile = {
    symbol: ' ',
    setSymbol(newSymbol) {
      tile.symbol = newSymbol;
    },
    isOccupied: false,
    setOccupiedToTrue() {
      tile.isOccupied = true;
    },
    setOccupiedToFalse() {
      tile.isOccupied = false;
    },
  };
  return tile;
}

module.exports = Tile;
