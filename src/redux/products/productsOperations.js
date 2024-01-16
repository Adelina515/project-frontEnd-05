import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTU3YWJjZWI1ZjgyMWQ3MGM4YzQwYiIsImlhdCI6MTcwNTQyNzE2MiwiZXhwIjoxNzA1NTA5OTYyfQ.Y3BN8GkeG4P4n3G9lSX53IFMPA_tvZXWxrXmnbp6F60';
// axios.defaults.baseURL = 'https://power-pulse-backend.onrender.com/';
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
      const params = { ...filter, limit: 500 };
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
