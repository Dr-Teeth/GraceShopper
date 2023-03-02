import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchSingleProduct = createAsyncThunk(
  "singleProduct",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/vans/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editProductAsync = createAsyncThunk(
  "editProduct",
  async ({ id, name, description, price, imageUrl, quantity }) => {
    const { data } = await axios.put(`/api/vans/${id}`, {
      name,
      description,
      price,
      imageUrl,
      quantity,
    });
    return data;
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(editProductAsync.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.price = action.payload.price;
      state.imageUrl = action.payload.imageUrl;
      state.quantity = action.payload.quantity;
    });
  },
  
});

export const selectSingleProduct = (state) => {
  return state.singleProduct;
};

export default singleProductSlice.reducer;