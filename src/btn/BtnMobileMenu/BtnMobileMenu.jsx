import sprite from '../../img/sprite/symbol-defs.svg';

export const BtnMobileMenu = () => {
  return (
    <div>
      <svg>
        <use href={`${sprite}#icon-policy-2`} />
      </svg>
    </div>
  );
};
