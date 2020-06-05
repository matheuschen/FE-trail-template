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
  };
  return tile;
}

module.exports = Tile;
