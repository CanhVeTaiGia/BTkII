import { combineReducers, createStore } from "redux";
import { profileReducer } from "./reducers/profileReducer";
import { fruitReducer } from "./reducers/fruitReducer";
import { counterReducer } from "./reducers/counterReducer";
import { randomNumberReducer } from "./reducers/randomNumberReducer";
import { changeStateReducer } from "./reducers/changeState";
import { themeReducer } from "./reducers/themeReducer";

export const rootReducer = combineReducers({profileReducer, fruitReducer, counterReducer, randomNumberReducer, changeStateReducer, themeReducer});

export const store = createStore(rootReducer);