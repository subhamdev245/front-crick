import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunks for Product CRUD operations
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/products');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error fetching products');
    }
  }
);

export const createProduct = createAsyncThunk(
  'product/createProduct',
  async (productDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/products', productDetails);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error creating product');
    }
  }
);

export const editProduct = createAsyncThunk(
  'product/editProduct',
  async ({ productId, productDetails }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/products/${productId}`, productDetails);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error editing product');
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (productId, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      return productId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error deleting product');
    }
  }
);

// Initial State
const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error fetching products';
      })
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error creating product';
      })
      .addCase(editProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.products.findIndex((product) => product._id === action.payload._id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error editing product';
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = state.products.filter((product) => product._id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error deleting product';
      });
  },
});

export default productSlice.reducer;

export const selectProducts = (state) => state.product.products;
export const selectProductLoading = (state) => state.product.isLoading;
export const selectProductError = (state) => state.product.error;
