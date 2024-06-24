import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/countReducer";
import randomNumberArrayReducer from "./reducers/randomNumberArrayReducer.ts";
import themeReducer from "./reducers/themeReducer.ts";
import displayReducer from "./reducers/displayReducer.ts";
import menuReducer from "./reducers/menuReducer.ts";
import languageReducer from "./reducers/languageReducer.ts";
import favoritesReducer from "./reducers/favoritesReduce.ts";
import userReducer from "./reducers/userReducer.ts";


export const store = configureStore({
    reducer: {
        countReducer,
        randomNumberArrayReducer,
        themeReducer,
        displayReducer,
        menuReducer,
        languageReducer,
        favoritesReducer,
        userReducer
    }
})