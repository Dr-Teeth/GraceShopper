import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const editUserAsync = createAsyncThunk(
  "editUser/editUserAsync",
  async ({ id, firstN, lastN, address, phone }) => {
    try {
      const response = await axios.put(`/api/users/${id}`, { firstN, lastN, address, phone }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      throw error
    }
  }
);

const editUserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(editUserAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
})


export const selectUser = (state) => state.user

export default editUserSlice.reducer;
