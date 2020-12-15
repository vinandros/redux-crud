import { combineReducers } from "redux";

import productsReducer from "./product.Reducer";

export default combineReducers({
  products: productsReducer,
});
