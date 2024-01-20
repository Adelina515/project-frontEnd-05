import css from './info-block.module.css';
import sprite from '../../img/sprite/symbol-defs.svg';
const InfoBlock = () => {
  return (
    <div className={css.tutorialsWrapper}>
      <div className={css.videoTutorial}>
        <button type="button" className={css.playButton}>
          <svg className={css.videoPlayer}>
            <use href={`${sprite}#icon-play`}></use>
          </svg>
        </button>
        <div className={css.textWrapper}>
          <span className={css.number}>350+</span>
          <span className={css.text}>Video tutorial</span>
        </div>
      </div>

      <div className={css.runningTutorial}>
        <div className={css.iconWrapper}>
          <svg className={css.runningMan}>
            <use href={`${sprite}#icon-runningMan`}></use>
          </svg>
        </div>

        <div className={css.textCalWrapper}>
          <span className={css.numberCal}>500</span>
          <span className={css.textCal}>cal</span>
        </div>
      </div>
    </div>
  );
};
export default InfoBlock;
