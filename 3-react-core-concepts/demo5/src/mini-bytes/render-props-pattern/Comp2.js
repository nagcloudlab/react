import React, { Component } from "react";
import WithCard from "./WithCard";

class Comp2 extends Component {
  render() {
    return (
      <WithCard
        header="COMP2"
        body={() => {
          return <>this is comp2</>;
        }}
      />
    );
  }
}

export default Comp2;
