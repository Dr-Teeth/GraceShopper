import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem(state, action) {
      const { id, name, price } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ id, name, price, quantity: 1 });
      }
      state.total += price;
    },
    removeItem(state, action) {
      const { id, price } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        item.quantity--;
      }
      state.total -= price;
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
