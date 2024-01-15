import React from 'react';
import TitlePage from 'components/TitlePage/TitlePage';

import css from '../../pages/Exercises.module.css';

function ExerciseHead({exCat, setExCat}) {
    const handleChangeCat=(e)=>{
        setExCat(e.target.innerText.trim())
    }
    return (
        <div>
             <TitlePage children={"Exercises"}/>
            <div className={css.exerciseCategoryContainer}>
                <div onClick={handleChangeCat} className={exCat==="Body parts" ? css.activeCat:css.cat}>Body parts</div>
                <div onClick={handleChangeCat} className={exCat==="Muscles" ? css.activeCat:css.cat}>Muscles</div>
                <div onClick={handleChangeCat} className={exCat==="Equipment" ? css.activeCat:css.cat}>Equipment</div>
            </div>
        </div>
    );
}

export default ExerciseHead;