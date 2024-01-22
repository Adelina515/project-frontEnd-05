import { Link } from 'react-router-dom';
import sprite from '../../img/sprite/symbol-defs.svg';
import css from './BtnSettings.module.css';

export const BtnSettings = () => {
  return (
    <Link to={'/profile'}><svg className={css.iconSettings}>
    <use href={`${sprite}#icon-settings`} />
  </svg></Link>
      
  );
};
