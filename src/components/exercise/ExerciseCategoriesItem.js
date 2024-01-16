import React from 'react';
import { useNavigate  } from "react-router-dom";

import css from '../../pages/Exercises.module.css';

function ExerciseCategoriesItem({item}) {
    const navigate = useNavigate();
    return (
        <div className={css.arrElCont} onClick={(e)=>{
            navigate(`/exercises?filter=${item.filter}&name=${item.name}`);
        }}>
          <img src={item.imgURL} alt="exercise_image" />
          <div>
            <h2>{(item.name.toUpperCase()[0]+item.name.substring(1))}</h2>
            <p>{item.filter}</p>
          </div>
        </div>
    );
}

export default ExerciseCategoriesItem;