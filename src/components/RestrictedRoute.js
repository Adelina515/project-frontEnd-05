
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {selectIsUserLogin} from "../redux/auth/auth-selectors";
import { selectUser } from "../redux/UserPageCntrls/selectors";

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin= useSelector(selectIsUserLogin);
  const userData = useSelector( selectUser);
  return isLogin   && (!userData || Object.keys(userData).length) === 2?<Navigate to={"/"} /> :Component;
}
