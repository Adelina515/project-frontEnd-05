import { UserNav } from 'components/userNav/UserNav';
import svg from '../../img/sprite/symbol-defs.svg';
import css from './mobileMenu.module.css';
import { LogOutBtn } from 'btn/logOutBtn/LogOutBtn';

export const MobileMenu = ({ open, setOpen, isLogin }) => {
  return (
    <div className={`${css.mobMenuBackdrop} ${open ? css.isOpen : ''}`}>
      <div className={`${css.mobileMenu} ${open ? css.isOpen : ''}`}>
        <button className={css.menuCloseBtn} type="button" onClick={setOpen}>
          <svg className={css.svgclose}>
            <use href={`${svg}#icon-close-modal`}></use>
          </svg>
        </button>
        {isLogin && <UserNav page="menu" setOpen={setOpen} />}
        {isLogin && <LogOutBtn page="menu" />}
      </div>
    </div>
  );
};
