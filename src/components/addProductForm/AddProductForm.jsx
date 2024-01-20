import { useState } from 'react';
import css from './AddProductForm.module.css';
// import formatDate from 'function/formatData';
import { useDispatch, useSelector } from 'react-redux';
import { addProductDiary } from '../../redux/diary/diaryOperations';
import { selectDiaryError } from '../../redux/diary/diarySelectors';
import { handleSuccess } from '../../redux/products/productsSlice';
import toast from 'react-hot-toast';
export const AddProductForm = ({ data, count, date }) => {
  const [inputCals, setInputCals] = useState(0);
  const dispatch = useDispatch();
  const addError = useSelector(selectDiaryError);
  const { calories, title, _id } = data;
  const countCalories = (inputCals * calories) / 100;
  const handleChange = e => {
    setInputCals(e.target.value);
  };
  const addToDiary = e => {
    e.preventDefault();
    // const rawDate = new Date();
    // const date = formatDate(rawDate);
    const add = {
      productId: _id,
      date,
      grams: Number(e.target.elements.amount.value),
      calories: Math.floor(countCalories),
    };
    dispatch(addProductDiary(add));
    addError
      ? toast.error('Oops... Something went wrong! Try again!', {
          position: 'top-right',
        })
      : dispatch(handleSuccess(true));
    count(Math.floor(countCalories));
  };
  return (
    <form className={css.form} onSubmit={addToDiary}>
      <input
        type="text"
        className={css.input}
        value={title}
        name="title"
        disabled
      />
      <div className={css.inputWrapper}>
        <input
          type="number"
          className={`${css.input} ${css.count}`}
          onChange={handleChange}
          name="amount"
          required
        />
        <p className={css.grams}>grams</p>
      </div>
      <p className={css.calories}>
        Calories: <span className={css.count}>{Math.floor(countCalories)}</span>
      </p>
      <div className={css.btnWrapper}>
        <button type="submit" className={css.btnAdd}>
          Add to diary
        </button>
        <button type="button" className={css.btnCansel} data-type="close-modal">
          Cancel
        </button>
      </div>
    </form>
  );
};
