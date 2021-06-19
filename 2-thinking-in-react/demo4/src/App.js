import React, { Component } from "react";
import CounterBox from "./components/CounterBox";

class App extends Component {
  constructor() {
    super();
    console.log("App::constructor");
  }
  render() {
    console.log("App::render");
    return (
      <div className="container">
        <hr />
        <div>Thinking-In-React</div>
        <hr />

        <CounterBox />
      </div>
    );
  }
}

export default App;
