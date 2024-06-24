import { createSlice } from "@reduxjs/toolkit";
import { FavoriteInterface } from "../../interface/interface";

const initialState: FavoriteInterface[] = [
    {
        id: 1,
        name: 'Nguyễn Văn A',
        status: true,
    },
    {
        id: 2,
        name: 'Trần Thị B',
        status: true,
    },
    {
        id: 3,
        name: 'Lê Văn C',
        status: false,
    },
    {
        id: 4,
        name: 'Phạm Thị D',
        status: true,
    },
    {
        id: 5,
        name: 'Hoàng Văn E',
        status: false,
    },
];

const favoritesReducer = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        changeFavoritesStatus: (state, actions) => {
            return state.filter((item) => 
                item.id === actions.payload? 
                { ...item, status: !item.status }
                : item
            )
        }
    }
})
export const { changeFavoritesStatus } = favoritesReducer.actions;
export default favoritesReducer.reducer;