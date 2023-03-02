import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from '../features/auth/authSlice';
import editUserSlice from '../features/editUser/editUserSlice';
import singleUserSlice from '../features/userPage/userPageSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    editUser: editUserSlice,
    singleUser: singleUserSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


export default store;
export * from '../features/auth/authSlice';
