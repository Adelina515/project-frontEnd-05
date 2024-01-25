import css from './ExercisesTable.module.css';
import sprite from '../../../img/sprite/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { deleteExercisesDiary } from '../../../redux/diary/diaryOperations';

const ExercisesTable = ({ exercises }) => {

  const capitalizedWord = word => {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
  };

  const dispatch = useDispatch();

  const deleteExercise = _id => {
    dispatch(deleteExercisesDiary(_id));
  };
  const data = useSelector(state => state.diary);
  console.log(data);

  return (
    <>
      <ul className={css.diaryMainList}>
        {exercises.map(
          ({
            _id,
            burnedCalories,
            duration,
            exerciseId: { equipment, name, target, bodyPart },
          }) => {
            const handleDelete = e => {
              e.target.closest('li').style.display = 'none';
              deleteExercise(_id);
            };
            return (
              <li key={_id} className={css.diaryMainItem}>
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
                      <td className={css.nameValue}>
                        {capitalizedWord(target)}
                      </td>
                    </tr>
                    <tr className={css.element}>
                      <th className={css.nameCategory}>Burned Calories</th>
                      <td className={css.nameValue}>{burnedCalories}</td>
                    </tr>
                    <tr className={css.element}>
                      <th className={css.nameCategory}>Time</th>
                      <td className={css.nameValue}>{duration}</td>
                    </tr>
                    <tr className={css.element}>
                      <th className={`${css.nameCategory} ${css.nameTrash}`}>
                        Trash
                      </th>
                      <td
                        className={css.iconCentr}
                        onClick={handleDelete}
                      >
                        <svg
                          className={css.iconTresh}
                          width="20px"
                          height="20px"
                        >
                          <use href={`${sprite}#icon-trash`}></use>
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
};



export default ExercisesTable;
