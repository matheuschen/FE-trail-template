export default function Board() {
  const board = {
    placeSymbol: (tile, player) => {
      tile.innerHTML = player.symbol;
      tile.style.color = player.color;
    },
    tileIsOccupied: tile => {
      if(tile.innerHTML !== ''){
        return true;
      }
      return false;
    },
    getSymbol: tile => {
      return tile.innerHTML;
    },
  };

  return board;
}


