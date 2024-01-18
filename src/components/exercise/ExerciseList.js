import React, { useState } from 'react';
import { useEffect } from 'react';
import instance from 'instance/instance';
import ExerciseItem from './ExerciseItem';
import { nanoid } from '@reduxjs/toolkit';


function ExerciseList({ name, filter, setSelected }) {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    if (filter && name) {
      instance.get(`exercise?category=${filter}&specific=${name}`).then(v => {
        setArr(v.data.result);
      });
    }
  }, [setArr, name, filter]);

  return (
    <div>
      {arr.map(v => (
        <ExerciseItem key={nanoid()} exercise={v} setSelected={setSelected}/>
      ))}
    </div>
  );
}

export default ExerciseList;
