import checkWin from './checkWin.js';
import checkDraw from './checkDraw.js';

export default function Referee() {
  const referee = {
    updateGameStatus: (tile, game) => {
      if (checkDraw(game.turnCounter.getNumOfPlays())) {
        game.status = 'draw';
      }
      if (checkWin(tile, game.board)) {
        game.winner = game.currentPlayer.symbol;
        game.status = 'win';

      }
    },
    
  };
  return referee;
}



