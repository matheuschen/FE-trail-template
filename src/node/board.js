const BoardConstruct = require('./boardConstructor');
const BoardPrinter = require('./boardPrinter.js');
const Point = require('./point.js');

function Board(size) {
  const board = {
    size,
    matrix: BoardConstruct(size),
    placePiece(point, symbol) {
      board.matrix[point.y][point.x].setSymbol(symbol);
    },
    print: () => {
      BoardPrinter(board);
    },
  };

  return board;
}

//TEST
const board = Board(3);
let a = Point(1, 2);
board.placePiece(a, 'X');
a = Point(0, 0);
board.placePiece(a, 'O');
board.print();

module.exports = Board;
