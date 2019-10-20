import { SET_CURRENT_USER, GET_USER_PROFILE } from "../actions/actionTypes";

const initialState = {
  user: null,
  userProfile: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, user: payload };
    case GET_USER_PROFILE:
      return { ...state, userProfile: payload };
    default:
      return state;
  }
};

export default reducer;
