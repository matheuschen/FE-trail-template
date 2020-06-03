function BoardPrinter(matrix) {
  let boardString = '  _   _   _\n\n';

  matrix.forEach(row => {
    boardString += '| ';
    row.forEach(tile => {
      boardString += `${tile.symbol} | `;
    });
    boardString += '\n  _   _   _\n\n';
  });

  console.log(boardString);
}

module.exports = BoardPrinter;
