import React, { Component } from "react";
class AnnouncerBox extends Component {
  render() {
    return <div className="announcer">{this.props.message}</div>;
  }
}

export default AnnouncerBox;
