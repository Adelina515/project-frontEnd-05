import { createSlice } from '@reduxjs/toolkit';
import { register } from './auth-operations';
import { login } from './auth-operations';
import { logout } from './auth-operations';
import { current } from './auth-operations';
import {
  updateProfileAvatarTh,
  updateProfileParamsTh,
} from '../../redux/UserPageCntrls/UserPageOperations.jsx';
const initialState = {
  user: {
    name: '',
    email: '',
    height: 160,
    currentWeight: 60,
    desiredWeight: 55,
    birthday: '08.01.1987',
    blood: 1,
    sex: 'male',
    levelActivity: 2,
  },
  token: '',
  loading: false,
  isLogin: false,
  isRefreshing: true,
  isParamsExist: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isRefreshing = false;
        state.isParamsExist = false;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.isRefreshing = false;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(logout.pending, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.user = {};
        state.token = '';
        state.isLogin = false;
        state.isRefreshing = true;
      })
      .addCase(logout.rejected, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(current.pending, state => {
        state.loading = false;
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        state.user = { ...payload.user };
        state.token = payload.user.token;
        state.isLogin = true;
        state.isRefreshing = false;
      })
      .addCase(current.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isRefreshing = false;
      })
      .addCase(updateProfileParamsTh.pending, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateProfileParamsTh.fulfilled, (state, { payload }) => {
        state.user = { ...payload };

        state.isLogin = true;
        state.isParamsExist = true; //додала test
      })
      .addCase(updateProfileParamsTh.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isParamsExist = true; //додала test
      })
      .addCase(updateProfileAvatarTh.pending, state => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateProfileAvatarTh.fulfilled, (state, { payload }) => {
        state.user.avatarURL = payload.avatarURL;
        state.isLogin = true;
      })
      .addCase(updateProfileAvatarTh.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
