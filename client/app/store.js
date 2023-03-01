import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import editUserSlice from '../features/editUser/editUserSlice';

const store = configureStore({
  reducer: { auth: authReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  editUser: editUserSlice
});

export default store;
export * from '../features/auth/authSlice';
