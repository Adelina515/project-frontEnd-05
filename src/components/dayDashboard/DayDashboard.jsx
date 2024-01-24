import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './DayDashboard.module.css';
import StatisticsItem from './StatisticsItem/StatisticsItem';

import {
  selectBurnedCaloriesByDate,
  selectConsumedCaloriesByDate,
  selectSportsRemaining,
} from '../../redux/diary/diarySelectors';

/*import {selectUserBmr } from '../../redux/UserPageCntrls/selectors';*/

import sprite from '../../img/sprite/symbol-defs.svg';

export const selectUserBmr = state => state.auth.user.bmr;

const DayDashboard = () => {
  const dispatch = useDispatch();
  const [calories, setCalories] = useState(null);
  const [daily, setDaily] = useState(null);
  const [burned, setBurned] = useState(null);
  const [sports, setSports] = useState(null);
  // const [dateExport, setDateExport] = useState(null);
  
    const consumedCaloriesByDate = useSelector(selectConsumedCaloriesByDate);
    const burnedCaloriesByDate = useSelector(
      selectBurnedCaloriesByDate
    );
    const sportsRemaining = useSelector(selectSportsRemaining);
    const dailyCalorieIntake = useSelector(selectUserBmr);

  useEffect(() => {
    setCalories(
      consumedCaloriesByDate ? consumedCaloriesByDate.toFixed(2) : null
    );
    setDaily(dailyCalorieIntake ? dailyCalorieIntake.toFixed(2) : null);
    setBurned(burnedCaloriesByDate ? burnedCaloriesByDate.toFixed(2) : null);
    setSports(sportsRemaining ? sportsRemaining.toFixed(2) : null);
  }, [
    consumedCaloriesByDate,
    dailyCalorieIntake,
    burnedCaloriesByDate,
    sportsRemaining, dispatch,
  ]);

  const caloriesRemaining = daily - calories;
  const dailyPhysicalActivity = 110;

  const isCaloriesRemaining = calories < daily ? `positive` : `negative`;
  const isSportsRemaining = sportsRemaining > 0 ? `positive` : `negative`;

  return (
    <div className={css.dayDashboard}>
      <ul className={css.statisticList}>
        <StatisticsItem
          statisticsName={'Daily calorie intake'}
          statisticsValue={`${dailyCalorieIntake}`}
          statisticsIcon={'icon-fork-filled'}
          statisticPrimary
        />
        <StatisticsItem
          statisticsName={'Daily physical activity'}
          statisticsValue={`${dailyPhysicalActivity} min`}
          statisticsIcon={'icon-dumbbell-filled'}
          statisticPrimary
        />
        <StatisticsItem
          statisticsName={'Calories consumed'}
          statisticsValue={`${calories}`}
          statisticsIcon={'icon-apple-filled'}
        />
        <StatisticsItem
          statisticsName={'Calories burned'}
          statisticsValue={`${burned}`}
          statisticsIcon={'icon-burn-filled'}
        />
        <StatisticsItem
          statisticsName={'Calories remaining'}
          statisticsValue={`${caloriesRemaining}`}
          statisticsIcon={'icon-bubble-filled'}
          fulfilledNorm={isCaloriesRemaining}
        />
        <StatisticsItem
          statisticsName={'Sports remaining'}
          statisticsValue={
            isSportsRemaining === 'positive'
              ? `+${sports} min`
              : `${sports} min`
          }
          statisticsIcon={'icon-running-filled'}
        />
      </ul>
      <div className={css.adviceWrap}>
        <div className={css.adviceIconWrap}>
          <svg width="24px" height="24px">
            <use href={`${sprite}#icon-warning`}></use>
          </svg>{' '}
        </div>
        <p className={css.adviceText}>
          Record all your meals in the calorie diary every day. This will help
          you be aware of your nutrition and make informed choices.
        </p>
      </div>
    </div>
  );
};

export default DayDashboard;
