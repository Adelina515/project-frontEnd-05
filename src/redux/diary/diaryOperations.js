
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


axios.defaults.baseURL = 'https://power-pulse-backend.onrender.com/';


export const fetchAllDiary = createAsyncThunk(
  'fetchAllDiary',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/diary${params}`);
            console.log(data);
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);

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
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);

export const deleteProductDiary = createAsyncThunk(
  'deleteProductDiary',
  async (credentials, { rejectWithValue }) => {
    try {
      const {data} = await axios.delete('/diary/products/:productId', {
         productId: credentials,
      }
      );
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);

export const addExercisesDiary = createAsyncThunk(
  'addExercisesDiary',
  async (exercise,  { rejectWithValue }) => {
   
    try {
      const { data } = await axios.post('/diary/exercises', exercise);
      return data;
    } catch (error) {
     toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');    }
  },
);

export const deleteExercisesDiary = createAsyncThunk(
  'deleteExercisesDiary',
  async (credential, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete('/diary/exercises/:exerciseId', {
       exerciseId: credential,
      });
      return data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);
