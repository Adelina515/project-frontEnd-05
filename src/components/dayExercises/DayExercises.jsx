import css from "./DayExercises.module.css";
import { Link } from 'react-router-dom';

import ExercisesTable from "./exercisesTable/ExercisesTable";
import EmList from '../emList/EmList.jsx';

import sprite from '../../img/sprite/symbol-defs.svg';
import { selectDiaryExercises } from '../../redux/diary/diarySelectors';
import { useSelector } from "react-redux";



const DayExercises = ({ selectedDate }) => {
  const exercisesInDiary = useSelector(selectDiaryExercises);

  return (
    <>
      <div className={css.dayExecrcises}>
        <div className={css.dayScroll}>
          <div className={css.dayNav}>
            <h3 className={css.dayZag}>Execrcises</h3>
            <Link to="/exercises" className={css.Butt} state={selectedDate}>
              Add exercises
              <svg className={css.iconStrilka} width="16px" height="16px">
                <use href={`${sprite}#icon-next-arrow`}></use>
              </svg>
            </Link>
          </div>
          {exercisesInDiary.length === 0 ? (
            <EmList itemName={'exercises'} />
          ) : (
            <ExercisesTable exercises={exercisesInDiary} />
          )}{' '}
        </div>
      </div>
    </>
  );
};

export default DayExercises;

