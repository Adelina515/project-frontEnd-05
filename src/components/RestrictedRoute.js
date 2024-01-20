import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsUserLogin } from '../redux/auth/auth-selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsUserLogin);
  return isLogin ? <Navigate to={redirectTo} /> : Component;
};
