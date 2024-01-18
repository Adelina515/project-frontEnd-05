import React from 'react';

import css from '../../pages/Exercises.module.css';

function ExerciseCategoriesItem({ item, setSpec }) {
  return (
    <div
      className={css.arrElCont}
      onClick={e => {
        setSpec(item);
      }}
    >
      <img src={item.imgURL} alt="exercise_image" />
      <div className={css.arrElContText}>
        <h2>{item.name.toUpperCase()[0] + item.name.substring(1)}</h2>
        <br />
        <p>{item.filter}</p>
      </div>
    </div>
  );
}

export default ExerciseCategoriesItem;
