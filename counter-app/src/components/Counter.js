import React from "react";

// import { connect } from "react-redux";
import { useDispatch } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  return (
    <div className="card card-body">
      <div className="d-flex d-flex justify-content-around">
        <button onClick={(e) => dispatch({ type: "INCREMENT", value: 1 })} className="btn btn-dark">
          +1
        </button>
        <button onClick={(e) => dispatch({ type: "DECREMENT", value: 1 })} className="btn btn-danger">
          -1
        </button>
      </div>
    </div>
  );
}

export default Counter;


// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: (v) => dispatch({ type: "INCREMENT", value: v }),
//     decrement: (v) => dispatch({ type: "DECREMENT", value: v }),
//   };
// };

// export default connect(null, mapDispatchToProps)(Counter);
