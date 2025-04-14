import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
};

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
            localStorage.getItem("user", JSON.stringify(action.payload));
            state.user = action.payload;
        },
        signOut: (state) => {
            localStorage.removeItem("user");
            state.user = null;
        },
        signUp: (state, action) => {
            localStorage.setItem("user", JSON.stringify(action.payload));
            state.user = action.payload;
        }
    }
});

export const { signIn, signOut, signUp } = AuthSlice.actions;
export default AuthSlice.reducer;
