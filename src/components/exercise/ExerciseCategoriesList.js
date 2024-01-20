import React from 'react';
import { nanoid } from '@reduxjs/toolkit';

import css from '../../pages/Exercises.module.css';
import ExerciseCategoriesItem from './ExerciseCategoriesItem';
function ExerciseCategoriesList({ arr, setSpec }) {
  try{
    return (
      <div className={css.arrCont}>
        {arr.map(v => (
          <ExerciseCategoriesItem item={v} key={nanoid()} setSpec={setSpec}/>
        ))}
      </div>
    );
  }catch{
    return <></>
  }

}

export default ExerciseCategoriesList;
