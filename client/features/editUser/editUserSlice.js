import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const editUserAsync = createAsyncThunk(
  "editUser/editUserAsync",
  async ({ id, firstN, lastN, address, phone }) => {
    try {
      const { data } = await axios.put(`/editUser/${id}`, {
        firstN: firstN,
        lastN: lastN,
        address: address,
        phone: phone
      });
      return data;
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
