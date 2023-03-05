import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const orderListSlice = createSlice({
  name: 'orderList',
  initialState,
  reducers: {
    fetchOrdersStart(state) {
      state.loading = true;
    },
    fetchOrdersSuccess(state, action) {
      state.loading = false;
      state.orders = action.payload;
    },
    fetchOrdersFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchOrdersStart, fetchOrdersSuccess, fetchOrdersFailure } = orderListSlice.actions;

export default orderListSlice.reducer;
