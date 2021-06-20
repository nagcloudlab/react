import React, { Component } from "react";
import A from "./A";

import ColorContext from "./ColorContext";

class ContextApp extends Component {
  render() {
    return (
      <div className="card card-body">
        <ColorContext.Provider value={"red"}>
          <A />
        </ColorContext.Provider>
        <ColorContext.Provider value={"green"}>
          <A />
        </ColorContext.Provider>
      </div>
    );
  }
}

export default ContextApp;
