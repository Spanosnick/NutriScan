import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from "../features/user/userSlice.js";
// Create and export the store here.

export const store = configureStore({
    reducer:{
        user: userReducer,
    }
});
