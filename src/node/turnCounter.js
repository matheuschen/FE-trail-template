const constants = require('./constants.js');

function TurnCounter() {
  const turnCounter = {
    turn: 0,
    update() {
      turnCounter.turn += 1;
      turnCounter.turn %= constants.numOfPlayers;
    },
    getTurn() {
      return turnCounter.turn;
    },
  };

  return turnCounter;
}

module.exports = TurnCounter;
