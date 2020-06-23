import { constants } from './constants.js';

export default function TurnCounter() {
  const turnCounter = {
    numOfPlays: 0,
    update() {
      turnCounter.numOfPlays += 1;
    },
    getTurn() {
      return turnCounter.numOfPlays % constants.numOfPlayers;
    },
    getNumOfPlays() {
      return turnCounter.numOfPlays;
    },
    reset(){
      turnCounter.numOfPlays = 0;
    },
    
  };

  return turnCounter;
}


