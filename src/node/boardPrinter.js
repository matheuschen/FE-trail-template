function BoardPrinter(board) {
  let boardString = '  _   _   _\n\n';

  board.matrix.forEach(row => {
    boardString += '| ';
    row.forEach(tile => {
      boardString += `${tile.symbol} | `;
    });
    boardString += '\n  _   _   _\n\n';
  });

  console.log(boardString);
}

module.exports = BoardPrinter;
