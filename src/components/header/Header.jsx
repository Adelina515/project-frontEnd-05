import { Logo } from 'components/logo/Logo';
import { LogOutBtn } from '../../btn/logOutBtn/LogOutBtn';
import { BtnSettings } from '../../btn/btnSettings/BtnSettings';
import { BtnMobileMenu } from '../../btn/BtnMobileMenu/BtnMobileMenu';
import { HeaderButton } from '../../btn/HeaderButton/HeaderButton';
import css from './Header.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserToken } from '../../redux/auth/auth-selectors';


export const Header = () => {

  const token = useSelector(selectUserToken);

  return (
    <div className={css.headerWrapper}>
      <Logo />
      {token
        ? <div className={css.btn}>
          <ul className={css.btnList}>
            <li>
              <Link to={'/diary'}>Diary</Link>
            </li>
            <li>
              <Link to={'/products'}>Products</Link>
            </li>
            <li>
              <Link to={'/exercises'}>Exercises</Link>
            </li>
          </ul>
          <div className={css.list}>
            <BtnSettings />
            <BtnMobileMenu />
            <LogOutBtn />
          </div>
        </div>
        : null}
    </div>
  );
};
