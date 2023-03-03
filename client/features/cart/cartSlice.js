import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }

      state.total += item.price * item.quantity;
    },

    removeItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        if (existingItem.quantity > item.quantity) {
          existingItem.quantity -= item.quantity;
        } else {
          state.items = state.items.filter((i) => i.id !== item.id);
        }

        state.total -= item.price * item.quantity;
      }
    },

    resetCart: (state) => {
      state.items = [];
      state.total = 0;
    },

    setCart: (state, action) => {
      const cartItems = action.payload;
      state.items = cartItems;
      state.total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
  },
});

export const { addItem, removeItem, resetCart, setCart } = cartSlice.actions;

export const addToCart = (item) => async (dispatch, getState) => {
  try {
    const { auth } = getState();
    const response = await axios.post(`/api/cart/${item.id}`, { quantity: item.quantity }, { headers: { authorization: auth.token, 'Content-Type': 'application/json' } });
    dispatch(addItem(item));
  } catch (err) {
    console.error(err);
  }
};

export const removeFromCart = (item) => async (dispatch, getState) => {
  try {
    const { auth } = getState();
    const response = await axios.delete(`/api/cart/${item.id}`, { headers: { authorization: auth.token, 'Content-Type': 'application/json' } });
    dispatch(removeItem(item));
  } catch (err) {
    console.error(err);
  }
};

export const fetchCart = () => async (dispatch, getState) => {
  try {
    const { auth } = getState();
    const response = await axios.get('/api/cart', { headers: { authorization: auth.token, 'Content-Type': 'application/json' } });
    dispatch(setCart(response.data));
  } catch (err) {
    console.error(err);
  }
};

export default cartSlice.reducer;
