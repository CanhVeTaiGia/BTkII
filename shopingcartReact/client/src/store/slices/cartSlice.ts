import { createSlice } from "@reduxjs/toolkit";
import { CartType } from "../../interface/interface";
import { getCart } from "../../service/cart.service";

const initialState: CartType[] = [];

const cartSlice = createSlice({
    name: "carts",
    initialState: {
        carts: initialState
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCart.pending ,() => {
            console.log('...loading');
        })
        .addCase(getCart.fulfilled, (state, action) => {
            state.carts = action.payload;
        })
        .addCase(getCart.rejected ,() => {
            console.log('...rejected');
        })
    }
});
export default cartSlice.reducer;