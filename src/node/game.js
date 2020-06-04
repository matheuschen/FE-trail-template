const Board = require('./board.js');
const AllPlayers = require('./allPlayers');
const TurnCounter = require('./turnCounter.js');

function Game() {
  const game = {
    board: Board(),
    players: AllPlayers(),
    turnTracker: TurnCounter(),
    start: () => runTheGame(game),
  };
  return game;
}

function runTheGame(game) {
  while (game.players.hasNoWinner()) {
    game.board.print();
    console.log(`Player ${game.turnTracker.getTurn() + 1}`);

    const userMove = game.players
      .whoHasTheTurn(game.turnTracker.getTurn())
      .move(game.board);
    game.board.placeSymbol(
      userMove,
      game.players.whoHasTheTurn(game.turnTracker.getTurn()).symbol,
    );
    game.turnTracker.update();
  }
}

module.exports = Game;
