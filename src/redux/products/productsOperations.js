import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://power-pulse-backend.onrender.com/';

const params = {
  searchQuery: '',
  category: '',
  allowed: '',
  page: 1,
  limit: 8,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/products', {
        params,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
