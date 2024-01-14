import sprite from '../../img/sprite/symbol-defs.svg';
import css from './LogOutBtn.module.css';

export const LogOutBtn = () => {
  return (
    <div className={css.logout}>
      <svg>
        <use href={`${sprite}#icon-logout`} />
      </svg>
    </div>
  );
};
