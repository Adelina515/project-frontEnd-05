import React from 'react';
import { nanoid } from '@reduxjs/toolkit';

import css from '../../pages/Exercises.module.css';
import ExerciseCategoriesItem from './ExerciseCategoriesItem';
function ExerciseCategoriesList({ data, setSpec }) {
  try{
    return (
      <div className={css.arrCont}>
        {data.result.map(v => (
          <ExerciseCategoriesItem item={v} key={nanoid()} setSpec={setSpec}/>
        ))}
      </div>
    );
  }catch{
    return <></>
  }

}

export default ExerciseCategoriesList;
