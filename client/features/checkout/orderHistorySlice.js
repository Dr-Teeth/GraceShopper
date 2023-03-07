import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOrderHistory = createAsyncThunk(
  'OrderHistory/fetchOrderHistory',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/api/orders/history`)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const orderHistorySlice = createSlice({
  name: "orderHistory",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchOrderHistory.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchOrderHistory.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.product = action.payload;
    },
    [fetchOrderHistory.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export default orderHistorySlice.reducer;
