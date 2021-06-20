import React from "react";

function TodoInput({ dispatch }) {
  const handleChange = (e) => {
    if (e.nativeEvent.which !== 13) return;
    const title = e.target.value;
    dispatch({ type: "ADD_TODO", title: title });
    e.target.value = "";
  };
  return (
    <div>
      <input placeholder="what needs to be done?" onKeyUp={handleChange} />
    </div>
  );
}

export default TodoInput;
<input />;
