import React, { Component } from "react";
import CardWrapper from "./CardWrapper";

class Comp1 extends Component {
  render() {
    return (
      <CardWrapper
        header="COMP1"
        body={() => {
          return (
            <>
              <p>this is comp1</p>
            </>
          );
        }}
      />
    );
  }
}

export default Comp1;
