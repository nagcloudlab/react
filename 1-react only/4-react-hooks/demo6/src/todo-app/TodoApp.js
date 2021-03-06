import React, { useReducer } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoAppContext from "./TodoAppContext";

const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      let { title } = action;
      let todo = { id: state.length + 1, title: title, completed: false };
      return [...state, todo];
    }
    case "DELETE_TODO": {
      let { id } = action;
      return state.filter((todo) => todo.id !== id);
    }
    default:
      return state;
  }
};

const intialTodos = [{ id: 0, title: "sample-todo", completed: true }];

function TodoApp(props) {
  const [todos, dispatch] = useReducer(todosReducer, intialTodos);

  return (
    <div className="card card-body">
      <TodoAppContext.Provider value={{ dispatch }}>
        <TodoInput />
        <div className="mb-3"></div>
        <TodoList todos={todos} />
      </TodoAppContext.Provider>
    </div>
  );
}

export default TodoApp;
