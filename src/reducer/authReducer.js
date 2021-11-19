import { getFromLocalStorage } from "./../utils/localStorageUtils";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILED,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./../constants/userConstant";
const user = JSON.parse(getFromLocalStorage("user"));
const initialState = user
  ? { isLoggedIn: true, user: user }
  : { isLoggedIn: false, user: null };
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { isLoggedIn: false, loading: true };
    case USER_LOGIN_SUCCESS:
      return { isLoggedIn: true, user: action.payload, loading: false };
    case USER_LOGIN_FAILED:
      return { isLoggedIn: false, error: action.payload, loading: false };
    case USER_LOGOUT:
      return { isLoggedIn: false, loading: false, user: null };
    default:
      return { ...state };
  }
};
