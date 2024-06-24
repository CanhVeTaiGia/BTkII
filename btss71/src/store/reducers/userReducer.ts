import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../interface/interface";

const initialState: User[] = [
    {
        id: 1,
        username: "nguyenvananh",
        password: "123456aA@"
    },
    {
        id: 2,
        username: "tranthithao",
        password: "654321bB@"
    },
    {
        id: 3,
        username: "phamminhduc",
        password: "abc123C@"
    },
    {
        id: 4,
        username: "lethikim",
        password: "def456D@"
    },
    {
        id: 5,
        username: "doanvannam",
        password: "ghi789E@"
    }
]

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        addUser: (state, action) => [...state, action.payload],
        deleteUser: (state, action) => state.filter(user => user.id !== action.payload),
        updateUser: (state, action) => state.map(user => user.id === action.payload.id ? action.payload : user)
    }
})
export const { addUser, deleteUser, updateUser } = userReducer.actions;
export default userReducer.reducer;