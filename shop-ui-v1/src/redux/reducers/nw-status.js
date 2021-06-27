export function nwStatusReducer(state = {}, action) {
  let { type } = action;
  switch (type) {
    case "REQUEST_BEGIN": {
      let { message } = action;
      return { message };
    }
    case "REQUEST_FINISHED": {
      let { message } = action;
      return { message };
    }
    case "REQUEST_FAILED": {
      let { message } = action;
      return { message };
    }
    default:
      return state;
  }
}
