import React, { Component, PureComponent } from "react";

class Greeting extends PureComponent {
  constructor(props) {
    super();
    console.log("Greeting::constructor");
  }
  render() {
    console.log("Greeting::render");
    return (
      <div className="alert alert-info">
        <div>{this.props.message}</div>
        <hr />
        <div>{new Date().toLocaleTimeString()}</div>
      </div>
    );
  }
  componentDidMount() {
    console.log("Greeting::componentDidMount");
    this.intervalId = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }
  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log("Greeting::shouldComponentUpdate");
  //     return this.props.message !== nextProps.message;
  //   }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Greeting::componentDidUpdate");
    console.log(prevProps);
    console.log(this.props);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log("Greeting::componentWillUnmount");
  }
}

export default Greeting;
