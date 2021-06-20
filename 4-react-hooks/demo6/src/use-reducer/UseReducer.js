import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      let value;
      if (action.payload) {
        value = action.payload.value;
      } else {
        value = 1;
      }
      return { count: state.count + value };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function UseReducer(props) {
  const [state, dispatch] = useReducer(reducer, { count: 4 });
  return (
    <div className="">
      <button
        onClick={(e) => dispatch({ type: "decrement" })}
        className="btn btn-lg btn-danger"
      >
        -
      </button>
      <span style={{ fontSize: "40px", margin: "10px" }}>{state.count}</span>
      <button
        onClick={(e) => dispatch({ type: "increment" })}
        className="btn btn-lg btn-primary"
      >
        +
      </button>
      &nbsp;
      <button
        onClick={(e) => dispatch({ type: "increment", payload: { value: 10 } })}
        className="btn btn-lg btn-primary"
      >
        +10
      </button>
    </div>
  );
}

export default UseReducer;
