import React, { useState } from "react";

import Counter from "./Counter";
import TotalCount from "./TotalCount";

function CounterBox(props) {
  return (
    <div className="card card-body">
      <TotalCount />
      <br />
      <Counter />
      <br />
      <Counter />
    </div>
  );
}

export default CounterBox;
