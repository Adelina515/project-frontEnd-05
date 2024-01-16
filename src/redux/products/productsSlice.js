import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productsOperations';
// const handlePending = state => {
//   state.isLoading = true;
// };
const handleRejected = (state, action) => {
  //   state.isLoading = false;
  state.error = action.payload;
};

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    // isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      // .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchProducts.rejected, handleRejected)
      .addCase(fetchProducts.fulfilled, (state, action) => {
        //   state.isLoading = false;
        state.error = null;
        state.items = action.payload.result;
      }),
});

export const productsReducer = productsSlice.reducer;
