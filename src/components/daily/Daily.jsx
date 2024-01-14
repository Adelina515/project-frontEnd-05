import sprite from '../../img/sprite/symbol-defs.svg';
import css from './Daily.module.css'

export const Daily = ({ color, iconId, text, value }) => {
  return (
    <div className={css.container}  style={{ backgroundColor: color }}>
      <div className={css.wrapper}>
        <svg className={css.svgIcon}>
          <use href={`${sprite}#${iconId}`} />
        </svg>
        <p className={css.text}>{text}</p>
      </div>
      <p className={css.value}>{value}</p>
    </div>
  );
};