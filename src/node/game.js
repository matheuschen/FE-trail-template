const Board = require('./board.js');
const TurnCounter = require('./turnCounter.js');
const Referee = require('./referee.js');
const Player = require('./player.js');
const constants = require('./constants.js');
const gameStatus = require('./gameStatus.js');
const arrayOfSymbols = require('./tic-tac-toe.js');

function Game() {
  const game = {
    numOfPlays: 0,
    board: Board(),
    players: constructArrayOfPlayers(),
    turnCounter: TurnCounter(),
    referee: Referee(),
    start: () => runTheGame(game),
    playerWhoHasTheTurn: turn => {
      return game.players[turn];
    },
  };
  return game;
}

function runTheGame(game) {
  while (game.referee.getGameStatus() === gameStatus.ONGOING) {
    game.board.print();
    const currentPlayer = game.playerWhoHasTheTurn(game.turnCounter.getTurn());
    const userMove = currentPlayer.move(game.board);
    game.board.placeSymbol(userMove, currentPlayer.symbol);
    game.referee.updateGameStatus(userMove, game);
    game.turnCounter.update();
  }
}

function constructArrayOfPlayers() {
  const arrayOfPlayers = [];
  for (let i = 0; i < constants.numOfPlayers; i += 1) {
    arrayOfPlayers.push(Player());
  }
  choosePlayersSymbols(arrayOfPlayers);

  return arrayOfPlayers;
}

function choosePlayersSymbols(arrayOfPlayers) {
  arrayOfPlayers[0].symbol = constants.arrayOfSymbols[0];
  arrayOfPlayers[1].symbol = constants.arrayOfSymbols[1];
}

module.exports = Game;
