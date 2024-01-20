import css from './AddProductSuccess.module.css';
import img from '../../img/productSuccessFruit.png';
import svg from '../../img/sprite/symbol-defs.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllDiary } from '../../redux/diary/diaryOperations';
import { useEffect } from 'react';
export const AddProductSuccess = ({ calories }) => {
  const dispatch = useDispatch();

  const diary = useSelector(state => state.diary);
  console.log(diary);
  useEffect(() => {
    dispatch(fetchAllDiary('2024-01-18'));
  }, [dispatch]);
  return (
    <div className={css.wrapper}>
      <img src={img} alt="avokado" className={css.image} />
      <h3 className={css.title}>Well done</h3>
      <p className={css.text}>
        Calories: <span className={css.count}>{calories}</span>
      </p>
      <button className={css.btnNext} data-type="close-modal">
        Next product
      </button>
      <Link to={'/diary'} className={css.btnToDiary}>
        To the diary
        <svg className={css.svgBtn}>
          <use href={`${svg}#icon-next-arrow-gray`}></use>
        </svg>
      </Link>
    </div>
  );
};
