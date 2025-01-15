import {createSlice} from "@reduxjs/toolkit";

const initialUser = {email:null,password:null,isLoggedIn:false,lastLoginTimestamp:null,userName:null};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        login: (state, action) => {
            const lastLoginTimestamp = Date.now();
            return {email:action.payload.email,password:action.payload.password,isLoggedIn:true,lastLoginTimestamp};
        },
        logout: (state, action) => {
            return {...state,email:null,password:null,isLoggedIn:false};
        },
    }
});
export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
export const isLoggedIn = (state) => state.user.isLoggedIn;
