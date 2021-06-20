import React, { Component } from "react";
import CardWrapper from "./CardWrapper";

class Comp2 extends Component {
  render() {
    return (
      <CardWrapper
        header="COMP2"
        body={() => {
          return <>this is comp2</>;
        }}
      />
    );
  }
}

export default Comp2;
