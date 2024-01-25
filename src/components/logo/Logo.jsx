import sprite from '../../img/sprite/symbol-defs.svg';
import { Link } from 'react-router-dom';
import css from './logo.module.css';
import { useSelector } from 'react-redux';
import {
  selectIsUserLogin,
  selectisParamsExist,
} from '../../redux/auth/auth-selectors';

export const Logo = ({ page }) => {
  const isParams = useSelector(selectisParamsExist);
  const isLogin = useSelector(selectIsUserLogin);
  let path = '/';
  if (isLogin && isParams) path = '/diary';
  if (isLogin && !isParams) path = '/profile';
  return (
    <Link to={path} className={page && css.logoNotFound}>
      <svg className={css.logotipe}>
        {page ? (
          <use href={`${sprite}#icon-logo-white`} />
        ) : (
          <use href={`${sprite}#icon-logo-bigger`} />
        )}
        {/* <use href={`${sprite}#icon-logo-bigger`} /> */}
      </svg>
    </Link>
  );
};
