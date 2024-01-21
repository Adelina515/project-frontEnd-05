
import { createAsyncThunk } from '@reduxjs/toolkit';
/*import axios from 'axios';*/
import { toast } from 'react-toastify';
import instance from '../../instance/instance';


/*const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTU2MTlhMzI5M2U1NzJkZDU0Nzg2YyIsImlhdCI6MTcwNTc5NDQ2NiwiZXhwIjoxNzA1ODc3MjY2fQ.lZS6BC7P1YXTuTFVgzvltJb8224i5FNidbS6dlDqJZg'
axios.defaults.baseURL = 'https://power-pulse-backend.onrender.com/';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;*/

export const fetchAllDiary = createAsyncThunk(
  'fetchAllDiary',
  async (date, { rejectWithValue }) => {
    try {
      const  response  = await instance.get(`/diary/${date}`);
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
      const {data} = await instance.post('/diary/products', productDetails);
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
      const { data } = await instance.delete(`/diary/products/${productId}`);
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
      const { data } = await instance.post('/diary/exercises', exerciseDetails);
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
      const { data } = await instance.delete(`/diary/exercises/${exerciseId}`);
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);
