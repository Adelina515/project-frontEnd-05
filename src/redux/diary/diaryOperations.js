
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchAllDiary = createAsyncThunk(
  'fetchAllDiary',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/diary?date=${date}`);
      return data;
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
      await axios.delete(`/diary/deleteproduct?id=${id}&date=${date}`);

      return id;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);



export const deleteExercisesDiary = createAsyncThunk(
  'deleteExercisesDiary',
  async (exerciseDetails, { rejectWithValue }) => {
    console.log('exerciseDetailsDELETE', exerciseDetails);
    try {
      const { id, date } = exerciseDetails;
      await axios.delete(`/diary/deleteexercise?date=${date}&id=${id}`);
      return id;
    } catch (error) {
      toast.error('Oops... Something went wrong! Try again!');
      return rejectWithValue('Oops... Something went wrong!');
    }
  },
);
