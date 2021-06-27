import React from "react";

// import { connect } from "react-redux";
import { useSelector } from "react-redux";

function TotalCount() {
  const count = useSelector((state) => state.count);
  return (
    <div className="card card-body">
      <span style={{ fontSize: "30px" }}>{count}</span>
    </div>
  );
}

export default TotalCount;

// const mapStateToProps = (state) => {
//   return {
//     count: state.count,
//   };
// };

// export default connect(mapStateToProps, null)(TotalCount);
