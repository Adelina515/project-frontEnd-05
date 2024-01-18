import { Navigate } from 'react-router-dom';
import {
  selectIsUserLogin,
  selectIsRefreshing,
} from '../redux/auth/auth-selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogin } = selectIsUserLogin;
  const { isRefreshing } = selectIsRefreshing;
  const shouldRedirect = !isLogin && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
