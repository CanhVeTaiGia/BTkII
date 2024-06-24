import { createSlice } from "@reduxjs/toolkit";

const initialCount: number = 0;
const countReducer = createSlice({
    name: "count",
    initialState: initialCount,
    reducers: {
        increment: (state) => state += 1,
        decrement: (state) => state -= 1,
        reset: () => initialCount
    }
})
export const {increment, decrement, reset} = countReducer.actions
export default countReducer.reducer