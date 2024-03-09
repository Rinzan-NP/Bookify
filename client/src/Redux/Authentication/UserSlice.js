import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
    name: "authentication_user",
    initialState: {
        name: null,
        token: null,
        isAdmin: false,
    },
    reducers: {
        set_Authentication: (state, action) => {
            state.name = action.payload.name;
            state.token = action.payload.accessToken;
            state.isAdmin = action.payload.isAdmin;
        },
        logout: (state, action) => {
            state.name = null;
            state.token = null;
            state.isAdmin = false;
        },
    },
});

export const { set_Authentication, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;