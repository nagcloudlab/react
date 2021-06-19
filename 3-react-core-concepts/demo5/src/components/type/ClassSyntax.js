import React, { Component } from "react";

class ClassSyntax extends Component {
  constructor(props) {
    super();
    console.log(props);
    console.log("ClassSyntax::constructor");
  }
  render() {
    console.log(this.props);
    console.log("ClassSyntax::render");
    return (
      <div className="card card-body">
        <div>
          <span>class-syntax react component</span>
        </div>
      </div>
    );
  }
}

export default ClassSyntax;
