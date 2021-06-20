import React, { Component } from "react";

import ContextApp from "./mini-bytes/context/ContextApp";

class App extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <div>react core concepts</div>
        <hr />
        <ContextApp />
      </div>
    );
  }
}

export default App;
