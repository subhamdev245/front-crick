import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAddresses = createAsyncThunk(
  'address/fetchAddresses',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/addresses');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error fetching addresses');
    }
  }
);

export const createAddress = createAsyncThunk(
  'address/createAddress',
  async (addressDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/addresses', addressDetails);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error creating address');
    }
  }
);

export const editAddress = createAsyncThunk(
  'address/editAddress',
  async ({ addressId, addressDetails }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/addresses/${addressId}`, addressDetails);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error editing address');
    }
  }
);

export const deleteAddress = createAsyncThunk(
  'address/deleteAddress',
  async (addressId, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/addresses/${addressId}`);
      return addressId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error deleting address');
    }
  }
);

// Initial State
const initialState = {
  addresses: [],
  isLoading: false,
  error: null,
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddresses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addresses = action.payload;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error fetching addresses';
      })
      .addCase(createAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addresses.push(action.payload);
      })
      .addCase(createAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error creating address';
      })
      .addCase(editAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.addresses.findIndex((address) => address._id === action.payload._id);
        if (index !== -1) {
          state.addresses[index] = action.payload;
        }
      })
      .addCase(editAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error editing address';
      })
      .addCase(deleteAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addresses = state.addresses.filter((address) => address._id !== action.payload);
      })
      .addCase(deleteAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error deleting address';
      });
  },
});

export default addressSlice.reducer;

export const selectAddresses = (state) => state.address.addresses;
export const selectAddressLoading = (state) => state.address.isLoading;
export const selectAddressError = (state) => state.address.error;
