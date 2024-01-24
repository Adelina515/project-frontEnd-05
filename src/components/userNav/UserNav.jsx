import { NavLink } from 'react-router-dom';
import css from './UserNav.module.css';
export const UserNav = ({ page, setOpen }) => {
  return (
    <ul className={`${css.btnList} ${page === 'wide' && css.wide}`}>
      <li>
        <NavLink to={'/diary'} className={css.link} onClick={page && setOpen}>
          Diary
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/products'}
          className={css.link}
          onClick={page && setOpen}
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to={'/exercises'}
          className={css.link}
          onClick={page && setOpen}
        >
          Exercises
        </NavLink>
      </li>
    </ul>
  );
};
