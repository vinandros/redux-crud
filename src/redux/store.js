import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export default createStore(
  reducers,
  compose(
    applyMiddleware(thunk),

    typeof window === "object" &&
      window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
