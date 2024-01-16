// import svg from '../../img/sprite/symbol-defs.svg';
// import css from './productsModal.module.css';
// export const ProductsModal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;
//   const handleEscapeKey = event => {
//     if (event.code === 'Escape') {
//       console.log('Escape');
//       onClose();
//       return document.removeEventListener('keydown', handleEscapeKey);
//     }
//   };
//   isOpen && document.addEventListener('keydown', handleEscapeKey);
//   const handleClose = e => {
//     if (
//       e.target.dataset.type === 'backdrop' ||
//       e.target.dataset.type === 'close-modal'
//     ) {
//       onClose();
//     }
//   };
//   return (
//     <div className={css.backdrop} onClick={handleClose} data-type="backdrop">
//       <div className={css.modal}>
//         <button
//           className={css.modalCloseBtn}
//           type="button"
//           onClick={handleClose}
//           data-type="close-modal"
//         >
//           <svg className={css.svgclose}>
//             <use href={`${svg}#icon-close-modal`}></use>
//           </svg>
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };
