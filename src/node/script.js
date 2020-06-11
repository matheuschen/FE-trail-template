const tiles = document.querySelectorAll('.tile');

console.log(tiles);

tiles.forEach(tile => {
  tile.addEventListener('click', setSymbolToX);
  console.log(tile);
});

let turnCounter = 0;
const arrayOfSymbols = ['X', 'O'];
const arrayOfColors = ['plum', 'lightgreen'];
function setSymbolToX(e) {
  const tile = e.target;
  tile.innerHTML = getPlayerSymbol(turnCounter);
  tile.style.color = getPlayerColor(turnCounter);
  turnCounter += 1;
}

function getPlayerSymbol(counter) {
  return arrayOfSymbols[counter % 2];
}

function getPlayerColor(counter) {
  return arrayOfColors[counter % 2];
}

const button = document.querySelector('#play-button');
button.addEventListener('click', resetGame);

function resetGame() {
  tiles.forEach(tile => {
    console.log(tile.innerHTML);
    tile.innerHTML = '';
  });
  turnCounter = 0;
}
