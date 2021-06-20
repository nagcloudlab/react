import React from "react";

function FunctionSyntax(props) {
  console.log(props);
  console.log("Function::constructor + render");
  return (
    <div className="card card-body">
      <div>
        <span>function-syntax react-component</span>
      </div>
    </div>
  );
}

export default FunctionSyntax;
