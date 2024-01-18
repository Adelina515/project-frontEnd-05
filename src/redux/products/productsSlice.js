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
    success: false,
  },
  reducers: {
    handleSuccess(state, action) {
      console.log(state.success);
      console.log(action.payload);
      state.success = action.payload;
    },
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
export const { handleSuccess } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
