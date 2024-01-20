import React, { useEffect, useState } from 'react';
import css from './style.module.css';
import svg from '../../../img/sprite/symbol-defs.svg';

function ExerciseModal({ ex }) {
  const [seconds, setSeconds] = useState(0);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState(false);
  let timer;
  useEffect(() => {
    if (ex) {
      setOpen(true);
      console.log('dldk');
      setSeconds(ex.time * 60);
    }
  }, [setOpen, ex]);

  useEffect(() => {
    if (seconds > 0 && !paused) {
      timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
  }, [seconds, paused]);

  const closeModal = e => {
    if (e.target.id === 'close') {
      ex = undefined;
      setOpen(false);
      clearTimeout(timer);
    }
  };
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

  if (open) {
    const percentTimeLeft = (1 - seconds / (ex.time * 60)) * 100;
    return (
      <div className={css.backdrop} onClick={closeModal} id="close">
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
                background: `radial-gradient(closest-side, #10100f 90%, transparent 90% 100%), conic-gradient(var( --decorate-color) ${percentTimeLeft}%, transparent ${percentTimeLeft}%)`,
              }}
            >
              <div
                className={css.dotContainer}
                style={{ animationPlayState: paused ? 'paused' : 'running' }}
              >
              <div className={css.dot}/>
              </div>
            </div>

            <div className={css.time}>{convertTime(seconds)}</div>
            <button className={css.pauseBtn} onClick={() => setPaused(!paused)}>
              <svg className={css.pauseSvg}>
                {paused ? (
                  <use href={`${svg}#icon-play-square`} />
                ) : (
                  <use href={`${svg}#icon-pause-square`} />
                )}
              </svg>
            </button>
            <p>
              Burned calories: <span>{Math.round(ex.burnedCalories*percentTimeLeft/100, 2)}</span>
            </p>
            <div>
              Name: 
              <span>{ex.name}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
}

export default ExerciseModal;
