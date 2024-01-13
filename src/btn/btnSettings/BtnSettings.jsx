import sprite from '../../img/sprite/symbol-defs.svg';

export const BtnSettings = () => {
  return (
    <div>
      <svg>
        <use href={`${sprite}#icon-settings`} />
      </svg>
    </div>
  );
};
