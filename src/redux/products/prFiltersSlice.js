import { createSlice } from '@reduxjs/toolkit';

const filterInitState = {
  searchQuery: '',
  category: '',
  allowed: 'All',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,
  reducers: {
    interFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { interFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
