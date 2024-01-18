
import React from 'react';
/*import { useSelector } from 'react-redux';*/
import css from './DayDashboard.module.css';
import StatisticsItem from './StatisticsItem/StatisticsItem';
/*import { useDispatch } from "react-redux";


import { useEffect } from 'react';

import { fetchAllDiary } from "../../redux/diary/diaryOperations";*/





const DayDashboard = () => {
/*const dispatch = useDispatch();
const dispatch = useDispatch();
  const { consumedCaloriesByDate, burnedCaloriesByDate, sportsRemaining } = useSelector((state) => state.diary);
  const {
    dailyCalorieIntake,
    consumedCaloriesByDate,
    dailyPhysicalActivity,
    burnedCaloriesByDate,
    sportsRemaining,
  } = useSelector(state => state.stats.dailyStatistics);

  
   useEffect(() => {
    dispatch((fetchAllDiary()));
  }, [dispatch]);
*/
  /*const caloriesRemaining = dailyCalorieIntake - consumedCaloriesByDate;*/

    /*const isCaloriesRemaining =
    consumedCaloriesByDate < dailyCalorieIntake ? `positive` : `negative`;
  const isSportsRemaining =
    sportsRemaining > 0 ? `positive` : `negative`;*/

  
 


  return (
    <div className={css.dayDashboard}>
      <ul className={css.statisticList}>
        <StatisticsItem
          statisticsName={'Daily calorie intake'}
          /*statisticsValue={`${dailyCalorieIntake}`}*/
            statisticsIcon={'icon-fork-filled'}
          statisticPrimary
        />
        <StatisticsItem
          statisticsName={'Daily physical activity'}
          /*statisticsValue={`${dailyPhysicalActivity} min`}*/
            statisticsIcon={'icon-dumbbell-filled'}

          statisticPrimary
        />
        <StatisticsItem
          statisticsName={'Сalories consumed'}
          /*statisticsValue={`${consumedCaloriesByDate}`}*/
                statisticsIcon={'icon-apple-filled'}

        />
        <StatisticsItem
          statisticsName={'Сalories burned'}
          /*statisticsValue={`${burnedCaloriesByDate}`}*/
                              statisticsIcon={'icon-burn-filled'}

        />
        <StatisticsItem
          statisticsName={'Calories remaining'}
         /* statisticsValue={`${caloriesRemaining}`}*/
          statisticsIcon={'icon-bubble-filled'}
                    /*fulfilledNorm={isCaloriesRemaining}*/


        />
        <StatisticsItem
          statisticsName={'Sports remaining'}
 /*statisticsValue={
            isSportsRemaining === 'positive'
              ? `+${sportsRemaining} min`
              : `${sportsRemaining} min`
          }   */     statisticsIcon={'icon-running-filled'}

        />
      </ul>
      <div className={css.adviceWrap}>
        <div className={css.adviceIconWrap}>
          {/* Іконка */}
        </div>
        <p className={css.adviceText}>
          Record all your meals in the calorie diary every day. This will help you be aware of your nutrition and make informed choices.
        </p>
      </div>
    </div>
  );
};

export default DayDashboard;