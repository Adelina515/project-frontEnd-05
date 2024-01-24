import React, { useState } from 'react';
import { useEffect } from 'react';
import instance from 'instance/instance';
import ExerciseItem from './ExerciseItem';
import { nanoid } from '@reduxjs/toolkit';

import css from './ExerciseList.module.css';

function ExerciseList({ name, filter, setSelected }) {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    if (filter && name) {
      instance.get(`exercises/filter?category=${filter}&specific=${name}&page=1$perPage=8`).then(v => {
        setArr(v.data.result);
      });
    }
  }, [setArr, name, filter]);

  return (
    <div className={css.exerciseListContainer}>
      {arr.map(v => (
        <ExerciseItem key={nanoid()} exercise={v} setSelected={setSelected}/>
      ))}
      <div className={css.woman}/>
    </div>
  );
}

export default ExerciseList;
