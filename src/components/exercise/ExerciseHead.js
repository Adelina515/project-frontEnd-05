import React from 'react';
import TitlePage from 'components/TitlePage/TitlePage';
import svg from '../../img/sprite/symbol-defs.svg';

import css from '../../pages/Exercises.module.css';

function ExerciseHead({ exCat, setExCat, name = 'exercises', back }) {
  const handleChangeCat = e => {
    setExCat(e.target.innerText.trim());
  };
  return (
    <div>
      <div className={css.headHolder}>
        {name !== 'exercises' ? (
          <div className={css.backArrow} onClick={back}>
            <svg>
              <use href={`${svg}#icon-next-arrow-gray`} />
            </svg>
            Back
          </div>
        ) : (
          <></>
        )}
        <TitlePage children={name.toUpperCase()[0] + name.substring(1)} />
        <div className={css.exerciseCategoryContainer}>
          <div
            onClick={handleChangeCat}
            className={exCat === 'Body parts' ? css.activeCat : css.cat}
          >
            Body parts
          </div>
          <div
            onClick={handleChangeCat}
            className={exCat === 'Muscles' ? css.activeCat : css.cat}
          >
            Muscles
          </div>
          <div
            onClick={handleChangeCat}
            className={exCat === 'Equipment' ? css.activeCat : css.cat}
          >
            Equipment
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExerciseHead;
