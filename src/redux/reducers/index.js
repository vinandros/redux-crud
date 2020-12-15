import { combineReducers } from "redux";
import alertReducer from "./alert.Reducer";

import productsReducer from "./product.Reducer";

export default combineReducers({
  products: productsReducer,
  alerts: alertReducer,
});
