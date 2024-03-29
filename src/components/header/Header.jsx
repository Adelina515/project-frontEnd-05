import { Logo } from 'components/logo/Logo';
import { LogOutBtn } from '../../btn/logOutBtn/LogOutBtn';
import { BtnMobileMenu } from '../../btn/BtnMobileMenu/BtnMobileMenu';
import css from './Header.module.css';
import { useSelector } from 'react-redux';
import {
  selectIsUserLogin,
  selectUserToken,
} from '../../redux/auth/auth-selectors';
import { UserNav } from 'components/userNav/UserNav';
import { UserBar } from 'components/userBar/UserBar';
import { useState } from 'react';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { Container } from 'components/Container/Container';

export const Header = () => {
  const isLogin = useSelector(selectIsUserLogin);
  const [isOpen, setIsOpen] = useState(false);
  const token = useSelector(selectUserToken);
  // const isMobile = window.innerWidth < 1440;
  // console.log('hello')
  const handleOpen = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <div className={isLogin ? css.stickyBottomLine : css.stickyBottomLineNone}>
      <Container>
        <div className={css.headerWrapper}>
          <Logo />
          {token && (
            <div className={css.user}>
              {isLogin && <UserNav page="wide" />}
              {isLogin && <UserBar />}
              {isLogin && <LogOutBtn page="wide" />}
              {isLogin && <BtnMobileMenu setOpen={handleOpen} />}
            </div>
          )}
        </div>
      </Container>
      <MobileMenu open={isOpen} setOpen={handleOpen} isLogin={isLogin} />
    </div>
  );
};
