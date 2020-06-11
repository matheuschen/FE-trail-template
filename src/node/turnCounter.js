const constants = require('./constants.js');

function TurnCounter() {
  const turnCounter = {
    numOfPlays: 0,
    update() {
      turnCounter.numOfPlays += 1;
    },
    getTurn() {
      return turnCounter.numOfPlays % constants.numOfPlayers;
    },
    getNumOfPlays() {
      return this.numOfPlays;
    },
  };

  return turnCounter;
}

module.exports = TurnCounter;
