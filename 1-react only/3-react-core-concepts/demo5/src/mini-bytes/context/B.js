import React, { Component } from "react";
import C from "./C";
class B extends Component {
  render() {
    return (
      <div className="card card-body">
        <div style={{ color: this.props.color }}>component B</div>
        <C />
      </div>
    );
  }
}

export default B;
