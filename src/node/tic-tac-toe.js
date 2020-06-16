import Game from './game.js';


const ticTacToe = Game();
ticTacToe.board.addTilesEventListener(e => ticTacToe.onClick(e));

const button = document.querySelector('#play-button');
button.addEventListener('click', resetGame);

function resetGame() {
  ticTacToe.reset();
}
