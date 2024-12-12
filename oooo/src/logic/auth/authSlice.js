import { createSlice } from "@reduxjs/toolkit";
import { getUsers, postUser } from "./authSignUpAPI";
import {login_user} from "./authSignInAPI"


const initialState = {
  user: {},
  users: [],
  loading: false,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    build
      .addCase(postUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(postUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
	  build
      .addCase(login_user.pending, (state) => {
        state.loading = true;
      })
      .addCase(login_user.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login_user.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSuccess } = authSlice.actions;

export default authSlice.reducer;
