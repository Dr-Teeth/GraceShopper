import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchAllUsers = createAsyncThunk("allUsers/fetchAllUsers", async () => {
  try {
    const response = await axios.get(`/api/users`);
    const users = response.data;
    return users;
  } catch (error) {
    console.log(error)
  }
});

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: [{}],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      return action.payload;
    })
  }
})

export const allUsers = (state) => state.allUsers;

export default allUsersSlice.reducer

