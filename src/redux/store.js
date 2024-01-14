import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-slice';
import { profileReducer } from './UserPageCntrls/UserPageCntrls';
import { productReducer } from './products/productsReducer';

const placeholderReducer = (state = {}, action) => {
  // Placeholder reducer that simply returns the current state
  return state;
};

export const store = configureStore({
  reducer: {
    // You can name the placeholder slice as you wish
    profile: profileReducer,
    placeholder: placeholderReducer,
    auth: authReducer,
    products: productReducer,
  },
});
export default store;
