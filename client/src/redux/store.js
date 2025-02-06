import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import {recipesReducer } from "./reducer";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk)
);
