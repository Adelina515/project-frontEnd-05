import { createAsyncThunk } from '@reduxjs/toolkit';
import { signup } from '../../servises/api/auth';
import { signin } from '../../servises/api/auth';
import { getCurrentUser } from '../../servises/api/auth';


export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      return await signup(credentials);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      return await signin(credentials);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      return await logout();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  
  async (_, { rejectWithValue, getState }) => {
    try {
      console.log("auth start in thunk");

      const { auth } = getState();
      console.log("auth",auth);
     
      const persistedToken = auth.token;
      console.log("persistedToken",persistedToken)
      return await getCurrentUser(persistedToken);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      console.log(auth);
      const persistedToken = auth.token;
      return !!persistedToken; 
    },
  }
);
