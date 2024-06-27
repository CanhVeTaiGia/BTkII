import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { baseUrl } from "../baseUrl/baseUrl";

export const getCart: any = createAsyncThunk(
    "cart/getCart",
    async (payload: any, { rejectWithValue }) => {
        const res: AxiosResponse = await baseUrl.get('carts');
        return res.data;
    }

)