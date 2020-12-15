import {
  ADD_NEW_PRODUCT,
  ADD_NEW_PRODUCT_SUCCESS,
  ADD_NEW_PRODUCT_FAIL,
  REQUEST_PRODUCTS,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_FAIL,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
} from "../../types";

const initialState = {
  products: [],
  error: null,
  loading: null,
  productDelete: null,
};
/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_PRODUCTS:
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
        error: false,
      };
    case REQUEST_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: false,
      };
    case REQUEST_PRODUCTS_FAIL:
    case ADD_NEW_PRODUCT_FAIL:
    case DELETE_PRODUCT_FAIL:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productDelete: action.payload,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== state.productDelete
        ),
        productDelete: null,
        error: false,
      };
    default:
      return state;
  }
}
