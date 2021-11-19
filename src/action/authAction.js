import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstant";
import { signIn } from "../services/auth.service";
import { setToLocalStorage } from "../utils/localStorageUtils";
import { USER_LOGIN_FAILED } from "./../constants/userConstant";
import { logout } from "./../services/auth.service";

export const authAction =
  (username, password, historyProps) => async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      let { data } = await signIn(username, password);
      setToLocalStorage("user", data);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      historyProps.push("/");
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: "invalid username or password",
      });
    }
  };

export const LogoutAction = (historyProps) => (dispatch) => {
  logout();
  dispatch({ type: USER_LOGOUT });
  historyProps.push("/login");
};
