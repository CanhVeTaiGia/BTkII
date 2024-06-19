import { combineReducers, createStore } from "redux";
import { bookReducer } from "./reducers/bookReducer";

export const rootReducer = combineReducers({bookReducer});
export const store = createStore(rootReducer);