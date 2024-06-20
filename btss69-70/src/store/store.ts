import { combineReducers, createStore } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import { productReducer } from "./reducers/productReducer";

export const rootReducer = combineReducers({
    cartReducer,
    productReducer
})
export const store = createStore(rootReducer);