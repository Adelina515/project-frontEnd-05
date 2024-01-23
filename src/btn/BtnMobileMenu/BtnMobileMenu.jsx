import sprite from '../../img/sprite/symbol-defs.svg';
import css from './BtnMobileMenu.module.css';

export const BtnMobileMenu = ({setOpen}) => {
  return (
    <div className={css.burger} onClick={setOpen}>
      <svg className={css.burgerSvg}>
        <use href={`${sprite}#icon-burger-menu`} />
      </svg>
    </div>
  );
};
