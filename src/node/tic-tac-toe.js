import Game from './game.js';

const ticTacToe = Game();
ticTacToe.board.buildBoardInHTML();
ticTacToe.board.addTilesEventListener(e => ticTacToe.onClick(e));

const button = document.querySelector('#play-button');
button.addEventListener('click', ticTacToe.reset);


