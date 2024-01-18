import { Navigate } from 'react-router-dom';
import { selectIsUserLogin } from '../redux/auth/auth-selectors';


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogin } = selectIsUserLogin;
  return !isLogin ? <Navigate to={redirectTo} /> : Component;
};
