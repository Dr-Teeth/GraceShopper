import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = [];

export const fetchSingleUser = createAsyncThunk("singleUser/fetchSingleUser", async (id) => {
  try {
    const response = await axios.get(`/api/users/${id}`);
    const user = response.data;
    return user
  } catch (error) {
    throw new error;
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
