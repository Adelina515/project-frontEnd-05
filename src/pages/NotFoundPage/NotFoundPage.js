import { NavLink } from 'react-router-dom';
import css from './NotFoundPage.module.css';
import { selectIsUserLogin } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function NotFoundPage() {
  const isLogin = useSelector(selectIsUserLogin);
  return (
    <div className={css.notfound}>
      <div className={css.wrapperText}>
        <h2 className={css.title}>404</h2>
        <p className={css.text}>
          Sorry, you have reached a page that we could not find. It seems that
          you are lost among the numbers and letters of our virtual space.
          Perhaps this page went on vacation or decided to disappear into
          another dimension. We apologize for this inconvenience.
        </p>
        <NavLink className={css.btnHome} to={isLogin ? '/profile' : '/welcome'}>
          Go Home
        </NavLink>
      </div>
      <div className={css.wrapperPhoto}></div>
    </div>
  );
}
