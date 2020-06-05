const constants = require('./constants');

function DrawChecker(numOfPlays) {
  const maximumTurns = constants.boardSize * constants.boardSize;

  if (numOfPlays === maximumTurns) {
    return true;
  }
  return false;
}

module.exports = DrawChecker;
