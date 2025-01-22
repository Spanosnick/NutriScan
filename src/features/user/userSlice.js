import {createSlice} from "@reduxjs/toolkit";

function createToken(username, password, date) {
    const formattedDate = new Date(date).toISOString();
    const combinedString = `${username}:${password}:${formattedDate}`;
    return btoa(combinedString); // Simple Base64 encoding
}
// Check for existing token in localStorage
const savedToken = localStorage.getItem("userToken");
const savedUser = localStorage.getItem("userEmail");

// Initialize state with data from localStorage (if available)
const initialUser = {
    email: savedUser || null,
    password: null,
    isLoggedIn: !!savedToken, // If there's a token, assume the user is logged in
    lastLoginTimestamp: null,
    userName: null,
    token: savedToken || null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        login: (state, action) => {
            const lastLoginTimestamp = Date.now();
            const token = createToken(
                action.payload.email,
                action.payload.password,
                lastLoginTimestamp
            );
            // Save token and email to localStorage
            localStorage.setItem("userToken", token);
            localStorage.setItem("userEmail", action.payload.email);
            return {
                email: action.payload.email,
                password: action.payload.password,
                isLoggedIn: true,
                lastLoginTimestamp,
                userName: action.payload.userName || null,
                token, // Save the generated token
            };
        },
        logout: (state, action) => {
            // Clear localStorage
            localStorage.removeItem("userToken");
            localStorage.removeItem("userEmail");

            // Reset state
            return {
                email: null,
                password: null,
                isLoggedIn: false,
                lastLoginTimestamp: null,
                userName: null,
                token: null,
            };
        },
    }
});
export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
export const isLoggedIn = (state) => state.user.isLoggedIn;
