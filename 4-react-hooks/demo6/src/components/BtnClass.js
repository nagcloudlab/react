import React, { Component } from "react";

class BtnClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // this.handleEvent = this.handleEvent.bind(this);
  }
  logic() {}
  handleEvent(event) {
    let { count } = this.state;
    this.setState({ count: count + 1 });
  }
  componentDidMount() {
    document.title = `count-${this.state.count}`;
  }
  componentDidUpdate() {
    document.title = `count-${this.state.count}`;
  }
  render() {
    let { count } = this.state;
    return (
      <div>
        <div>
          <button
            onClick={(e) => this.handleEvent(e)}
            className="btn btn-lg btn-dark"
          >
            {count}
          </button>
        </div>
      </div>
    );
  }
}

export default BtnClass;
