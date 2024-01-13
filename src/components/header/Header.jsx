import { Logo } from 'components/logo/Logo';
import { LogOutBtn } from '../../btn/logOutBtn/LogOutBtn';
import { BtnSettings } from '../../btn/btnSettings/BtnSettings';
import { BtnMobileMenu } from '../../btn/BtnMobileMenu/BtnMobileMenu';
import { HeaderButton } from '../../btn/HeaderButton/HeaderButton';

export const Header = () => {
  return (
    <div>
      <Logo />
      <LogOutBtn />
      <BtnSettings />
      <BtnMobileMenu />
      <HeaderButton Children={'Diary'} />
      <HeaderButton Children={'Products'} />
      <HeaderButton Children={'Exercises'} />
    </div>
  );
};
