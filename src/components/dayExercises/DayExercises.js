import css from "./DayExercises.module.css";
import { Link } from 'react-router-dom';

import ExercisesTable from "./exercisesTable/ExercisesTable";

import sprite from '../../img/sprite/symbol-defs.svg'

//import EmptyList from "../EmptyList/EmptyList";

const DayExercises = () => {
const diaryExercises = [
  {
    _id: 1,
    bodyPart: 'legs',
    equipment: 'dumbbells',
    name: 'squats',
    target: 'strength',
    calories: 200,
    time: '15 minutes'
  },
];
  return (
    <>
      <div className= {css.DayExercises}>
        <div className ={css.dayScroll}>
          <div className={css.dayNav}>
            <h3 className={css.dayZag}>Execrcises</h3>
         <Link to="/exercises" className={css.Butt}>
            Add exercises
            <svg className={css.iconStrilka} width="98px" height="35px">
              <use href={`${sprite}#icon-next-arrow-gray`}></use>
            </svg>
          </Link>
          </div>
                 <ExercisesTable exercises={diaryExercises} />
        </div>
      </div>
    </>
  );
};

export default DayExercises;

