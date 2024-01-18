import sprite from '../../img/sprite/symbol-defs.svg';
import { Link } from 'react-router-dom';
import css from './logo.module.css';

export const Logo = () => {
  return (
    <Link to={'/'}>
      <svg className={css.logotipe}>
        <use href={`${sprite}#icon-logo-bigger`} />
      </svg>
    </Link>
  );
};
