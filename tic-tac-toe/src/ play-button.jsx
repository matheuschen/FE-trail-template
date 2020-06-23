import React, { Component } from "react";
class PlayButton extends Component {
  render() {
    return (
      <div className="play-button" onClick={this.props.onClickPlayButton}>
        Play Again
      </div>
    );
  }
}

export default PlayButton;
