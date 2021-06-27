import { createStore } from "redux";

// pure function i.e no mutation with state
function countReducer(state = {}, action) {
  console.log("counter-reducer");
  let { type } = action;
  switch (type) {
    case "INCREMENT": {
      let { value } = action;
      return { count: state.count + value };
    }
    case "DECREMENT": {
      let { value } = action;
      return { count: state.count - value };
    }
    default:
      return state;
  }
}

const initialState = {
  count: 0,
};

const store = createStore(
  countReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
