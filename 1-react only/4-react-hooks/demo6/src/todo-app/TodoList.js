import React from "react";
import TodoItem from "./TodoItem";

function renderTodos(todos, dispatch) {
  return todos.map((todo, idx) => {
    return (
      <li className="list-group-item" key={idx}>
        <TodoItem todo={todo} dispatch={dispatch} />
      </li>
    );
  });
}

function TodoList({ todos, dispatch }) {
  return (
    <div>
      <ul className="list-group">{renderTodos(todos, dispatch)}</ul>
    </div>
  );
}

export default TodoList;
