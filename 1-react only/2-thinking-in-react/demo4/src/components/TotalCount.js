import React, { Component } from "react";

class TotalCount extends Component {
  constructor() {
    super();
    console.log("TotalCount::constructor");
  }
  render() {
    console.log("TotalCount::render");
    let { value } = this.props;
    return (
      <div className="card card-body">
        <span style={{ fontSize: "50px" }}>{value}</span>
      </div>
    );
  }
}

export default TotalCount;
