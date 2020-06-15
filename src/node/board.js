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
    removeTilesEventListener: () => {
      const tiles = document.querySelectorAll('.tile');
      tiles.forEach(tile => {const new_element = tile.cloneNode(true);
                              tile.parentNode.replaceChild(new_element, tile);});
    },
    addTilesEventListener: func => {
      const tiles = document.querySelectorAll('.tile');
      tiles.forEach(tile => {
      tile.addEventListener('click', func);
      });
    },
    reset: () => {
      board.removeTilesEventListener();
      const tiles = document.querySelectorAll('.tile');
      tiles.forEach(tile => {tile.innerHTML = '';});
    },
  };

  return board;
}


