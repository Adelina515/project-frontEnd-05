import { NavLink } from 'react-router-dom';
import css from './UserNav.module.css';
export const UserNav = ({ page, setOpen }) => {
  const classNameFunc = ({ isActive }) => (`${css.link} ${isActive && css.linkActive}`);
  return (
    <ul className={`${css.btnList} ${page === 'wide' && css.wide}`}>
      <li>
        <NavLink to={'/diary'} className={page === 'wide' ? classNameFunc : css.link}  onClick={page && setOpen}>
          Diary
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/products'}
          className={page === 'wide' ? classNameFunc : css.link}
          onClick={page && setOpen}
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/exercises'}
          className={page === 'wide' ? classNameFunc : css.link}
          onClick={page && setOpen}
        >
          Exercises
        </NavLink>
      </li>
    </ul>
  );
};
