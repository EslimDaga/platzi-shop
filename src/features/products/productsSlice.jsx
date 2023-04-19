import { getProductsService } from "../../services/products/products";
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await getProductsService();
    return response;
  }
)

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    error: {},
    loading: false,
  },
  extraReducers: builder => {
    builder.addCase(getProducts.pending, (state) => {
      state.error = {};
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  }
});

export default productsSlice.reducer;