import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: null,
  playerId: null,
  sortItem: 'price',   
  sortOrder: 'asc', 
};

const UiSlice = createSlice({
  name: "uislice",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload; // Use '=' instead of ':'
    },
    setPlayerId: (state, action) => {
      state.playerId = action.payload;
    },
    setSortItem: (state, action) => {
      state.sortItem = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  }
});

export const { setCategoryId, setPlayerId,setSortItem,setSortOrder } = UiSlice.actions;
export default UiSlice.reducer;

export const selectCategoryId = store => store.uislice.categoryId
export const selectPlayerId = store => store.uislice.playerId
export const selectSortItem = (store) => store.uislice.sortItem;
export const selectSortOrder = (store) => store.uislice.sortOrder;