const constants = require('./constants.js');
const Point = require('./point.js');
const checkWin = require('./checkWin.js');

function suggestWinnerMoves(player, board) {
  const array = createArrayWithWinnerMoves(player, board);
  let suggestion = 'Movimentos ';
  array.forEach(point => {
    suggestion += `(${point.row}, ${point.col}) `;
  });
  suggestion += 'ganham o jogo!';
  console.log(suggestion);
}

function createArrayWithWinnerMoves(player, board) {
  const array = [];
  for (let row = 0; row < constants.boardSize; row += 1) {
    for (let col = 0; col < constants.boardSize; col += 1) {
      const move = Point(row, col);
      if (isWinnerMove(move, player, board)) {
        array.push(move);
      }
    }
  }
  return array;
}

function isWinnerMove(point, player, board) {
  if (board.tileIsOccupied(point)) {
    return false;
  }

  board.placeSymbol(point, player.symbol);
  if (checkWin(point, board)) {
    board.eraseSymbol(point);
    return true;
  }
  board.eraseSymbol(point);
  return false;
}

module.exports = suggestWinnerMoves;
