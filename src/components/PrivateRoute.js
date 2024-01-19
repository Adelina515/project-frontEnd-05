import { Navigate } from 'react-router-dom';
import {
  selectIsUserLogin,
  selectIsRefreshing,
} from '../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsUserLogin);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLogin && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
