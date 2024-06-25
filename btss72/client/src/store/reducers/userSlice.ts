import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../interface/interface";
import axios, { AxiosResponse } from "axios";

const initialState: User[] = [];

// Fetch all users
export const getUser: any = createAsyncThunk(
    'users/getAllUser',
    async () => {
        try {
            const res: AxiosResponse = await axios.get("http://localhost:8080/users");
            return res.data;
        } catch (err) {
            console.error("Lỗi, không thể lấy bản ghi", err);
            throw err;
        }
    }
);

// Add a new user
export const addUser: any = createAsyncThunk(
    "users/addUser",
    async (user) => {
        const res = await axios.post("http://localhost:8080/users", user);
        return res.data;
    }
);

export const updateUser: any = createAsyncThunk(
    "users/updateUser",
    async (user: User) => {
        const { id, ...data } = user;
        const res = await axios.put(`http://localhost:8080/users/${id}`, data);
        return res.data;
    }
);

export const deleteUser: any = createAsyncThunk(
    "users/deleteUser",
    async (id: number) => {
        await axios.delete(`http://localhost:8080/users/${id}`);
        return id;
    }
);

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: initialState
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state, action) => {
                console.log("Loading...");
            })
            .addCase(getUser.fulfilled, (state, action) => {
                console.log("Get user success");
                state.users = action.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                console.error('404');
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
                console.log("User added");
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.users.findIndex(user => user.id === action.payload.id);
                if (index !== -1) {
                    state.users[index] = action.payload;
                    console.log("User updated");
                }
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user.id !== action.payload);
                console.log("User deleted");
            });
    }
});

export const {} = userSlice.actions;
export default userSlice.reducer;
