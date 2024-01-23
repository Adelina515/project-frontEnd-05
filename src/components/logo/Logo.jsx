import sprite from '../../img/sprite/symbol-defs.svg';
import { Link } from 'react-router-dom';
import css from './logo.module.css';
import { useSelector } from 'react-redux';
import {
  selectIsUserLogin,
  selectisParamsExist,
} from '../../redux/auth/auth-selectors';

export const Logo = () => {
  const isParams = useSelector(selectisParamsExist);
  const isLogin = useSelector(selectIsUserLogin);
  let path = '/';
  if (isLogin && isParams) path = '/diary';
  if (isLogin && !isParams) path = '/profile';
  return (
    <Link to={path}>
      <svg className={css.logotipe}>
        <use href={`${sprite}#icon-logo-bigger`} />
      </svg>
    </Link>
  );
};
