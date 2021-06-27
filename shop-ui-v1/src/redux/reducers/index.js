import { combineReducers } from "redux";

import { itemsReducer } from "./items";
import { cartReducer } from "./cart";
import { nwStatusReducer } from "./nw-status";

const rootReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
  nwStatus: nwStatusReducer,
});

export default rootReducer;
