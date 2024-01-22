import { UserNav } from 'components/userNav/UserNav';
import svg from '../../img/sprite/symbol-defs.svg';
import css from './mobileMenu.module.css'
import { LogOutBtn } from 'btn/logOutBtn/LogOutBtn';

export const MobileMenu = ({open, setOpen}) =>{
    console.log(open)
    return <div className={`${css.mobileMenu} ${open? css.isOpen : ''}`} /*className={css.mobileMenu}*/>
        <button
          className={css.menuCloseBtn}
          type="button"
          onClick={setOpen}
        >
          <svg className={css.svgclose}>
            <use href={`${svg}#icon-close-modal`}></use>
          </svg>
        </button>
        <UserNav/>
        <LogOutBtn/>
    </div>
}