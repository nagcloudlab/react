import React, { Component } from "react";
import Slack from "./components/hoc/Slack";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Slack />
      </div>
    );
  }
}

export default App;
