import { constants } from './constants.js';

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
    buildBoardInHTML: () => {
      const boardDOM = document.querySelector('.board');
      boardDOM.style.width = `${constants.boardSize * 202 - 2}px`;
      boardDOM.style.height = `${constants.boardSize * 202 - 2}px`;
      for(let rowNum = 0; rowNum < constants.boardSize; ++rowNum){
        const row = buildRowDOM(rowNum);
        boardDOM.appendChild(row);
      }
    },
  };
  return board;
}

function buildRowDOM(rowNum){
  const row = document.createElement('div');
  row.classList.add('row');
  row.style.width = `${constants.boardSize * 202 - 2}px`;
  if(rowNum === 0){
    row.classList.add('top');
  }
  if(rowNum === constants.boardSize - 1){
    row.classList.add('bottom');
  }
  
  for(let colNum = 0; colNum < constants.boardSize; ++colNum){
    const tile = buildTileDOM(rowNum, colNum);
    row.appendChild(tile);
  }
  return row;
}

function buildTileDOM(rowNum, colNum) {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  if(colNum === 0) {
    tile.classList.add('left');
  }
  if(colNum === constants.boardSize - 1){
    tile.classList.add('right');
  }
  tile.setAttribute('row', "" + rowNum);
  tile.setAttribute('col', "" + colNum);
  return tile;
}


