const gameStatus = require('./gameStatus.js');
const checkWin = require('./checkWin.js');
const checkDraw = require('./checkDraw.js');

function Referee() {
  const referee = {
    gameStatus: gameStatus.ONGOING,
    getGameStatus: () => {
      return referee.gameStatus;
    },
    updateGameStatus: (userMove, game) => {
      if (checkWin(userMove, game.board)) {
        referee.gameStatus = gameStatus.WIN;
        game.board.print();
        announceWinner(game);
      }
      if (checkDraw(game.turnCounter.getNumOfPlays())) {
        referee.gameStatus = gameStatus.DRAW;
        game.board.print();
        announceDraw();
      }
    },
  };
  return referee;
}
function announceWinner(game) {
  console.log(
    `Vitória de ${
      game.playerWhoHasTheTurn(game.turnCounter.getTurn()).symbol
    }! Parabéns!`,
  );
}

function announceDraw() {
  console.log('O jogo deu velha!');
}

module.exports = Referee;
