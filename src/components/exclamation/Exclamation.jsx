import css from './Exclamation.module.css'
import sprite from '../../img/sprite/symbol-defs.svg'

export const ExclamationMark = () => {
    return (
      <div className={css.bigWrapper}>
        <div className={css.wrapper}>
          <div className={css.wrapperExcl}>
            <svg width="24" height="24">
              <use href={`${sprite}#icon-warning`}></use>
            </svg>
          </div>
          <p className={css.text}>
            We understand that each individual is unique, so the entire approach
            to diet is relative and tailored to your unique body and goals.
          </p>
        </div>
      </div>
    );
  };
  