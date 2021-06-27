export function cartReducer(state = {}, action) {
  let { type } = action;
  switch (type) {
    case "BUY": {
      let { item, qty } = action;
      let { id } = item;
      let cartLine = state[id];
      if (cartLine) {
        cartLine = { ...cartLine, qty: cartLine.qty + qty };
      } else {
        cartLine = { item, qty: 1 };
      }
      if (cartLine.qty === 0) {
        delete state[id]; // mutate
        return { ...state };
      } else {
        let newCart = { ...state, [id]: cartLine };
        return newCart;
      }
    }
    default:
      return state;
  }
}
