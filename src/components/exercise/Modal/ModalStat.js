import React from 'react';
import css from './style.module.css';


function ModalStat({ name, val }) {
  return (
    <div className={css.modalStat}>
      {name}
      <p>{(val.toUpperCase()[0]+val.slice(1))}</p>
    </div>
  );
}

export default ModalStat;
