import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("Counter::constructor");
  }
  handleEvent(event, value) {
    // async
    this.setState(
      {
        count: this.state.count + value,
      },
      () => {
        let { onCount } = this.props;
        if (onCount) onCount({ count: this.state.count });
      }
    ); // trigger diffing on virtual DOM
  }
  render() {
    console.log("Counter::render");
    // let count = this.state.count;
    // or
    let { count } = this.state; // de-structuring

    // this.props.inc = -10; // all props are immutable

    let { inc = 1, dec = 1 } = this.props;

    return (
      <div className="mt-3">
        <div className="card card-body">
          <div className="d-flex justify-content-around">
            <button
              onClick={(e) => this.handleEvent(e, inc)}
              className="btn btn-lg btn-primary"
            >
              +&nbsp;{inc}
            </button>
            <div style={{ fontSize: "40px" }}>{count}</div>
            <button
              onClick={(e) => this.handleEvent(e, -dec)}
              className="btn btn-lg btn-danger"
            >
              - &nbsp;{dec}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
