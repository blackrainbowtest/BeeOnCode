import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../app/config";
import { addError, addNotification, setLoading } from "../global/globalSlice";

export const login_user = createAsyncThunk(
  "post/loginUser",
  async (obj, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading(true));
      const response = await userAPI.get(
        `?email=${obj.email}&password=${obj.password}`
      );
      dispatch(addNotification("Login success"));
      return response.data[0];
    } catch (error) {
      return dispatch(addError(rejectWithValue(error.message)));
    } finally {
      dispatch(setLoading(false));
    }
  }
);
