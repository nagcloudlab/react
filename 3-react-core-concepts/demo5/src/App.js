import React, { Component } from "react";

import Slack from "./core-concepts/hoc-pattern/Slack";

class App extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <div>react core concepts</div>
        <hr />
        <Slack />
      </div>
    );
  }
}

export default App;
