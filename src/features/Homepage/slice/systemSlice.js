import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
};

const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        changeTheme(state, action) {
            state.theme = action.payload;
        }
    },
});

export const { changeTheme } = systemSlice.actions;
export default systemSlice.reducer;
