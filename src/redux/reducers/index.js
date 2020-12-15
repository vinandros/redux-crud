import { combineReducers } from "redux";
import alertReducer from "./alertReducer";

import productsReducer from "./productReducer";

export default combineReducers({
  products: productsReducer,
  alerts: alertReducer,
});
