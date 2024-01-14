import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-slice';

const placeholderReducer = (state = {}, action) => {
  // Placeholder reducer that simply returns the current state
  return state;
};

export const store = configureStore({
  reducer: {
    // You can name the placeholder slice as you wish
    placeholder: placeholderReducer,
    auth:authReducer,
     },
    })
export default store;