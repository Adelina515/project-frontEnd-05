import { NavLink } from 'react-router-dom'
import css from './UserNav.module.css'
export const UserNav = () =>{
    return <ul className={css.btnList}>
    <li>
      <NavLink to={'/diary'} className={css.link}>Diary</NavLink>
    </li>
    <li>
      <NavLink to={'/products'} className={css.link}>Products</NavLink>
    </li>
    <li>
      <NavLink to={'/exercises'} className={css.link}>Exercises</NavLink>
    </li>
  </ul>
}