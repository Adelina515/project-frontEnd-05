import { createAsyncThunk } from '@reduxjs/toolkit';
import {

  updateProfileParams,
  updateProfileAvatar,
} from '../../servises/api/user';

// export const updateUserData = createAsyncThunk(
//   'profile/params',
//   async (params, thunkAPI) => {
//     try {

//      return params
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
// );

// export const getCurrentUserDataTh = createAsyncThunk(
//   'auth/current',
//   async (_, { rejectWithValue }) => {
//     try {
//       return await getCurrentUserData();
//     } catch ({ response }) {
//       rejectWithValue(response);
//     }
//   }
// );
export const updateProfileParamsTh = createAsyncThunk(
  'auth/params',
  async (credentials, { rejectWithValue }) => {
    try {
     console.log(credentials, 'credentials in params');
      return await updateProfileParams(credentials);
    } catch ({ response }) {
      rejectWithValue(response);
    }
  }
);
export const updateProfileAvatarTh = createAsyncThunk(
  'auth/avatars',
  async (credentials, { rejectWithValue }) => {
    try {
     // console.log(credentials, 'credentials in params');
      return await updateProfileAvatar(credentials);
    } catch ({ response }) {
      rejectWithValue(response);
    }
  }
);
