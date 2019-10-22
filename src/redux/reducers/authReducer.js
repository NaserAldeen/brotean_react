import {
  SET_CURRENT_USER,
  GET_USER_PROFILE,
  GET_ADDRESS
} from "../actions/actionTypes";

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
    case GET_ADDRESS:
      const existingAddress = state.userProfile.addresses.find(
        add => add.id == payload.id
      );
      if (existingAddress) {
        state.userProfile.addresses = [
          ...state.userProfile.addresses.map(add => {
            if (add.id == payload.id) {
              return payload;
            }
            return add;
          })
        ];
      } else
        state.userProfile.addresses = state.userProfile.addresses.concat(
          payload
        );
      return { ...state, userProfile: { ...state.userProfile } };
    default:
      return state;
  }
};

export default reducer;
