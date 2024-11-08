import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPlayers = createAsyncThunk(
  'player/fetchPlayers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/players');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error fetching players');
    }
  }
);

export const createPlayer = createAsyncThunk(
  'player/createPlayer',
  async (playerDetails, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/players', playerDetails);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error creating player');
    }
  }
);

export const editPlayer = createAsyncThunk(
  'player/editPlayer',
  async ({ playerId, playerDetails }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/players/${playerId}`, playerDetails);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error editing player');
    }
  }
);

export const deletePlayer = createAsyncThunk(
  'player/deletePlayer',
  async (playerId, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/players/${playerId}`);
      return playerId;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Error deleting player');
    }
  }
);

// Initial State
const initialState = {
  players: [],
  isLoading: false,
  error: null,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPlayers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.players = action.payload;
      })
      .addCase(fetchPlayers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error fetching players';
      })
      .addCase(createPlayer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPlayer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.players.push(action.payload);
      })
      .addCase(createPlayer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error creating player';
      })
      .addCase(editPlayer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editPlayer.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.players.findIndex((player) => player._id === action.payload._id);
        if (index !== -1) {
          state.players[index] = action.payload;
        }
      })
      .addCase(editPlayer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error editing player';
      })
      .addCase(deletePlayer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePlayer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.players = state.players.filter((player) => player._id !== action.payload);
      })
      .addCase(deletePlayer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Error deleting player';
      });
  },
});

export default playerSlice.reducer;

export const selectPlayers = (state) => state.player.players;
export const selectPlayerLoading = (state) => state.player.isLoading;
export const selectPlayerError = (state) => state.player.error;
