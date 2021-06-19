// import React, { Component } from "react";

// class StatefulComp extends Component {
//   //   state = {
//   //     message: "greetings",
//   //   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       message: "greetings",
//     };
//   }

//   render() {
//     return (
//       <div className="card card-body">
//         <div>stateful comp</div>
//         <br />
//         <div>{this.state.message}</div>
//         <button onClick={(e) => this.setState({ message: "hello GL" })}>
//           change greeting
//         </button>
//       </div>
//     );
//   }
// }

// export default StatefulComp;

//----------------------------------------------------------------

import React, { useState } from "react";

function StatefulComp(props) {
  const [message, setMessage] = useState("greetings");
  return (
    <div className="card card-body">
      <div>stateful comp</div>
      <br />
      <div>{message}</div>
      <button onClick={(e) => setMessage("hello GL")}>change greeting</button>
    </div>
  );
}

export default StatefulComp;
