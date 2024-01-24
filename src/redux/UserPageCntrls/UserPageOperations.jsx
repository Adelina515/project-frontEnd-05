import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  updateProfileParams,
  updateProfileAvatar,
} from '../../servises/api/user';

export const updateProfileParamsTh = createAsyncThunk(
  'auth/params',
  async (credentials, { rejectWithValue }) => {
    try {
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
      return await updateProfileAvatar(credentials);
    } catch ({ response }) {
      rejectWithValue(response);
    }
  }
);
