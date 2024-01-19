import sprite from '../../img/sprite/symbol-defs.svg';
import css from './LogOutBtn.module.css';
import { useDispatch} from 'react-redux';

import {logout} from  "../../redux/auth/auth-operations";


export const LogOutBtn = () => {
  const dispatch = useDispatch();
 const onLogout =() =>{
    dispatch(logout())
  }
  return (
    <button className={css.logout} onClick={onLogout}>
      <span className={css.text}>Logout</span>
      
      <svg>
        <use href={`${sprite}#icon-logout`} />
      </svg>
    </button>
  );
};
