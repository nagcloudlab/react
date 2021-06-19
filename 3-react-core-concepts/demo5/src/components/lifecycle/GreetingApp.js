import React, { Component } from "react";
import Greeting from "./components/lifecycle/Greeting";
class GreetingApp extends Component {
  state = {
    message: "greetins",
  };
  constructor(props) {
    super();
    console.log("App::constructor");
  }
  changeMessage(message) {
    this.setState({ message: message });
  }
  render() {
    console.log("App::render");
    let { message } = this.state;
    return (
      <div className="container">
        <hr />
        <div>react : core concepts</div>
        <hr />
        <button
          onClick={(e) => this.changeMessage("good morning")}
          className="btn btn-primary"
        >
          GM
        </button>
        &nbsp;
        <button
          onClick={(e) => this.changeMessage("good noon")}
          className="btn btn-primary"
        >
          GN
        </button>
        &nbsp;
        <button
          onClick={(e) => this.changeMessage("good evening")}
          className="btn btn-primary"
        >
          GE
        </button>
        &nbsp;
        <button
          onClick={(e) => this.changeMessage("")}
          className="btn btn-danger"
        >
          remove greeting
        </button>
        <hr />
        {message ? <Greeting message={message} /> : null}
      </div>
    );
  }
  componentDidMount() {
    console.log("App::componentDidMount");
  }
}

export default GreetingApp;
