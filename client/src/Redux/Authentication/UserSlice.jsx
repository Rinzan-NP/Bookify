// authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        admin: false,
        authenticated: false,
        id: null,
        email: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.admin = action.payload.admin;
            state.authenticated = true;
            state.email = action.payload.email;
            state.id = action.payload.id;
        },
        logout: (state) => {
            state.user = null;
            state.admin = false;
            state.authenticated = false;
            state.email = null;
            state.id = null;
        },
    },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
