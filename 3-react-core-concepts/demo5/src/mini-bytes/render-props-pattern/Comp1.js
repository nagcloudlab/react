import React, { Component } from "react";
import WithCard from "./WithCard";

class Comp1 extends Component {
  render() {
    return (
      <WithCard
        header="COMP1"
        body={() => {
          return <>this is comp1</>;
        }}
      />
    );
  }
}

export default Comp1;
