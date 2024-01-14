import css from './ExercisesTable.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import sprite from '../../../img/sprite/symbol-defs.svg';

const ExercisesTable = (props) => {
    const { exercises } = props;
    const capitalizedWord = (word) => {
  return word.substring(0, 1).toUpperCase() + word.substring(1);
};
    return (
         <>
      <ul className={css.diaryMainList}>
        {exercises.map(
          ({ _id, bodyPart, equipment, name, target, calories, time }) => (
            <li key={nanoid()} className={css.diaryMainItem}>
              <table className={css.table}>
                <tbody className={css.bodyTable}>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Body Part</th>
                    <td className={css.nameValue}>
                      {capitalizedWord(bodyPart)}
                    </td>
                  </tr>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Equipment</th>
                    <td className={css.nameValue}>
                      {capitalizedWord(equipment)}
                    </td>
                  </tr>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Name</th>
                    <td className={css.nameValue}>{capitalizedWord(name)}</td>
                  </tr>
                </tbody>
                <tbody className={css.elementWrap}>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Target</th>
                    <td className={css.nameValue}>{capitalizedWord(target)}</td>
                  </tr>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Burned Calories</th>
                    <td className={css.nameValue}>{calories}</td>
                  </tr>
                  <tr className={css.element}>
                    <th className={css.nameCategory}>Time</th>
                    <td className={css.nameValue}>{time}</td>
                  </tr>
                  <tr className={css.element}>
                    <th className={`${css.nameCategory} ${css.nameTrash}`}>
                      Trash
                    </th>
                    <td> 
                      <svg className={css.iconTresh} width="98px" height="35px">
                        <use href={`${sprite}#icon-trash`}></use>
                      </svg>
                  </td>
                  </tr>
                </tbody>
              </table>
            </li>
          )
        )}
      </ul>
    </>
    )
    
}

ExercisesTable.propTypes = {
  exercises: PropTypes.array.isRequired,
};



export default ExercisesTable;


