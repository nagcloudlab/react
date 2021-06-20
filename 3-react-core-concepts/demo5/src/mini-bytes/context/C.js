import React, { Component } from "react";
import ColorContext from "./ColorContext";
class C extends Component {
  render() {
    return (
      <div className="card card-body">
        <ColorContext.Consumer>
          {(value) => {
            return <div style={{ color: value }}>component C</div>;
          }}
        </ColorContext.Consumer>
      </div>
    );
  }
}

export default C;
