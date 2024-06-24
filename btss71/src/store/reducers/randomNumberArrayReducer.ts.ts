import { createSlice } from "@reduxjs/toolkit";

const initialArray: number[] = [];
export const randomNumberArrayReducer = createSlice({
    name: "randomNumberArray",
    initialState: initialArray,
    reducers: {
        genarateRandomNumber: (state) => [...state, Math.floor(Math.random() * 10) + 1]
    }
})
export const {genarateRandomNumber} = randomNumberArrayReducer.actions;
export default randomNumberArrayReducer.reducer