import React, { Component } from "react";
import TotalCount from "./TotalCount";
import Counter from "./Counter";

class CounterBox extends Component {
  constructor() {
    super();
    this.state = {
      totalCount: 0,
    };
    console.log("CounterBox::constructor");
  }
  updateTotalCount(e) {
    let { count } = e;
    this.setState({
      totalCount: this.state.totalCount + count,
    });
  }
  render() {
    console.log("CounterBox::render");
    let { totalCount } = this.state;
    return (
      <div className="card">
        <div className="card-header">Counter Box</div>
        <div className="card-body">
          <TotalCount value={totalCount} />

          <Counter
            inc={10}
            dec={10}
            onCount={(e) => this.updateTotalCount(e)}
          />

          <Counter
            inc={20}
            dec={20}
            onCount={(e) => this.updateTotalCount(e)}
          />
        </div>
      </div>
    );
  }
}

export default CounterBox;
