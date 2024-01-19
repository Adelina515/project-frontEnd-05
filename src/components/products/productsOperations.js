import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTU3YWJjZWI1ZjgyMWQ3MGM4YzQwYiIsImlhdCI6MTcwNTYwMjI3MSwiZXhwIjoxNzA1Njg1MDcxfQ.P-pOa3v_9D2YVOVAswOgzccRe1huxc8BZxBnAFQxn9I';
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
