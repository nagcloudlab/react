// import React, { Component } from "react";

// class StatelessComp extends Component {
//   render() {
//     return (
//       <div className="card card-body">
//         <div>{this.props.title}</div>
//       </div>
//     );
//   }
// }

// export default StatelessComp;

//----------------------------------------------------------------

import React from "react";

function StatelessComp(props) {
  return (
    <div className="card card-body">
      <div>{props.title}</div>
    </div>
  );
}

export default StatelessComp;

//----------------------------------------------------------------
