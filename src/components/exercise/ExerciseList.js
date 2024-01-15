import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import ExerciseItem from './ExerciseItem';
import { nanoid } from '@reduxjs/toolkit';


function ExerciseList({ name, filter }) {
  const [arr, setArr] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  axios.defaults.baseURL =
    'https://power-pulse-backend.onrender.com/exercises/filter';
  useEffect(() => {
    if (filter && name) {
      axios.get(`?category=${filter}&specific=${name}`).then(v => {
        console.log(v.data);
        setArr(v.data.result);
      });
    }
  }, [setArr, name, filter]);

  return (
    <div>
      {arr.map(v => (
        <ExerciseItem key={nanoid()} exercise={v}/>
      ))}
    </div>
  );
}

export default ExerciseList;
