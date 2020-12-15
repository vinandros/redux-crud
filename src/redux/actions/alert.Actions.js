import { HIDE_ALERT, SHOW_ALERT } from "../../types";

export const showAlertAction = (msg) => {
  return (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: msg,
    });
  };
};

export const hideAlertAction = () => {
  return (dispatch) => {
    dispatch({
      type: HIDE_ALERT,
    });
  };
};
