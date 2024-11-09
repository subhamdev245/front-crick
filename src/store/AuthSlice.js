import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8097/api/v1/user/register', credentials);
      return response.data; 
    } catch (error) {
      
      return rejectWithValue(error.response?.data?.message || 'Login failed');
    }
  }
);

export const register = createAsyncThunk(
  'user/register',
  async (userDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8097/api/v1/user/register', userDetails);
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed';
      return rejectWithValue(message);
    }
  }
);


// Initial state for the slice
const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  isAdmin: false, 
  registerSuccess : false
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user; 
        state.isAdmin = action.payload.user.role === 'ADMIN'; 
        localStorage.setItem('token', action.payload.token); 
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Login failed'; 
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.registerSuccess = true; 
        state.error = null; 
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Registration failed'; 
      });
  },
});


export default authSlice.reducer;

// Selectors
export const selectAuth = (state) => state.auth;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;
export const selectIsAdmin = (state) => state.auth.isAdmin; 
export const selectAuthLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;
export const selectRegisterSuccess = (state) => state.auth.registerSuccess;