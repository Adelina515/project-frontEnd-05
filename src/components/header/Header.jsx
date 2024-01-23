import { Logo } from 'components/logo/Logo';
import { LogOutBtn } from '../../btn/logOutBtn/LogOutBtn';
import { BtnMobileMenu } from '../../btn/BtnMobileMenu/BtnMobileMenu';
import css from './Header.module.css';
import { useSelector } from 'react-redux';
import {
  selectIsUserLogin,
  selectUserToken,
  selectisParamsExist,
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
  const isMobile = window.innerWidth < 1440;
  const isParams = useSelector(selectisParamsExist);
  // console.log(isParams);
  // const auth = useSelector(state => state.auth);
  // console.log(auth);
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
              {!isMobile && isParams && <UserNav />}
              <UserBar />
              {!isMobile && <LogOutBtn />}
              {isMobile && <BtnMobileMenu setOpen={handleOpen} />}
            </div>
          )}
        </div>
      </Container>
      <MobileMenu open={isOpen} setOpen={handleOpen} isParams={isParams} />
      {/* {isOpen && <MobileMenu open={isOpen} setOpen={handleOpen} />} */}
    </div>
  );
};
