import css from './loader.module.css';

export const Loader = () => {
    return (
      <div className={css.loaderWrap}>
        <span className={css.loader}></span>
      </div>
    );
};
