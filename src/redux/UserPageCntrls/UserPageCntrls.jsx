import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    userData: {
     //  name: null,
     //  email: null,
      height: 160,
      currentWeight: 60,
      desiredWeight: 55,
      birthday: '08.01.1987',
      blood: 1,
      sex: 'male',
      levelActivity: 2,
     
    },
    // token: null,
    // isLoggedIn: false,
   /// goToParams: false,
    isUpdateUserData: false,
    avatarURL: ""
  };

  
  const profileSlice = createSlice({
    name: 'profile',
    initialState,
    extraReducers: builder =>
      builder
       
        .addCase(updateUserData.pending, (state, action) => state)
        .addCase(updateUserData.fulfilled, (state, action) => {
          state.userData = action.payload;
        })
        .addCase(updateUserData.rejected, (state, action) => {
          state.isLoggedIn = true;
        //  state.goToParams = false;
        })
        .addCase(updateAvatar.pending, (state, action) => state)
        .addCase(updateAvatar.fulfilled, (state, action) => {
          state.avatarURL = action.payload;
        })
        .addCase(updateAvatar.rejected, (state, action) => {
          state.isLoggedIn = true;
        //  state.goToParams = false;
        })
       
         })
//        
export const updateUserData = createAsyncThunk(
    'profile/updateUserData',
    async (params, thunkAPI) => {
      try {
      //   const res = await axios.patch('/profile', params);
       // return res.data;
       return params
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
  );

  export const updateAvatar = createAsyncThunk(
    'profile/updateAvatar',
    async (file, thunkAPI) => {
      try {
        console.log(file, "file in updateAvatar")
        const formData = new FormData();
        formData.append('avatar', file);
  
        // const res = await axios.patch('profile', formData, {
        //   headers: { 'content-type': 'multipart/form-data' },
        // });
        console.log(formData, "formData")
  return file
      //  return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
  );
  
  export const profileReducer = profileSlice.reducer;