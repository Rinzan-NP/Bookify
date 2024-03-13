// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        admin:false
    },
    reducers: {
        
        setUser: (state, action) => {
            state.user = action.payload.user;
            state.admin = action.payload.admin;
        },
        logout: (state) => {

            state.user = null;
            state.admin = false;
        },
    },
});

export const {  setUser, logout } = authSlice.actions;
export default authSlice.reducer;
