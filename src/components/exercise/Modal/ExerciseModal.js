import React, { useEffect, useState } from 'react';
import css from './style.module.css';
import svg from '../../../img/sprite/symbol-defs.svg';

function ExerciseModal({ ex }) {
  const [seconds, setSeconds] = useState(ex.time ? ex.time * 60 : 0);
  const [paused, setPaused] = useState(false);
  const percentTimeLeft = (1 - seconds / ex.time) * 100;
  useEffect(() => {
    const timer = setTimeout(() => {
      setSeconds(seconds - 1);
    }, 1000);
    if (seconds <= 0) {
      clearInterval(timer);
    }
  }, [seconds]);

  const convertTime = sec => {
    const min = Math.floor(sec / 60);
    sec = sec % 60;
    if (sec < 10) {
      sec = '0' + sec;
    }
    if (min < 10) {
      return '0' + min + ':' + sec;
    }
    return min + ':' + sec;
  };
  if (ex) {
    console.log(ex.time);
    return (
      <div className={css.backdrop}>
        <div className={css.modalContainer}>
          <img
            className={css.modalAnimation}
            alt="exercise tutorial"
            src={ex.gifUrl}
          />
          <div className={css.modalTime}>
            <p>Time</p>
            <div
              className={css.progressBar}
              style={{
                background: `radial-gradient(closest-side, #10100f 80%, transparent 80% 100%), conic-gradient(var( --decorate-color) ${percentTimeLeft}%, transparent ${percentTimeLeft}%)`,
              }}
            ></div>
            <div className={css.time}>{convertTime(seconds)}</div>
            <button className={css.pauseBtn} onClick={()=>setPaused(!paused)}>
              
              <svg className={css.pauseSvg}>
                {paused?<use href={`${svg}#icon-play-square`}/>:<use href={`${svg}#icon-pause-square`}/>}
                
              </svg>
            </button>
            <p>
              Burned calories: <span></span>
            </p>
            <div>
              Name
              <span></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
}

export default ExerciseModal;
