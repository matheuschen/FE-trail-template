const constants = require('./constants.js');
const Player = require('./player.js');

function AllPlayers() {
  const allPlayers = {
    arrayOfPlayers: constructArrayOfPlayers(),
    hasNoWinner: () => checkIfThereNoIsWinner(allPlayers),
    whoHasTheTurn: turn => {
      return allPlayers.arrayOfPlayers[turn];
    },
  };
  return allPlayers;
}

function checkIfThereNoIsWinner(allPlayers) {
  allPlayers.arrayOfPlayers.forEach(player => {
    if (player.isWinner) {
      return false;
    }
  });
  return true;
}

function choosePlayersSymbols(arrayOfPlayers) {
  arrayOfPlayers[0].symbol = 'X';
  arrayOfPlayers[1].symbol = 'O';
}

function constructArrayOfPlayers() {
  const arrayOfPlayers = [];
  for (let i = 0; i < constants.numOfPlayers; i += 1) {
    arrayOfPlayers.push(Player());
  }
  choosePlayersSymbols(arrayOfPlayers);

  return arrayOfPlayers;
}

module.exports = AllPlayers;
