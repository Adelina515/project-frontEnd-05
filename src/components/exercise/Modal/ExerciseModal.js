import React, { useEffect, useState } from 'react';
import css from './style.module.css';
import svg from '../../../img/sprite/symbol-defs.svg';
import ModalStat from './ModalStat';
import { useDispatch } from 'react-redux';
import { addExercisesDiary } from '../../../redux/diary/diaryOperations';
import formatDate from 'function/formatData';

function ExerciseModal({ ex }) {
  const [seconds, setSeconds] = useState(0);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState(false);
  const [finished, setFinished] = useState(false);
  const dispatch = useDispatch();
  
  const percentTimeLeft = (1 - seconds / (ex.time * 60)) * 100;
  const caloriesBurned = ((ex.burnedCalories * percentTimeLeft) / 100).toFixed(2);
  useEffect(() => {
    if (ex) {
      setOpen(true);
      setSeconds(ex.time * 60);
      setFinished(false);
    }
  }, [ex]);
  useEffect(()=>{
    if(finished){
      const data={
        id:ex._id,
        duration:(seconds / 60).toFixed(2),
        burnedCalories: caloriesBurned,
        date: formatDate(new Date())
      }
      dispatch(addExercisesDiary(data))
    }
  }, [finished, ex, seconds, caloriesBurned, dispatch])
  useEffect(() => {
    if (seconds <= 0) {
      setFinished(true);
    } else if (!paused && !finished) {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
  }, [seconds, paused, finished]);

  const closeModal = e => {
    if (e.target.id === 'close') {
      ex = undefined;
      setOpen(false);
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
    if (!finished) {
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
                  <div className={css.dot} />
                </div>
                <div className={css.time}>{convertTime(seconds)}</div>
              </div>

              <button
                className={css.pauseBtn}
                onClick={() => setPaused(!paused)}
              >
                <svg className={css.pauseSvg}>
                  {paused ? (
                    <use href={`${svg}#icon-play-square`} />
                  ) : (
                    <use href={`${svg}#icon-pause-square`} />
                  )}
                </svg>
              </button>
              <p>
                Burned calories:{' '}
                <span className={css.focus}>{caloriesBurned}</span>
              </p>
              <div className={css.exerciseChars}>
                <ModalStat name={'Name'} val={ex.name} />
                <ModalStat name={'Target'} val={ex.target} />
                <ModalStat name={'Body Part'} val={ex.bodyPart} />
                <ModalStat name={'Equipment'} val={ex.equipment} />
              </div>
            </div>
            <button
              className={css.addBtn}
              onClick={() => {
                setFinished(true);
              }}
            >
              Add to diary
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className={css.backdrop} onClick={closeModal} id="close">
          <div className={css.modalContainer}>
            <img className={css.thumb} alt="dls" />
            <p>
              Your time:{' '}
              <span className={css.focus}>
                {(seconds / 60).toFixed(2)} minutes
              </span>
            </p>
            <p>
              Burned calories:{' '}
              <span className={css.focus}>{caloriesBurned}</span>
            </p>
          </div>
        </div>
      );
    }
  }
  return <></>;
}

export default ExerciseModal;
