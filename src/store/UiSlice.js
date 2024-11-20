import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categorieId: null,
  playerId: null,
};

const UiSlice = createSlice({
  name: "uislice",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categorieId = action.payload; // Use '=' instead of ':'
    },
    setPlayerId: (state, action) => {
      state.playerId = action.payload;
    }
  }
});

export const { setCategoryId, setPlayerId } = UiSlice.actions;
export default UiSlice.reducer;

export const selectCategoryId = store => store.uislice.categorieId
export const selectPlayerId = store => store.uislice.playerId