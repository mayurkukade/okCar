import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  
  
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
  Cookies.set('cookie',state.token)
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      Cookies.remove("cookie")
    },
  },
});
export const selectUserInfo = (state) => state.auth;
export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
