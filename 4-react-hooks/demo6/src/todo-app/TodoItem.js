import React, { useContext } from "react";
import TodoAppContext from "./TodoAppContext";

function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoAppContext);
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
