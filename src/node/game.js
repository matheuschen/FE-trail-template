const Board = require('./board.js');
const GeneratePlayers = require('./player');

function Game(numOfPlayers, boardSize) {
  const game = {
    board: undefined,
    players: undefined,
  };
  game.players = GeneratePlayers(numOfPlayers);
  game.board = Board(boardSize);
  return game;
}

module.exports = Game;
