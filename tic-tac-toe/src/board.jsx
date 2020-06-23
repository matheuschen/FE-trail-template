import React, { Component } from "react";
import Row from "./row";
import { constants } from "./constants";

class Board extends Component {
  style = {
    width: `${constants.boardSize * 202}px`,
    height: `${constants.boardSize * 202}px`,
  };

  buildBoardWithRows = () => {
    const arrOfRows = [];
    for (let rowNum = 0; rowNum < constants.boardSize; rowNum++) {
      console.log(this.props);
      arrOfRows.push(
        <Row
          rowNum={rowNum}
          onClickTile={this.props.onClickTile}
          matrixRow={this.props.matrix[rowNum]}
        />
      );
    }

    return (
      <div className="board" style={this.style}>
        {arrOfRows}
      </div>
    );
  };

  render() {
    const board = this.buildBoardWithRows();
    return board;
  }
}

export default Board;
