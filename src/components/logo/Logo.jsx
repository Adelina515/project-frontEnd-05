import sprite from '../../img/sprite/symbol-defs.svg';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to={'/'}>
      <svg>
        <use href={`${sprite}#icon-logo-bigger`} />
      </svg>
    </Link>
  );
};
