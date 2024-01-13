import { configureStore } from '@reduxjs/toolkit';

import { profileReducer } from './UserPageCntrls/UserPageCntrls';

export const store = configureStore({
  reducer: {
    profile: profileReducer
  },
});
