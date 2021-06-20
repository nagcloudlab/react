import React, { useState, useEffect, useRef } from "react";

function UseRef(props) {
  const [name, setName] = useState("");
  //const [renderCount, setRenderCount] = useState(1);
  const renderCount = useRef(1);
  const inputRef = useRef("");
  const prevName = useRef("");

  useEffect(() => {
    //setRenderCount((prevRenderCount) => prevRenderCount + 1);
    renderCount.current = renderCount.current + 1; // imp- : will not cause comp to re-render
  });

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  const handleFocus = () => {
    // console.log(inputRef.current);
    inputRef.current.focus();
  };

  return (
    <div className="card card-body">
      <input
        ref={inputRef}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name!"
      />
      <hr />
      <div>Hello {name}</div>
      <div>Hello , PrevName: {prevName.current}</div>

      <div>{renderCount.current}</div>
      <hr />
      <button onClick={handleFocus}>focus</button>
    </div>
  );
}

export default UseRef;
