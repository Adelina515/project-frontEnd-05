import React, { useEffect, useState } from 'react';
import css from './style.module.css';
import svg from '../../../img/sprite/symbol-defs.svg';
import ModalStat from './ModalStat';
import { useDispatch } from 'react-redux';
import { addExercisesDiary } from '../../../redux/diary/diaryOperations';
import { BasicModalWindow } from 'modal/basicModalWindow/BasicModalWindow';
import { NavLink } from 'react-router-dom';

function ExerciseModal({ ex, setEx, selectedDate }) {
  const [seconds, setSeconds] = useState(0);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState(false);
  const [finished, setFinished] = useState(false);
  const dispatch = useDispatch();

  const percentTimeLeft = (1 - seconds / (ex.time * 60)) * 100;
  const caloriesBurned = ((ex.burnedCalories * percentTimeLeft) / 100).toFixed(
    2
  );
  useEffect(() => {
    if (ex) {
      setOpen(true);
      setSeconds(ex.time * 60);
      setFinished(false);
    }
  }, [ex]);
  const onClose = () => {
    if (finished) {
      setOpen(false);
      setEx(undefined);
    } else {
      console.log("kj");
      const data = {
        exerciseId: ex._id,
        duration: (seconds / 60).toFixed(2),
        burnedCalories: caloriesBurned,
        date: selectedDate,
      };
      dispatch(addExercisesDiary(data));
      setFinished(true);
    }
  };
  useEffect(() => {
    if (!paused && !finished && seconds > 0) {
      setTimeout(() => {
        if (seconds === 1) {
          setFinished(true);
          setSeconds(0);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  }, [seconds, paused, finished]);

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
  if (!finished) {
    return (
      <BasicModalWindow isOpen={open} onClose={onClose}>
        <div className={css.modalContainer}>
          <div>
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
                  style={{
                    transform: `rotate(${(360 * percentTimeLeft) / 100}deg)`,
                  }}
                >
                  <div className={css.dot} />
                </div>
                <div className={css.time}>{convertTime(seconds)}</div>
              </div>
            </div>

            <button className={css.pauseBtn} onClick={() => setPaused(!paused)}>
              {' '}
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
              <span className={css.focus}>{Math.ceil(caloriesBurned)}</span>
            </p>
          </div>
          <div>
            <div>
              <div className={css.exerciseChars}>
                <ModalStat name={'Name'} val={ex.name} />
                <ModalStat name={'Target'} val={ex.target} />
                <ModalStat name={'Body Part'} val={ex.bodyPart} />
                <ModalStat name={'Equipment'} val={ex.equipment} />
              </div>
            </div>
            <button
              className={css.addBtn}
              datatype='close-modal'
              onClick={onClose}
            >
              Add to diary
            </button>
          </div>
        </div>
      </BasicModalWindow>
    );
  } else {
    return (
      <BasicModalWindow isOpen={open} onClose={onClose}>
        <div className={css.modalContainer}>
          <div>
            <div className={css.thumbContainer}>
              <img
                className={css.thumb}
                src="https://s3-alpha-sig.figma.com/img/59d5/2b65/a6a2c8aec4a3496c837c9b0a87d5c044?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HWANRVCWxA5doH3IckHWRjdihxZuoDiPb8gjXjgqC1af~NIWaZ5B62XnAWJMy9EOtTNQQ1-U5K2RT2u5lrO6pX79GxkJdX3vR0PfwNb~tvIJlL4V2z4WJOojCtrZdyP8piYXvDrFAzZ~HOv9oze~1t9CQ9TkQGjxr4DmmkA4j5MI9p2Whqbch-tAaZMNc~RTRPrIMR9wGNtWu7p8tNLOjvbfPX-5hXqt-lr~AqNSd7Uo~o5I7mM0Pa7HFxI~e0yIwZuVUK5NxMWqe162kV8z31b0ZA~sraruDDCslFBhg6sdESXDNN6-9VoAI-H9UAxVCP1rxIGK75rSxwlOBG5etA__"
                alt="arm"
              />
            </div>
            <h1>Well done</h1>
            <div className={css.finalStats}>
              <p>
                Your time:{' '}
                <span className={css.focus}>
                  {(ex.time - seconds / 60).toFixed(2)} minutes
                </span>
              </p>
              <p>
                Burned calories:{' '}
                <span className={css.focus}>{caloriesBurned}</span>
              </p>
            </div>

            <button
              onClick={onClose}
            >
              To next product
            </button>
            <br />
            <NavLink to={'/diary'} onClick={onClose} className={css.toDiary} datatype='close-modal'>
              To the diary
              <svg className={css.arrow}>
              <use href={`${svg}#icon-next-arrow`}/>
              </svg>
            </NavLink>
          </div>
        </div>
      </BasicModalWindow>
    );
  }
}

export default ExerciseModal;
