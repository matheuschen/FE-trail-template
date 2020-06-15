import Game from './game.js';


const ticTacToe = Game();

ticTacToe.board.addTilesEventListener(e => ticTacToe.onClick(e));

const button = document.querySelector('#play-button');
button.addEventListener('click', resetGame);

function resetGame() {
  ticTacToe.turnCounter.reset();
  ticTacToe.announcerBox.reset();
  ticTacToe.board.reset();
  ticTacToe.status = 'ongoing';
  ticTacToe.board.addTilesEventListener(e => ticTacToe.onClick(e));
}
