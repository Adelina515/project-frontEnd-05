
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


axios.defaults.baseURL = 'https://power-pulse-backend.onrender.com/';


export const fetchAllDiary = createAsyncThunk(
  'fetchAllDiary',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/?date=${date}`);
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
      const {
        productId, //string
        date, //string yyyy-mm-dd
        grams, //number
        category, //string
        calories,//number
        
      } = productDetails;
      await axios.post('/products', {
        productId,
        date,
        grams,
        category,
        calories,
        
      });
      console.log('productDetailsAdd', productDetails);

      toast.success(`Product successfully added to diary!`);
      return;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);

export const deleteProductDiary = createAsyncThunk(
  'deleteProductDiary',
  async (productDetails, { rejectWithValue }) => {
    const { id, date } = productDetails;

    try {
      await axios.delete(`/products?id=${id}&date=${date}`);

      return id;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);

export const addExercisesDiary = createAsyncThunk(
  'addExercisesDiary',
  async (exercise, thunkAPI) => {
    console.log('exercise', exercise);
    const {
      exerciseId,//string
      date, //string yyyy-mm-dd
      duration,//number
      burnedCalories,//number
    } = exercise;
    try {
      const response = await axios.post('/exercises', {
        exerciseId,
        date,
        duration,
        burnedCalories,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteExercisesDiary = createAsyncThunk(
  'deleteExercisesDiary',
  async (exerciseDetails, { rejectWithValue }) => {
    console.log('exerciseDetailsDELETE', exerciseDetails);
    try {
      const { id, date } = exerciseDetails;
      await axios.delete(`/exercises?date=${date}&id=${id}`);
      return id;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);
