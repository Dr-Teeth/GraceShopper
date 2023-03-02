import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import editUserSlice from '../features/editUser/editUserSlice';
import cartReducer from '../features/cart/cartSlice';
import allProductsReducer from '../features/products/AllProductsSlice';
import singleUserSlice from '../features/userPage/userPageSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    editUser: editUserSlice,
    cart: cartReducer,
    singleUser: singleUserSlice,
    allProducts: allProductsReducer 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;