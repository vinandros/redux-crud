import {
  ADD_NEW_PRODUCT,
  ADD_NEW_PRODUCT_SUCCESS,
  ADD_NEW_PRODUCT_FAIL,
} from "../../types";

const initialState = {
  products: [],
  error: null,
  loading: null,
};
/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case ADD_NEW_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
      };
    case ADD_NEW_PRODUCT_FAIL:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
