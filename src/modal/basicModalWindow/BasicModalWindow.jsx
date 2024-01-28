import svg from '../../img/sprite/symbol-defs.svg';
import css from './BasicModalWindow.module.css';
export const BasicModalWindow = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  document.body.style.overflow = 'hidden';
  const handleEscapeKey = event => {
    if (event.code === 'Escape') {
      console.log('Escape');
      onClose();
      document.body.style.overflow = 'scroll';
      return document.removeEventListener('keydown', handleEscapeKey);
    }
  };
  isOpen && document.addEventListener('keydown', handleEscapeKey);
  const handleClose = e => {
    if (
      e.target.dataset.type === 'backdrop' ||
      e.target.dataset.type === 'close-modal'
    ) {
      document.body.style.overflow = 'scroll';
      onClose();
    }
  };
  return (
    <div className={css.backdrop} onClick={handleClose} data-type="backdrop">
      <div className={css.modal}>
        <button
          className={css.modalCloseBtn}
          type="button"
          onClick={handleClose}
          data-type="close-modal"
        >
          <svg className={css.svgclose}>
            <use href={`${svg}#icon-close-modal`}></use>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};
