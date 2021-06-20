import React from "react";

function TodoItem({ todo, dispatch }) {
  return (
    <div className="d-flex justify-content-around">
      <input type="checkbox" onChange={(e) => {}} checked={todo.completed} />
      <label>{todo.title}</label>
      <button onClick={(e) => dispatch({ type: "DELETE_TODO", id: todo.id })}>
        delete
      </button>
    </div>
  );
}

export default TodoItem;
