import React from 'react';
import { useNavigate  } from "react-router-dom";
import { nanoid } from '@reduxjs/toolkit';

import css from './Exercises.module.css';
function ExerciseList({ arr }) {
    const navigate = useNavigate();
  return (
    <div className={css.arrCont}>
      {arr.map(v => (
        <div key={nanoid()} className={css.arrElCont} onClick={(e)=>{
            navigate(`/exercises/?${v.filter}=${v.name}`);
        }}>
          <img src={v.imgURL} alt="exercise_image" />
          <div>
            <h2>{(v.name.toUpperCase()[0]+v.name.substring(1))}</h2>
            <p>{v.filter}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExerciseList;
