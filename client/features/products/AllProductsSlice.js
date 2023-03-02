import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  status: 'idle',
  error: null,
};

export const fetchProductsAsync = createAsyncThunk(
  'allProducts/fetchProducts',
  async () => {
    try {
      const response = await axios.get('/api/products');
      return response.data;
    } catch (error) {
      throw new Error('Could not fetch products');
    }
  }
);

const AllProductsSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.products = action.payload;
    });
    builder.addCase(fetchProductsAsync.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const selectAllProducts = (state) => state.allProducts;

export default AllProductsSlice.reducer;
