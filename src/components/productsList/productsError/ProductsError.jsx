import css from './ProduxError.module.css';
export const ProductsError = () => {
  return (
    <div className={css.errorWrapper}>
      <p className={css.errorText}>
        <span className={css.textAccent}>Sorry, no results were found</span> for
        the product filters you selected. You may want to consider other search
        options to find the product you want. Our range is wide and you have the
        opportunity to find more options that suit your needs.
      </p>
      <p className={`${css.errorText} ${css.textAccent}`}>
        Try changing the search parameters.
      </p>
    </div>
  );
};
