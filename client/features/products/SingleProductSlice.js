import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleProduct = createAsyncThunk(
  "SingleProduct/fetchSingleProduct",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/api/products/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const SingleProductSlice = createSlice({
  name: "SingleProduct",
  initialState: { product: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: {
    [fetchSingleProduct.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchSingleProduct.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.product = action.payload;
    },
    [fetchSingleProduct.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const selectSingleProduct = state => state.SingleProduct.product;


export default SingleProductSlice.reducer;