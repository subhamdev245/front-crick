import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOrders = createAsyncThunk(
  'order/fetchOrders',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/orders');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error fetching orders');
    }
  }
);

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (orderDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/orders', orderDetails);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error creating order');
    }
  }
);

export const editOrder = createAsyncThunk(
  'order/editOrder',
  async ({ orderId, orderDetails }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/orders/${orderId}`, orderDetails);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error editing order');
    }
  }
);

export const deleteOrder = createAsyncThunk(
  'order/deleteOrder',
  async (orderId, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/orders/${orderId}`);
      return orderId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error deleting order');
    }
  }
);

// Initial State
const initialState = {
  orders: [],
  isLoading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error fetching orders';
      })
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders.push(action.payload);
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error creating order';
      })
      .addCase(editOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.orders.findIndex((order) => order._id === action.payload._id);
        if (index !== -1) {
          state.orders[index] = action.payload;
        }
      })
      .addCase(editOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error editing order';
      })
      .addCase(deleteOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = state.orders.filter((order) => order._id !== action.payload);
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error deleting order';
      });
  },
});

export default orderSlice.reducer;

export const selectOrders = (state) => state.order.orders;
export const selectOrderLoading = (state) => state.order.isLoading;
export const selectOrderError = (state) => state.order.error;
