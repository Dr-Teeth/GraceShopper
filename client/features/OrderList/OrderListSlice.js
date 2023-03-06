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
    updateOrder(state, action) {
      const { orderId, quantity } = action.payload;
      const order = state.orders.find(order => order.id === orderId);
      if (order) {
        order.quantity = quantity;
      }
    },
    deleteOrder(state, action) {
      const { orderId } = action.payload;
      state.orders = state.orders.filter(order => order.id !== orderId);
    }
  },
});

export const { fetchOrdersStart, fetchOrdersSuccess, fetchOrdersFailure, updateOrder, deleteOrder } = orderListSlice.actions;

export default orderListSlice.reducer;
