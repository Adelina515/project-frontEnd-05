import svg from '../../img/sprite/symbol-defs.svg';
import css from './productsModal.module.css';
export const ProductsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button className={css.modalCloseBtn} type="button" onClick={onClose}>
          <svg className={css.svgclose}>
            <use href={`${svg}#icon-close-modal`}></use>
          </svg>
        </button>
        <p className={css.text}>modal is under construction</p>
      </div>
    </div>
  );
};
