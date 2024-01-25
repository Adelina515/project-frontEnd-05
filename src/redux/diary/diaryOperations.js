import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import instance from '../../instance/instance';

export const fetchAllDiary = createAsyncThunk(
  'fetchAllDiary',
  async (date, { rejectWithValue }) => {
    try {
      const  response  = await instance.get(`/diary/${date}`);
      return response.data;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue(error.message);
    }
  },
);



export const addProductDiary = createAsyncThunk(
  'addProductDiary',
  async (productDetails, { rejectWithValue }) => {
    try {
      const {data} = await instance.post('/diary/products', productDetails.data);
      
      toast.success(`Product successfully added to diary!`);
      data.result.productId = productDetails.product;
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
      const { data } = await instance.post('/diary/exercises', exerciseDetails.data);
      data.result.exerciseId = exerciseDetails.ex;
      return data
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
