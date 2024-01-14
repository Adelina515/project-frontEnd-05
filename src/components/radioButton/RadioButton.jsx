import css from "./RadioButton.module.css"
export const RadioButton = ({ id, name, value, checked, label, onChange }) => (
    <div className="radio">
      <input
        className="radio-input"
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className={css.radioLabel} htmlFor={id}>
        {label}
      </label>
    </div>
  );