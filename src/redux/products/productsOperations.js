import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTU3YWJjZWI1ZjgyMWQ3MGM4YzQwYiIsImlhdCI6MTcwNTM0MzY3NiwiZXhwIjoxNzA1NDI2NDc2fQ.4IzIO1qXg2Gzom4iBez5K8oPhGCqXDcQSEOq_57I8OA';
axios.defaults.baseURL = 'https://power-pulse-backend.onrender.com/';
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// const params = {
//   searchQuery: '',
//   category: '',
//   allowed: '',
//   page: 1,
//   limit: 100,
// };

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (filter, { rejectWithValue }) => {
    try {
      const params = { ...filter, limit: 10000 };
      const response = await axios.get('/products', {
        params,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchCategories = async () => {
  const response = await axios.get('/products/categories');
  return response.data;
};
