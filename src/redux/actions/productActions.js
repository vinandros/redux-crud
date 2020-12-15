import Swal from "sweetalert2";
import axiosClient from "../../config/axiosClient";
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
  EDIT_PRODUCT,
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_SUCCESS,
  REQUEST_EDIT_PRODUCT,
} from "../../types";

export const addNewProductAction = (product) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_NEW_PRODUCT,
    });

    try {
      await axiosClient.post("/products", product);

      dispatch({
        type: ADD_NEW_PRODUCT_SUCCESS,
        payload: product,
      });
      Swal.fire("Ready", "Product added successfully.", "success");
    } catch (error) {
      dispatch({
        type: ADD_NEW_PRODUCT_FAIL,
      });
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Something went wrong, try again.",
        confirmButtonColor: "#78c2ad",
        cancelButtonColor: "#ff7851",
      });
    }
  };
};

export const requestProductsAction = () => {
  return async (dispatch) => {
    dispatch({
      type: REQUEST_PRODUCTS,
    });
    try {
      const res = await axiosClient.get("/products");

      dispatch({
        type: REQUEST_PRODUCTS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: REQUEST_PRODUCTS_FAIL,
      });
    }
  };
};

export const deleteProductAction = (productID) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: productID,
    });
    try {
      await axiosClient.delete(`/products/${productID}`);
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
      });
      Swal.fire("Deleted!", "Product has been deleted.", "success");
    } catch (error) {
      dispatch({
        type: DELETE_PRODUCT_FAIL,
      });
    }
  };
};

export const editProductAction = (product) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_PRODUCT,
      payload: product,
    });
  };
};

export const requestEditProductAction = (product) => {
  return async (dispatch) => {
    dispatch({
      type: REQUEST_EDIT_PRODUCT,
    });
    try {
      const res = await axiosClient.put(`/products/${product.id}`, product);
      dispatch({
        type: EDIT_PRODUCT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: EDIT_PRODUCT_FAIL,
        payload: product,
      });
    }
  };
};
