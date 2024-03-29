import css from './ProductsItem.module.css';
import svg from '../../../img/sprite/symbol-defs.svg';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { handleSuccess } from '../../../redux/products/productsSlice';

export const ProductsListItem = ({ data, openModal }) => {
  const dispatch = useDispatch();
  const userBlood = useSelector(state => state.auth.user.blood);
  const { calories, category, title, weight, groupBloodNotAllowed } = data;
  const fixedTitle = title[0].toUpperCase() + title.slice(1).toLowerCase();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const newData = { ...data, allowed: groupBloodNotAllowed[userBlood] };
  const handleOpen = () => {
    openModal(newData);
    dispatch(handleSuccess(false));
  };
  return (
    <li className={css.card} ref={ref}>
      {inView && (
        <>
          <div className={css.upperContent}>
            <div className={css.dietWrapper}>
              <p className={css.diet}>diet</p>
            </div>
            <div className={css.cardStatus}>
              <svg className={css.statusCircle}>
                {groupBloodNotAllowed[userBlood] ? (
                  <use href={`${svg}#icon-circle-green`}></use>
                ) : (
                  <use href={`${svg}#icon-circle-red`}></use>
                )}
              </svg>
              <p className={css.statusText}>
                {/* Recommended */}
                {groupBloodNotAllowed[userBlood]
                  ? 'Recommended'
                  : 'Not recommended'}
              </p>
              <button
                type="button"
                className={css.statusBtn}
                onClick={handleOpen}
              >
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
        </>
      )}
    </li>
  );
};
