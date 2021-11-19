import axios from "axios";
import { API_URL } from "../constants/endPointConstant";

export const signIn = (username, password) => {
  return axios.post(API_URL + "signin", { username, password });
};

export const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

export const logout = () => {
  localStorage.removeItem("user");
};
