import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = [];

export const fetchSingleUser = createAsyncThunk("singleUser/fetchSingleUser", async (id, thunkAPI) => {
  try {
    const response = await axios.get(`/api/users/${id}`);
    const user = response.data;
    console.log(user)
    return user
  } catch (error) {
    console.error(error);
    return thunkAPI.rejectWithValue(error.message)
  }
});

const singleUserSlice = createSlice({
  name: "singleUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
      return action.payload;
    })
  },
})

export const selectUser = state => state.singleUser

export default singleUserSlice.reducer;
