import sprite from '../../img/sprite/symbol-defs.svg';

export const LogOutBtn = () => {
  return (
    <div>
      <svg>
        <use href={`${sprite}#icon-logout`} />
      </svg>
    </div>
  );
};
