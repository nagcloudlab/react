import React, { useState } from "react";

function UseState(props) {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("light");

  const handleDecrement = (e) => {
    setCount((prevCount) => prevCount - 1);
  };
  const handleIncrement = (e) => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <div className="">
        <button onClick={handleDecrement} className="btn btn-lg btn-danger">
          -
        </button>
        <span style={{ fontSize: "40px", margin: "10px" }}>{count}</span>
        <button onClick={handleIncrement} className="btn btn-lg btn-primary">
          +
        </button>
        <hr />
        <button onClick={(e) => setTheme("dark")}>change theme</button>
        <span>{theme}</span>
        <hr />
      </div>
    </div>
  );
}

export default UseState;
