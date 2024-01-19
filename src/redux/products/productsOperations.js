import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTU3YWJjZWI1ZjgyMWQ3MGM4YzQwYiIsImlhdCI6MTcwNTY4NzAyMSwiZXhwIjoxNzA1NzY5ODIxfQ.H8a3b1ofd6QxQS4ur3RMu-Ws6rNLdp0iu-3om3SZNdU';
axios.defaults.baseURL = 'https://power-pulse-backend.onrender.com/';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// const params = {
//   searchQuery: '',
//   category: '',
//   allowed: '',
//   page: 1,
//   limit: 100,
// };

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get('/products', params);
      // console.log(response.data);
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