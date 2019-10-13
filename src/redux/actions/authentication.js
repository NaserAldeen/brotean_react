import axios from "axios";
import jwt_decode from "jwt-decode";

import { SET_CURRENT_USER } from "./actionTypes";

// import { setErrors } from "./errors";

export const checkForExpiredToken = () => {
  const token = localStorage.getItem("token");
  let user = null;
  if (token) {
    const currentTimeInSeconds = Date.now() / 1000;
    user = jwt_decode(token);
    if (user.exp >= currentTimeInSeconds) {
      return setCurrentUser(token);
    }
  }
  return logout();
};

export const authorization = (userData, type, history) => {
  return async dispatch => {
    try {
      const res = await axios.post(
        `http://127.0.0.1:8000/api/${type}/`,
        userData
      );
      const user = res.data;
      dispatch(setCurrentUser(user.token));
      history.replace("/");
    } catch (errors) {
      // console.error(errors.response.data);
      //   dispatch(setErrors(errors));
    }
  };
};

export const logout = () => setCurrentUser();

const setCurrentUser = token => {
  return async dispatch => {
    let user;
    if (token) {
      localStorage.setItem("token", token);
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      user = jwt_decode(token);
    } else {
      localStorage.removeItem("token");
      delete axios.defaults.headers.common.Authorization;
      user = null;
    }
    dispatch({
      type: SET_CURRENT_USER,
      payload: user
    });
  };
};
