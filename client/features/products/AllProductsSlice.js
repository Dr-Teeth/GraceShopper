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

export const deleteProductAsync = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    const { data } = await axios.delete(
      `/api/products/${id}`
    );
    return data;
  }
);

export const editProductAsync = createAsyncThunk(
  "editProduct/editProductAsync",
  async ({ id, name, description, price, quantity, imageUrl }) => {
    try {
      const response = await axios.put(`/api/products/${id}`, { name, description, price, quantity, imageUrl }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      throw error
    }
  }
);

export const addProductAsync = createAsyncThunk(
  "addProduct/addProductAsync",
  async ({ name, description, price, quantity, imageUrl }) => {
    try {
      const response = await axios.post(`/api/products`, { name, description, price, quantity, imageUrl }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return response.data;
    } catch (error) {
      throw error
    }
  }
);

const AllProductsSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.products = action.payload;
    });
    builder.addCase(fetchProductsAsync.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchProductsAsync.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
    builder.addCase(deleteProductAsync.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    });
    builder.addCase(editProductAsync.fulfilled, (state, action) => {
      return {
        ...state,
        products: [...state.products, action.payload],
      }});
    builder.addCase(addProductAsync.fulfilled, (state, action) => {
      return {
        ...state,
        products: [...state.products, action.payload],
      }});
    }
    });
export const selectAllProducts = (state) => state.allProducts;

export default AllProductsSlice.reducer;
