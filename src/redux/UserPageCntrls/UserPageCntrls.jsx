import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentUserDataTh,
  updateProfileParamsTh,
  updateProfileAvatarTh,
} from './UserPageOperations';
const initialState = {
  name: null,
  email: null,
  height: 0,
  currentWeight: 60,
  desiredWeight: 55,
  birthday: '2005-01-01',
  blood: 1,
  sex: 'male',
  levelActivity: 2,
  avatarURL: '',
  bmr: 0,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setCurrentUserData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getCurrentUserDataTh.pending, (state, { payload }) => state)
      .addCase(getCurrentUserDataTh.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.height = payload.height;
        state.currentWeight = payload.currentWeight;
        state.desiredWeight = payload.desiredWeight;
        state.birthday = payload.birthday;
        state.blood = payload.blood;
        state.sex = payload.sex;
        state.levelActivity = payload.levelActivity;
        state.avatarURL = payload.avatarURL;
        state.bmr = payload.bmr;
      })
      .addCase(getCurrentUserDataTh.rejected, (state, { payload }) => state)
      .addCase(updateProfileParamsTh.fulfilled, (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
        state.height = payload.height;
        state.currentWeight = payload.currentWeight;
        state.desiredWeight = payload.desiredWeight;
        state.birthday = payload.birthday;
        state.blood = payload.blood;
        state.sex = payload.sex;
        state.levelActivity = payload.levelActivity;
        state.avatarURL = payload.avatarURL;
        state.bmr = payload.bmr;
      })
      .addCase(updateProfileParamsTh.rejected, (state, action) => state)
      .addCase(updateProfileAvatarTh.fulfilled, (state, { payload }) => {
        state.avatarURL = payload.avatarURL;
      }),
});

export const { setCurrentUserData } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
