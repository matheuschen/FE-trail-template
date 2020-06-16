export default function Player() {
  const player = {
    symbol: ' ',
    color: undefined,
    moveIsValid(tileSelected, board) {
      if (board.tileIsOccupied(tileSelected)) {
        return false;
      }
      return true;
    },  
  };
  return player;
}

