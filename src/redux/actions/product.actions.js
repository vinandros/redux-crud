import axiosClient from "../../config/axiosClient";
import {
  ADD_NEW_PRODUCT,
  ADD_NEW_PRODUCT_SUCCESS,
  ADD_NEW_PRODUCT_FAIL,
} from "../../types";

export const addNewProductAction = (product) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_NEW_PRODUCT,
    });

    try {
      await axiosClient.post("/productsd/sdf", product);
      setTimeout(() => {
        dispatch({
          type: ADD_NEW_PRODUCT_SUCCESS,
          payload: product,
        });
      }, 3000);
    } catch (error) {
      setTimeout(() => {
        dispatch({
          type: ADD_NEW_PRODUCT_FAIL,
        });
      }, 3000);
    }
  };
};
