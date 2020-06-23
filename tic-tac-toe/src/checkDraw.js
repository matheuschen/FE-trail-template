import { constants } from "./constants.js";

export default function checkDraw(numOfPlays) {
  const maximumTurns = constants.boardSize * constants.boardSize;

  if (numOfPlays === maximumTurns) {
    return true;
  }
  return false;
}
