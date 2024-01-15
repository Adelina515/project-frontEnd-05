import css from './ProductsItem.module.css';
import svg from '../../../img/sprite/symbol-defs.svg';
export const ProductsListItem = ({ data, openModal }) => {
  const { calories, category, title, weight, groupBloodNotAllowed } = data;
  const fixedTitle = title[0].toUpperCase() + title.slice(1).toLowerCase();
  console.log(groupBloodNotAllowed);
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
          <h3 className={css.title}>{fixedTitle}</h3>
        </div>
        <div className={css.cardInfo}>
          <div className={css.infoContent}>
            Calories: <span className={css.amount}>{calories}</span>
          </div>
          <div className={css.infoContent}>
            Category: <span className={css.amount}>{category}</span>
          </div>
          <div className={css.infoContent}>
            Weight: <span className={css.amount}>{weight}</span>
          </div>
        </div>
      </div>
    </li>
  );
};
