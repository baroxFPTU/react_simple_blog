import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: null
  },
  reducers: {
    signIn: (state, action) => {
      const userInfo = action.payload;
      state.user = {...userInfo};
      state.isLoggedIn = !!state.user;
    },
    signOut: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
    }
  }
});

const { reducer: authReducer, actions } = authSlice;
export const {signIn, signOut} = actions;
export default authReducer;