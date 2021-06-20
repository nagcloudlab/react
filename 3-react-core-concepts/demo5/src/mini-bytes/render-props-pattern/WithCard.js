import React, { Component } from "react";

class WithCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">{this.props.header}</div>
        <div className="card-body">{this.props.body()}</div>
      </div>
    );
  }
}

export default WithCard;
