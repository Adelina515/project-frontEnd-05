import { Navigate } from 'react-router-dom';
import { selectIsUserLogin } from '../redux/auth/auth-selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogin } = selectIsUserLogin;
  return isLogin ? <Navigate to={redirectTo} /> : Component;
};
