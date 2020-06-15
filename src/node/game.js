import Board from './board.js';
import TurnCounter from './turnCounter.js';
import AnnouncerBox from './announcerBox.js';
import Referee from './referee.js';
import Player from './player.js';
import { constants } from './constants.js';

export default function Game() {
  const game = {
    status: 'ongoing',
    winner: undefined,
    board: Board(),
    players: constructArrayOfPlayers(),
    turnCounter: TurnCounter(),
    announcerBox: AnnouncerBox(),
    referee: Referee(),
    
  };
  
  game.onClick = (e) => {
    game.announcerBox.reset();
    const tileSelected = e.target;
    game.currentPlayer = game.players[game.turnCounter.getTurn()];
    if(game.currentPlayer.moveIsValid(tileSelected, game.board)){
      game.board.placeSymbol(tileSelected, game.currentPlayer);
      game.turnCounter.update();
      game.referee.updateGameStatus(tileSelected, game);
      game.endIfCan();
    }
    else{
      game.announcerBox.announce(`Movimento inválido! Casa já ocupada por ${game.board.getSymbol(tileSelected)}!`);
    }
  };

  game.endIfCan = () => {
    if(game.status !== 'ongoing'){
      game.announceResult();
      game.board.removeTilesEventListener();
    }
  };

  game.announceResult = () => {
    if(game.status === 'win'){
      game.announceWinner();
    }
    if(game.status === 'draw'){
      game.announceDraw();
    }
  };

  game.announceWinner = () => {
    game.announcerBox.announce(
      `Vitória de ${
        game.winner
      }! Parabéns!`,);
  };

  game.announceDraw = () => {
    game.announcerBox.announce(
      'O jogo deu velha!'
    );
  };

  return game;
}

function constructArrayOfPlayers() {
  const arrayOfPlayers = [];
  for (let i = 0; i < constants.numOfPlayers; i += 1) {
    arrayOfPlayers.push(Player());
  }
  choosePlayersSymbols(arrayOfPlayers);

  return arrayOfPlayers;
}

function choosePlayersSymbols(arrayOfPlayers) {
  arrayOfPlayers[0].symbol = 'X';
  arrayOfPlayers[0].color = 'plum';
  arrayOfPlayers[1].symbol = 'O';
  arrayOfPlayers[1].color = 'lightgreen';
}

