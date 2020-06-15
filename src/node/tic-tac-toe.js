import Game from './game.js';


const ticTacToe = Game();

let tiles = document.querySelectorAll('.tile');
tiles.forEach(tile => {
  tile.addEventListener('click', (e) => ticTacToe.onClick(e));
});

const button = document.querySelector('#play-button');
button.addEventListener('click', resetGame);

function resetGame() {
  ticTacToe.turnCounter.reset();
  ticTacToe.announcerBox.reset();
  ticTacToe.status = 'ongoing';

  tiles = document.querySelectorAll('.tile');
  tiles.forEach(tile => {
  tile.addEventListener('click', (e) => ticTacToe.onClick(e));
  });
  tiles.forEach(tile => {
    tile.innerHTML = '';
  })
}
