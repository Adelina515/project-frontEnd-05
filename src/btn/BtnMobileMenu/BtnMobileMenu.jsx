import sprite from '../../img/sprite/symbol-defs.svg';
import css from './BtnMobileMenu.module.css';

export const BtnMobileMenu = () => {
  return (
    <div>
      <svg className={css.burger}>
        <use href={`${sprite}#icon-burger-menu`} />
      </svg>
    </div>
  );
};
