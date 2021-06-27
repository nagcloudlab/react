import React, { useState } from "react";

function Btn({value=0}) {
  const [count, setCount] = useState(value);
  return (
    <div>
      <button title="counter" onClick={(e) => setCount((prev) => prev + 1)} className="btn btn">
        {count}
      </button>
    </div>
  );
}

export default Btn;
