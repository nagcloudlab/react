import React, { useState, useEffect } from "react";

function BtnFunction(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "count-" + count;
  });

  // Rules
  //   const func = () => {
  //     const [s, setS] = useState(0);
  //   };

  //   if (true) {
  //     const [s, setS] = useState(0);
  //   }

  //   for (let i = 0; i < 2; i++) {
  //     const [s, setS] = useState(0);
  //   }

  return (
    <div>
      <div>
        <button
          onClick={(e) => setCount(count + 1)}
          className="btn btn-lg btn-dark"
        >
          {count}
        </button>
      </div>
    </div>
  );
}

export default BtnFunction;
