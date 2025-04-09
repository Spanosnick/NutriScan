import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {auth} from '../../../firebase'; // adjust to your config path
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,} from 'firebase/auth';

const initialState = {
    user: null,
    loading: false, // optional for splash/loading state
    error: null, // optional for error handling
};

// Async Thunks
export const signUpUser = createAsyncThunk(
    'auth/signUpUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return {
                uid: userCredential.user.uid,
                email: userCredential.user.email,
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return {
                uid: userCredential.user.uid,
                email: userCredential.user.email,
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
    await signOut(auth);
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        clearUser(state) {
            state.user = null;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUpUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUpUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
                state.loading = false;
            });
    },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
