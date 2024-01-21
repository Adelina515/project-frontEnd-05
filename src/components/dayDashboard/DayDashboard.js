
import React from 'react';
import { useSelector } from 'react-redux';
import css from './DayDashboard.module.css';
import StatisticsItem from './StatisticsItem/StatisticsItem';

import { selectBurnedCaloriesByDate, selectConsumedCaloriesByDate, selectSportsRemaining } from '../../redux/diary/diarySelectors';


/*import {selectUser } from '../../redux/UserPageCntrls/selectors';*/

import sprite from '../../img/sprite/symbol-defs.svg';







export const selectUserBmr = state => state.auth.user.bmr
const DayDashboard = () => {
  const consumedCaloriesByDate = useSelector(selectConsumedCaloriesByDate);
  const burnedCaloriesByDate = useSelector(selectBurnedCaloriesByDate);
  const sportsRemaining = useSelector(selectSportsRemaining);
  const {dailyCalorieIntake} = useSelector(selectUserBmr);
 
 
  const caloriesRemaining = dailyCalorieIntake - consumedCaloriesByDate;
  const dailyPhysicalActivity = 110;

    const isCaloriesRemaining =
    consumedCaloriesByDate < dailyCalorieIntake ? `positive` : `negative`;
  const isSportsRemaining =
    sportsRemaining > 0 ? `positive` : `negative`;

  
 


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
          statisticsName={'Сalories consumed'}
          statisticsValue={`${consumedCaloriesByDate}`}
                statisticsIcon={'icon-apple-filled'}

        />
        <StatisticsItem
          statisticsName={'Сalories burned'}
          statisticsValue={`${burnedCaloriesByDate}`}
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
              ? `+${sportsRemaining} min`
              : `${sportsRemaining} min`
          }        statisticsIcon={'icon-running-filled'}

        />
      </ul>
      <div className={css.adviceWrap}>
        <div className={css.adviceIconWrap}>
 <svg  width="24px" height="24px">
              <use href={`${sprite}#icon-warning`}></use>
            </svg>        </div>
        <p className={css.adviceText}>
          Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices.
        </p>
      </div>
    </div>
  );
};

export default DayDashboard;