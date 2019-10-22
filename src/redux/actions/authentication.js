import axios from "axios";
import jwt_decode from "jwt-decode";

import {
  SET_CURRENT_USER,
  GET_CART,
  GET_USER_PROFILE,
  GET_ADDRESS
} from "./actionTypes";
import { getCart } from "./cart";
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

      if (type === "login") {
        dispatch(setCurrentUser(user.access));
      } else {
        dispatch(authorization(userData, "login", history));
      }
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
      dispatch(getCart());
      dispatch(getProfile());
    } else {
      localStorage.removeItem("token");
      delete axios.defaults.headers.common.Authorization;
      user = null;
      dispatch({ type: GET_CART, payload: [] });
    }
    dispatch({
      type: SET_CURRENT_USER,
      payload: user
    });
  };
};

const getProfile = () => {
  return async dispatch => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/profile/`);
      const userProfile = res.data;
      dispatch({ type: GET_USER_PROFILE, payload: userProfile });
    } catch (errors) {
      // console.error(errors.response.data);
    }
  };
};

export const updateProfile = obj => {
  return async dispatch => {
    try {
      const res = await axios.put(`http://127.0.0.1:8000/api/profile/`, obj);
      const userProfile = res.data;
      dispatch({ type: GET_USER_PROFILE, payload: userProfile });
    } catch (errors) {
      // console.error(errors.response.data);
    }
  };
};

export const updateCreateAddress = obj => {
  return async dispatch => {
    try {
      let res;
      if (obj.id == -1)
        res = await axios.post(`http://127.0.0.1:8000/api/address/`, obj);
      else res = await axios.put(`http://127.0.0.1:8000/api/address/`, obj);
      const address = res.data;
      dispatch({ type: GET_ADDRESS, payload: address });
    } catch (errors) {
      // console.error(errors.response.data);
    }
  };
};
