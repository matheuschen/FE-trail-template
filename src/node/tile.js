function Tile() {
  const tile = {
    symbol: ' ',
    setSymbol(newSymbol) {
      tile.symbol = newSymbol;
    },
  };
  return tile;
}

module.exports = Tile;
