import { useState } from 'react';
import css from './AddProductForm.module.css';
import formatDate from 'function/formatData';
export const AddProductForm = ({ data }) => {
  const [inputCals, setInputCals] = useState(0);
  const { calories, title, _id } = data;
  const countCalories = (inputCals * calories) / 100;
  const handleChange = e => {
    setInputCals(e.target.value);
  };
  const addToDiary = e => {
    e.preventDefault();
    const rawDate = new Date();
    const date = formatDate(rawDate);
    const add = {
      productID: _id,
      date,
      grams: Number(e.target.elements.amount.value),
      calories: countCalories,
    };
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
        <button type="button" className={css.btnCansel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
