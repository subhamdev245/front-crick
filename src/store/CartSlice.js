
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const api = "http://localhost:8097/api/v1"
const initialState = {
  cart: null,
  isLoading: false,
  error: null,
};

export const getCartDetails = createAsyncThunk(
  'cart/getCartDetails',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${api}/cart/get-cart`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const addItemToCart = createAsyncThunk(
  'cart/addItemToCart',
  async ({ productId, quantity = 1 }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${api}/cart/add/${productId}`, { quantity });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const decreaseQuantity = createAsyncThunk(
  'cart/decreaseQuantity',
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${api}/cart/decrease/${productId}`, { quantity });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post('${api}/cart/clear-cart');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(getCartDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload;
      })
      .addCase(getCartDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      
      
      .addCase(addItemToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload;
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      
      
      .addCase(decreaseQuantity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(decreaseQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload;
      })
      .addCase(decreaseQuantity.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      
      // Handle clearCart
      .addCase(clearCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.isLoading = false;
        state.cart = null;
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;

export const selectCart = (state) => state.cart.cart
export const selectCartError = (state) => state.cart.error
export const selectCartLoading = (state) => state.cart.isLoading