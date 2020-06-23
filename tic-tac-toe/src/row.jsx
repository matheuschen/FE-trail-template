import React, { Component } from "react";
import Tile from "./tile";
import { constants } from "./constants";
import Coordinate from "./coordinate";

class Row extends Component {
  style = {
    width: `${constants.boardSize * 202}px`,
  };

  buildRowWithTiles = () => {
    const arrOfTiles = [];
    for (let colNum = 0; colNum < constants.boardSize; colNum++) {
      arrOfTiles.push(
        <Tile
          coordinate={Coordinate(this.props.rowNum, colNum)}
          onClickTile={this.props.onClickTile}
          symbol={this.props.matrixRow[colNum]}
        />
      );
    }
    return arrOfTiles;
  };

  getClassName = () => {
    let rowClassName = "row";
    if (this.props.rowNum === 0) {
      rowClassName += " top";
    }

    if (this.props.rowNum === constants.boardSize - 1) {
      rowClassName += " bottom";
    }
    return rowClassName;
  };

  render() {
    const arrOfTiles = this.buildRowWithTiles();
    return (
      <div className={this.getClassName()} style={this.style}>
        {" "}
        {arrOfTiles}{" "}
      </div>
    );
  }
}

export default Row;
