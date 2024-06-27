import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { baseUrl } from "../baseUrl/baseUrl";
import { ProductType } from "../interface/interface";

export const getProducts: any = createAsyncThunk<ProductType[], void>(
    'products/getProducts',
    async () => {
        const res: AxiosResponse = await baseUrl.get('products');
        return res.data;
    }
);

export const addProduct: any = createAsyncThunk(
    'products/addProduct',
    async (product: ProductType) => {
        const res: AxiosResponse = await baseUrl.post('products', product);
        return res.data;
    }
)