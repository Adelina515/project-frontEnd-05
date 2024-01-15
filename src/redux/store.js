import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  
} from 'redux-persist'

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
    placeholder: placeholderReducer,
    auth: persistedReducer,
   
     },
    })

export const persistor = persistStore(store);