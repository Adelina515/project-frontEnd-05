import css from './HeaderButton.module.css';

export const HeaderButton = ({ Children }) => {
  return (
    <button className={css.btn} type="button">
      {Children}
    </button>
  );
};
