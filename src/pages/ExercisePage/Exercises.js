import React, { useEffect, useState } from 'react';
import css from './Exercises.module.css';
import ExerciseHead from './ExerciseHead';
import axios from 'axios';
import ExerciseList from './ExerciseList';

function Exercises(props) {
  const [exCat, setExCat] = useState('Body parts');
  const [arr, setArr] = useState([]);
  const [loading, setLoading]= useState(false);
  axios.defaults.baseURL = 'https://power-pulse-backend.onrender.com/exercises/';
  axios.defaults.headers.common.Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTQyNDlmODliYmU0YTAyMDg5MTk4ZCIsImlhdCI6MTcwNTI1NjA5NSwiZXhwIjoxNzA1MzM4ODk1fQ.EcF3rAObaMKRYxaPHAev1mOCEIiQ_qI_Kkj4tlZxk74"
  useEffect(() => {
    setArr([]);
    setLoading(true);
    axios.get("filter?filter="+exCat).then(v=>{
        setArr(v.data.filter(v=>v && v.filter===exCat));
    }).finally(()=>setLoading(false))
  }, [setArr, exCat]);

  console.log(arr);
  return (
    <div>
      <ExerciseHead exCat={exCat} setExCat={setExCat} />
      {loading?<div>Loading...</div>:<ExerciseList arr={arr} />}
    </div>
  );
}

export default Exercises;
