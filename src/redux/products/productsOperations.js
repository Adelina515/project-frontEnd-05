import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../instance/instance';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params, { rejectWithValue }) => {
    try {
      const response = await instance.get('/products', { params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchCategories = async () => {
  const response = await instance.get('/products/categories');
  return response.data;
};
