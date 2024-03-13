// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        admin:false,
        authenticated:false,
    },
    reducers: {
        
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.admin = action.payload.admin;
            state.authenticated = true;
        },
        logout: (state) => {

            state.user = null;
            state.admin = false;
            state.authenticated = false;
        },
    },
});

export const {  setUser, logout } = authSlice.actions;
export default authSlice.reducer;
