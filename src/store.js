import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducer/authReducer";

/*Intial State */
const initialState = { name: "sundar" };
/* for middleware*/
const middleware = [thunk];

/*register reducers*/
const reducers = combineReducers({ authDetails: authReducer });

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
