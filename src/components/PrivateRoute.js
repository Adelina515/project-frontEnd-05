import { Navigate } from 'react-router-dom';
import {
  selectUserToken,
  selectIsRefreshing,
} from '../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(selectUserToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !token && isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
