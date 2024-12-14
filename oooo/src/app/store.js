import { configureStore } from '@reduxjs/toolkit';

// Example slice (you can replace this with your actual slice)
import authReducer from "../logic/auth/authSlice"
import globalReducer from "../logic/global/globalSlice"

const store = configureStore({
  reducer: {
    account: authReducer,
    global: globalReducer,
  },
});

export default store;