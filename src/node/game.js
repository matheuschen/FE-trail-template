const Board = require('./board.js');
const AllPlayers = require('./allPlayers');
const TurnCounter = require('./turnCounter.js');
const Referee = require('./referee.js');
const WinChecker = require('./winChecker.js');
const DrawChecker = require('./drawChecker');
const gameStatus = require('./gameStatus');

function Game() {
  const game = {
    board: Board(),
    players: AllPlayers(),
    turnTracker: TurnCounter(),
    start: () => runTheGame(game),
    status: gameStatus.ONGOING,
    updateStatus: userMove => {
      if (WinChecker(userMove, game.board)) {
        game.status = gameStatus.WIN;
        game.board.print();
        announceWinner(game);
      }
      if (DrawChecker(game.numOfPlays)) {
        game.status = gameStatus.DRAW;
        game.board.print();
        announceDraw();
      }
    },
    numOfPlays: 0,
  };
  return game;
}

function runTheGame(game) {
  while (game.status === gameStatus.ONGOING) {
    game.numOfPlays += 1;
    game.board.print();
    const userMove = game.players
      .whoHasTheTurn(game.turnTracker.getTurn())
      .move(game.board);
    game.board.placeSymbol(
      userMove,
      game.players.whoHasTheTurn(game.turnTracker.getTurn()).symbol,
    );
    game.updateStatus(userMove);
    game.turnTracker.update();
  }
}

function announceWinner(game) {
  console.log(
    `Vitória de ${
      game.players.whoHasTheTurn(game.turnTracker.getTurn()).symbol
    }! Parabéns!`,
  );
}

function announceDraw() {
  console.log('O jogo deu velha!');
}

module.exports = Game;
