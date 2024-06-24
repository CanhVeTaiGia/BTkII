import { createSlice } from "@reduxjs/toolkit";

const initialState: boolean = true;

const displayReducer = createSlice({
    name: "display",
    initialState,
    reducers: {
        toggleDisplay: (state) => !state,
    }
})
export const { toggleDisplay } = displayReducer.actions;
export default displayReducer.reducer;