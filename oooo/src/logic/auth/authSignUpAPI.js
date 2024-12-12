import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../app/config"

export const getUsers = createAsyncThunk("get/users", async () => {
  try {
    const response = await userAPI.get();
    return response.data;
  } catch (error) {
    return error;
  }
});

export const postUser = createAsyncThunk("post/postUser", async (obj) => {
  try {
    const resp = await userAPI.post('', obj)
    return resp.data;
  } catch (error) {
    return error;
  }
});

// export const login_user = createAsyncThunk(
//   "post/loginUser",
//   async (obj, { dispatch, rejectWithValue }) => {
//     try {
//       dispatch(setLoading(true));
//       const response = await userAPI.get(
//         `?email=${obj.email}&password=${obj.password}`
//       );
//       dispatch(addNotification("Login success"));
//       return response.data[0];
//     } catch (error) {
//       return dispatch(addError(rejectWithValue(error.message)));
//     } finally {
//       dispatch(setLoading(false));
//     }
//   }
// );