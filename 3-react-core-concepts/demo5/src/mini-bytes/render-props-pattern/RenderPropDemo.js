import React, { Component } from "react";

import Comp1 from "./Comp1";
import Comp2 from "./Comp2";

class RenderPropDemo extends Component {
  render() {
    return (
      <div className="card card-body">
        <Comp1 />
        <br />
        <Comp2 />
      </div>
    );
  }
}

export default RenderPropDemo;
