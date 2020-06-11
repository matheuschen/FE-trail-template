const constants = require('./constants');

function checkDraw(numOfPlays) {
  const maximumTurns = constants.boardSize * constants.boardSize;

  if (numOfPlays === maximumTurns - 1) {
    return true;
  }
  return false;
}

module.exports = checkDraw;
