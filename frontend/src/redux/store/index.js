import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { history } from "../../config/history";
import rootReducer from "../reducer";

const initialState = {};

const store = createStore(
  rootReducer(history),
  initialState,
  applyMiddleware(thunkMiddleware)
);

export default store;
