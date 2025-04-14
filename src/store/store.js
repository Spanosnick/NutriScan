import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/Login/slice/authSlice';
import systemReducer from "../features/Homepage/slice/systemSlice";
// add other slices here

export const store = configureStore({
    reducer: {
        auth: authReducer,
        system:systemReducer
    },
});
