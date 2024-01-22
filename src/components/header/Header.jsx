import { Logo } from 'components/logo/Logo';
import { LogOutBtn } from '../../btn/logOutBtn/LogOutBtn';
// import { BtnSettings } from '../../btn/btnSettings/BtnSettings';
import { BtnMobileMenu } from '../../btn/BtnMobileMenu/BtnMobileMenu';
// import sprite from '../../img/sprite/symbol-defs.svg';
// import { HeaderButton } from '../../btn/HeaderButton/HeaderButton';
import css from './Header.module.css';
// import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserToken } from '../../redux/auth/auth-selectors';
import { UserNav } from 'components/userNav/UserNav';
import { UserBar } from 'components/userBar/UserBar';
import { useState } from 'react';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const token = useSelector(selectUserToken);
  const isMobile = window.innerWidth < 1440
  // console.log(window.innerWidth)
  const handleOpen = ()=>{
    setIsOpen(prev => !prev)
  }
  return (
    
    <div className={css.headerWrapper}>
      <Logo />
      {!token && <div className={css.user}>
        {!isMobile && <UserNav/>}
        <UserBar/>
        {!isMobile && <LogOutBtn />}
        {isMobile&& <BtnMobileMenu setOpen={handleOpen}/>}
      </div>
        }
        {isOpen && <MobileMenu open={isOpen} setOpen={handleOpen}/>}
    </div>
  );
};
