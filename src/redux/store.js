import { configureStore } from '@reduxjs/toolkit';

import { diaryReducer } from './diary/diarySlice';

import { authReducer } from './auth/auth-slice';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { productReducer } from './products/productsReducer';

const placeholderReducer = (state = {}, action) => {
  // Placeholder reducer that simply returns the current state
  return state;
};
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: {
    // You can name the placeholder slice as you wish
    // profile: profileReducer,
    placeholder: placeholderReducer,

    diary: diaryReducer,

    auth: persistedReducer,
    products: productReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
