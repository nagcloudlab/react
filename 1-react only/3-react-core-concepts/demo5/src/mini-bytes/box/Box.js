import React, { Component } from "react";

class Box extends Component {
  renderChildren() {
    if (this.props.render) return this.props.render(10);
    return this.props.children.map((child) => {
      return <li className="list-group-item">{child}</li>;
    });
  }
  render() {
    return (
      <div className="card">
        <div className="card-header">box</div>
        <div className="card-body">
          <ul>{this.renderChildren()}</ul>
        </div>
      </div>
    );
  }
}

export default Box;
