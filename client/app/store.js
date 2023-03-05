import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import editUserSlice from '../features/editUser/editUserSlice';
import singleUserSlice from '../features/userPage/userPageSlice';
import allProductsReducer from '../features/products/AllProductsSlice';
import SingleProductSlice from '../features/products/SingleProductSlice';
import allUsersReducer from '../features/admin/adminSlice'
import dataReducer from '../features/dataSlice';
import orderListReducer from '../features/OrderList/OrderListSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    editUser: editUserSlice,
    singleUser: singleUserSlice,
    data: dataReducer,
    allProducts: allProductsReducer,
    allUsers: allUsersReducer,
    SingleProduct: SingleProductSlice,
    orderList: orderListReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
export * from '../features/auth/authSlice';
