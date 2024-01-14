import { createSlice } from '@reduxjs/toolkit';

const filterInitState = {
  searchQuery: '',
  category: '',
  allowed: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,
  reducers: {
    typeQuery(state, action) {
      return (state = { ...state, searchQuery: action.payload });
    },
    pickCategory(state, action) {
      return (state = { ...state, category: action.payload });
    },
    pickAllowed(state, action) {
      return (state = { ...state, allowed: action.payload });
    },
  },
});

export const { typeQuery, pickCategory, pickAllowed } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
