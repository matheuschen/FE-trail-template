export default function Player() {
  const player = {
    symbol: " ",
    moveIsValid(tileSelected, board) {
      if (board.tileIsOccupied(tileSelected)) {
        return false;
      }
      return true;
    },
    getSymbol() {
      return player.symbol;
    },
  };
  return player;
}
