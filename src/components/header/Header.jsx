import { Logo } from 'components/logo/Logo';
import { LogOutBtn } from '../../btn/logOutBtn/LogOutBtn';
import { BtnSettings } from '../../btn/btnSettings/BtnSettings';
import { BtnMobileMenu } from '../../btn/BtnMobileMenu/BtnMobileMenu';
import { HeaderButton } from '../../btn/HeaderButton/HeaderButton';
import css from './Header.module.css';

export const Header = () => {
  return (
    
    <div className={css.headerWrapper}>
      <Logo />
      <ul className={css.btnList}>
        <li>
          <HeaderButton Children={'Diary'} />
        </li>
        <li>
          <HeaderButton Children={'Products'} />
        </li>
        <li>
          <HeaderButton Children={'Exercises'} />
        </li>
      </ul>
      <div className={css.list}>
        <BtnSettings />
        <BtnMobileMenu />
        <LogOutBtn />
      </div>
    </div>
    
  );
};
