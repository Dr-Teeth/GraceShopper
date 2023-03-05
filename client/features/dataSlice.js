import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    users: [],
    products: [],
    orders: []
  },
  reducers: {
    addUser: (state, action) => {
      // add a user to the users array
      state.users.push(action.payload);
    },
    addProduct: (state, action) => {
      // add a product to the products array
      state.products.push(action.payload);
    },
    addOrder: (state, action) => {
      // add an order to the orders array
      state.orders.push(action.payload);
    },
    updateUser: (state, action) => {
      // update a user in the users array
      const userIndex = state.users.findIndex(user => user.id === action.payload.id);
      if (userIndex !== -1) {
        state.users[userIndex] = action.payload;
      }
    },
    updateProduct: (state, action) => {
      // update a product in the products array
      const productIndex = state.products.findIndex(product => product.id === action.payload.id);
      if (productIndex !== -1) {
        state.products[productIndex] = action.payload;
      }
    },
    updateOrder: (state, action) => {
      // update an order in the orders array
      const orderIndex = state.orders.findIndex(order => order.id === action.payload.id);
      if (orderIndex !== -1) {
        state.orders[orderIndex] = action.payload;
      }
    },
    removeUser: (state, action) => {
      // remove a user from the users array
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    removeProduct: (state, action) => {
      // remove a product from the products array
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    removeOrder: (state, action) => {
      // remove an order from the orders array
      state.orders = state.orders.filter(order => order.id !== action.payload);
    },
    resetData: (state) => {
      // reset all data to initial state
      state.users = [];
      state.products = [];
      state.orders = [];
    }
  }
});

export const {
  addUser,
  addProduct,
  addOrder,
  updateUser,
  updateProduct,
  updateOrder,
  removeUser,
  removeProduct,
  removeOrder,
  resetData
} = dataSlice.actions;

export default dataSlice.reducer;