import React, { Component } from "react";
import Board from "./board";
import Player from "./player.js";
import AnnouncerBox from "./announcerBox";
import { constants } from "./constants";
import PlayButton from "./ play-button.jsx";
import TurnCounter from "./turnCounter";
import checkWin from "./checkWin";
import checkDraw from "./checkDraw";
const OVER = "over";
const ONGOING = "ongoing";

class Game extends Component {
  constructor(props) {
    super(props);
    this.players = constructArrayOfPlayers();
    this.turnCounter = TurnCounter();
    this.status = ONGOING;
  }

  state = {
    matrix: buildNew2DMatrix(),
    announcerBoxMessage: undefined,
  };

  handleTileClick(coordinate) {
    if (this.status === ONGOING) {
      this.setState({ announcerBoxMessage: "" });
      const newMatrix = this.state.matrix.slice();
      const currentPlayer = this.players[this.turnCounter.getTurn()];
      if (this.tileIsAvailable(coordinate)) {
        newMatrix[coordinate.row][coordinate.col] = currentPlayer.getSymbol();
        this.turnCounter.update();
        this.setState({ matrix: newMatrix });
        this.endGameIfCan(coordinate);
      } else {
        this.setState({
          announcerBoxMessage: `Movimento inválido! Casa ocupada por ${
            this.state.matrix[coordinate.row][coordinate.col]
          }!`,
        });
      }
    }
  }

  handlePlayButtonClick() {
    this.setState({ announcerBoxMessage: "" });
    this.turnCounter.reset();
    this.setState({
      matrix: buildNew2DMatrix(),
    });
    this.status = ONGOING;
  }

  tileIsAvailable(coordinate) {
    return this.state.matrix[coordinate.row][coordinate.col] === ""
      ? true
      : false;
  }

  endGameIfCan(coordinate) {
    if (checkWin(coordinate, this.state.matrix)) {
      this.setState({
        announcerBoxMessage: `Parabéns! '${
          this.state.matrix[coordinate.row][coordinate.col]
        }' ganhou o jogo!`,
      });
      this.status = OVER;
    } else if (checkDraw(this.turnCounter.numOfPlays)) {
      this.setState({
        announcerBoxMessage: "O jogo deu velha!",
      });
      this.status = OVER;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Board
          matrix={this.state.matrix}
          onClickTile={(coordinate) => this.handleTileClick(coordinate)}
        ></Board>
        <AnnouncerBox message={this.state.announcerBoxMessage} />
        <PlayButton onClickPlayButton={() => this.handlePlayButtonClick()} />
      </React.Fragment>
    );
  }
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
  arrayOfPlayers[0].symbol = "X";
  arrayOfPlayers[1].symbol = "O";
}

function buildNew2DMatrix() {
  const matrix = [];
  for (let i = 0; i < constants.boardSize; ++i) {
    const array = [];
    for (let j = 0; j < constants.boardSize; ++j) {
      array.push("");
    }
    matrix.push(array);
  }
  return matrix;
}

export default Game;
