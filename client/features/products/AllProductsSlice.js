import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

export const fetchProductsAsync = createAsyncThunk("allProducts", async () => {
  try {
    const { data } = await axios.get(`/api/products`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const addProductsAsync = createAsyncThunk(
  "addProducts",
  async ({ name, address, description, imageUrl }) => {
    try {
      const { data } = await axios.post(`/api/products`, {
        name,
        address,
        description,
        imageUrl,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteProductAsync = createAsyncThunk(
  "deleteProducts",
  async (id) => {
    const { data } = await axios.delete(`/api/products/${id}`);
    return data;
  }
);

const AllProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addProductsAsync.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(deleteProductAsync.fulfilled, (state, action) => {
      const newState = state.filter(
        (product) => product.id !== action.payload.id
      );
      return newState;
    });
  },
});

export const selectProducts = (state) => {
  return state.products;
};
export default AllProductsSlice.reducer;