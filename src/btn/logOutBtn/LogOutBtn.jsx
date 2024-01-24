import { useDispatch } from 'react-redux';
import sprite from '../../img/sprite/symbol-defs.svg';
import css from './LogOutBtn.module.css';
import { logout } from '../../redux/auth/auth-operations';

export const LogOutBtn = ({ page }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <button
      className={`${css.logoutBtn} ${page === 'wide' && css.wide}`}
      onClick={handleLogout}
    >
      Logout
      <svg className={`${css.logoutIcon} ${page === 'menu' && css.menu}`}>
        <use href={`${sprite}#icon-logout`} />
      </svg>
    </button>
  );
};
