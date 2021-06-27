import * as api from "../../api/items";

// action creators
export function loadItems(type, size) {
  // let action = { type: "LOAD_ITEMS_SUCCESS", items: [{}, {}] };
  // return action; //  sync action

  return function (dispatch) {
    dispatch({ type: "REQUEST_BEGIN", message: "loading items" });
    api
      .getItems()
      .then((response) => response.data)
      .then((items) => {
        setTimeout(() => {
          dispatch({ type: "REQUEST_FINISHED", message: "" });
          let action = { type: "LOAD_ITEMS_SUCCESS", items };
          dispatch(action)
        }, 3000);
      })
      .catch((err) => {
        dispatch({ type: "REQUEST_FAILED", message: err.message });
      });
  };
}
