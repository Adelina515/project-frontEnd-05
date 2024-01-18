import React from 'react';

import svg from '../../img/sprite/symbol-defs.svg';
import css from '../../pages/Exercises.module.css';

function ExerciseItem({ exercise, setSelected }) {
  const capitalize = str => (str ? str[0].toUpperCase() + str.slice(1) : '');
  console.log(exercise);
  return (
    <div className={css.exerciseItemContainer}>
      <h3>
        <svg className={css.svgTitle}>
          <use href={`${svg}#icon-runningMan`}></use>
        </svg>
        <span>{capitalize(exercise.name)}</span>
      </h3>
      <div>
        <p>
          Burned calories: <span>{exercise.burnedCalories}</span>
        </p>
        <p>
          Body part: <span>{capitalize(exercise.bodyPart)}</span>
        </p>
        <p>
          Target: <span>{capitalize(exercise.target)}</span>
        </p>
      </div>
      <button className={css.startBtn} onClick={()=>setSelected(exercise)}>
        Start
        <svg >
          <use href={`${svg}#icon-next-arrow`}></use>
        </svg>
      </button>
    </div>
  );
}

export default ExerciseItem;
