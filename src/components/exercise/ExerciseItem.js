import React from 'react';

import css from '../../pages/Exercises.module.css';

function ExerciseItem({ exercise }) {
  console.log(exercise);
  return (
    <div className={css.exerciseItemContainer}>
      <img src="" alt="runguy" />
      <h3>{exercise.name}</h3>
      <div>
        <p>
          Burned calories: <span>{exercise.burnedCalories}</span>
        </p>
        <p>
          Body part: <span>{exercise.bodyPart}</span>
        </p>
        <p>
          Equipment: <span>{exercise.equipment}</span>
        </p>
      </div>
    </div>
  );
}

export default ExerciseItem;
