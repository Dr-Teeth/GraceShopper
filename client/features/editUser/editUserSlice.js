import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const editUserAsync = createAsyncThunk(
  "editUser/editUserAsync",
  async ({ id, fName, lName, address, phone }) => {
    try {
      const { data } = await axios.put(`/api//${id}`, {
        fName: fName,
        lName: lName,
        address: address,
        phone: phone
      });
      return data;
    } catch (error) {
      console.log(error.message)
    }
  }
);

const userSlice = createSlice({
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

export default userSlice.reducer;
