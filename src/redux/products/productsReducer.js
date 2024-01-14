import { filterReducer } from './prFiltersSlice';
import { productsReducer } from './productsSlice';
import { combineReducers } from '@reduxjs/toolkit';
export const productReducer = combineReducers({
  products: productsReducer,
  filter: filterReducer,
});
// export const reducer = productsReducer;
