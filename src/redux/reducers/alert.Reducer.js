import { HIDE_ALERT, SHOW_ALERT } from "../../types";

const initialState = {
  msg: null,
};
/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SHOW_ALERT:
      return { ...state, msg: payload };

    case HIDE_ALERT:
      return { ...state, msg: null };

    default:
      return state;
  }
}
