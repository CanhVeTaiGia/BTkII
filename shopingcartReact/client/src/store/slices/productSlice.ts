import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../interface/interface";
import { getProducts } from "../../service/product.service";

const initialState: ProductType[] = [];

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: initialState
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, () => {
            console.log("...loading");
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })
        .addCase(getProducts.rejected, () => {
            console.log("...rejected")
        })
        
    }
});
export default productSlice.reducer;