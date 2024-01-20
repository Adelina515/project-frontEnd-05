
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTU3YWJjZWI1ZjgyMWQ3MGM4YzQwYiIsImlhdCI6MTcwNTY4NzAyMSwiZXhwIjoxNzA1NzY5ODIxfQ.H8a3b1ofd6QxQS4ur3RMu-Ws6rNLdp0iu-3om3SZNdU'
axios.defaults.baseURL = 'https://power-pulse-backend.onrender.com/';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const fetchAllDiary = createAsyncThunk(
  'fetchAllDiary',
  async (date, { rejectWithValue }) => {
    try {
      const  response  = await axios.get(`/diary${date}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue(error.message);
    }
  },
);

// едд продукт має відправляти запит на бекенд по додаванню даних
// і за ним гет запит по щоденнику
// і дані по щоденнику записувати в стор
// в щоденнику слідкуєм за стором і оновлюєм дані

export const addProductDiary = createAsyncThunk(
  'addProductDiary',
  async (productDetails, { rejectWithValue }) => {
    try {
      const {data} = await axios.post('/diary/products', productDetails);
      console.log('productDetailsAdd', productDetails);
      toast.success(`Product successfully added to diary!`);
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue(error.message);
    }
  },
);

export const deleteProductDiary = createAsyncThunk(
  'deleteProductDiary',
  async ( productId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/diary/products/${productId}`);
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue(error.message);
    }
  },
);

export const addExercisesDiary = createAsyncThunk(
  'addExercisesDiary',
  async (exerciseDetails,  { rejectWithValue }) => {
   
    try {
      const { data } = await axios.post('/diary/exercises', exerciseDetails);
      return data;
    } catch (error) {
     toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');    }
  },
);

export const deleteExercisesDiary = createAsyncThunk(
  'deleteExercisesDiary',
  async (exerciseId, { rejectWithValue }) => {

    try {
      const { data } = await axios.delete(`/diary/exercises/${exerciseId}`);
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);
