const BoardConstruct = require('./boardConstructor');
const BoardPrinter = require('./boardPrinter.js');
// const Point = require('./point.js');

function Board(size) {
  const board = {
    size,
    matrix: [],
    updateBoard(point, symbol) {
      board.matrix[point.y][point.x].setSymbol(symbol);
    },
    print: () => {
      BoardPrinter(board.matrix);
    },
    resetBoard: newSize => {
      board.matrix = BoardConstruct(newSize);
    },
  };

  board.matrix = BoardConstruct(size);
  return board;
}

/* const board = BoardGenerator(3);
const a = Point(1, 2);
board.updateBoard(a, 'X');
board.print(); */
module.exports = Board;
