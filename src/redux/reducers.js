import newsFeed from "./newsFeed/reducer";
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const createReducer = () =>
  combineReducers({
    newsFeed,
    router: routerReducer
  });

export default createReducer;
