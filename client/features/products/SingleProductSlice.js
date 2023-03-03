import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const SingleProductSlice = createSlice({
  name: 'product',
  initialState: {},
  reducers: {
    setProduct: (state, action) => action.payload,
  },
});

export const { setProduct } = SingleProductSlice.actions;

export const fetchSingleProduct = (id) => async (dispatch) => {
  const response = await axios.get(`/api/products/${id}`);
  dispatch(setProduct(response.data));
};

export default SingleProductSlice.reducer;