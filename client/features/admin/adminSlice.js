import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchAllUsers = createAsyncThunk("allUsers/fetchAllUsers", async () => {
  try {
    const response = await axios.get(`/api/users`);
    const users = response.data;
    return users;
  } catch (error) {
    throw new Error('Could not fetch Users!')
  }
});

export const deleteUserAsync = createAsyncThunk(
  "user/deleteUser",
  async (id) => {
    const { data } = await axios.delete(
      `/api/users/${id}`
    );
    return data;
  }
);

export const editUserAdminAsync = createAsyncThunk(
  "editUserAdmin/editUserAdminAsync",
  async ({ id, firstN, lastN, address, phone, isAdmin }) => {
    try {
      const response = await axios.put(`/api/users/${id}`, { firstN, lastN, address, phone, isAdmin: JSON.parse(isAdmin) }, {
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

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: [{}],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(deleteUserAsync.fulfilled, (state, action) => {
      if (Array.isArray(state)) {
        const deletedState = state.filter((user) => user.id !== action.payload.id);
        return deletedState;
      }
      return state;
    });
    builder.addCase(editUserAdminAsync.fulfilled, (state, action) => {
      const { id, firstN, lastN, address, phone, isAdmin } = action.payload;
      return state.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            firstN,
            lastN,
            address,
            phone,
            isAdmin,
          };
        }
        return user;
      });
    });
  }
})

export const allUsers = (state) => state.allUsers;

export default allUsersSlice.reducer

