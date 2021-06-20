import React, { Component } from "react";
import B from "./B";

import ColorContext from "./ColorContext";

class A extends Component {
  render() {
    return (
      <div className="card card-body">
        <ColorContext.Consumer>
          {(value) => {
            return <div style={{ color: value }}>component A</div>;
          }}
        </ColorContext.Consumer>
        <B />
      </div>
    );
  }
}

export default A;
