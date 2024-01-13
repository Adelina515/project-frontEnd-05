import css from './ProductsItem.module.css';
import svg from '../../../img/sprite/symbol-defs.svg';
export const ProductsListItem = ({ openModal }) => {
  return (
    <li className={css.card}>
      <div className={css.upperContent}>
        <div className={css.dietWrapper}>
          <p className={css.diet}>diet</p>
        </div>
        <div className={css.cardStatus}>
          <svg className={css.statusCircle}>
            <use href={`${svg}#icon-circle-green`}></use>
          </svg>
          <p className={css.statusText}>Recommended</p>
          <button type="button" className={css.statusBtn} onClick={openModal}>
            Add
            <svg className={css.svgBtn}>
              <use href={`${svg}#icon-next-arrow`}></use>
            </svg>
          </button>
        </div>
      </div>
      <div className={css.lowerContent}>
        <div className={css.titleWrapper}>
          <div className={css.svgWrapper}>
            <svg className={css.svgTitle}>
              <use href={`${svg}#icon-runningMan`}></use>
            </svg>
          </div>
          <h3 className={css.title}>Title Title Title Title</h3>
        </div>
        <div className={css.cardInfo}>
          <div>
            Calories: <span className={css.amount}>81</span>
          </div>
          <div>
            Category: <span className={css.amount}>Cereals</span>
          </div>
          <div>
            Weight: <span className={css.amount}>100</span>
          </div>
        </div>
      </div>
    </li>
  );
};
