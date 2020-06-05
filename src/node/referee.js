const constants = require('./constants.js');
const gameStatus = require('./gameStatus.js');
const winChecker = require('./winChecker.js');
const drawChecker = require('./drawChecker');

function Referee() {
  const referee = {
    getGameStatus: (userMove, board, turn) => {
      if (winChecker(userMove, board)) {
        return gameStatus.WIN;
      }
      if (drawChecker(turn)) {
        return gameStatus.DRAW;
      }

      return gameStatus.ONGOING;
    },
  };
  return referee;
}

module.exports = Referee;
