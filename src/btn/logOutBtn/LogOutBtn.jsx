import sprite from '../../img/sprite/symbol-defs.svg';
import css from './LogOutBtn.module.css';

export const LogOutBtn = ({onLogout}) => {
  return (
    <div className={css.logout} onClick={onLogout}>
      <span className={css.text}>Logout</span>
      
      <svg>
        <use href={`${sprite}#icon-logout`} />
      </svg>
    </div>
  );
};
