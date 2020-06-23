import React, { Component } from "react";
import { constants } from "./constants";

class Tile extends Component {
  getClassName = () => {
    let tileClassName = "tile";

    if (this.props.coordinate.col === 0) {
      tileClassName += " left";
    }
    if (this.props.coordinate.col === constants.boardSize - 1) {
      tileClassName += " right";
    }

    return tileClassName;
  };

  render() {
    return (
      <div
        className={this.getClassName()}
        style={{ color: this.props.symbol === "X" ? "plum" : "lightgreen" }}
        onClick={() => this.props.onClickTile(this.props.coordinate)}
      >
        {this.props.symbol}
      </div>
    );
  }
}

export default Tile;
