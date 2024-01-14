
import React from 'react';
//import { useSelector } from 'react-redux';
import css from './DayDashboard.module.css';
import StatisticsItem from '../StatisticsItem/StatisticsItem.jsx';



const DayDashboard = () => {

  return (
    <div className={css.dayDashboard}>
      <ul className={css.statisticList}>
        <StatisticsItem
          statisticsName={'Daily calorie intake'}
                  /*statisticsValue={`${}`}*/
            statisticsIcon={'icon-fork-filled'}
          statisticPrimary
        />
        <StatisticsItem
          statisticsName={'Daily physical activity'}
        /*statisticsValue={`${} min`}*/
            statisticsIcon={'icon-dumbbell-filled'}

          statisticPrimary
        />
        <StatisticsItem
          statisticsName={'Сalories consumed'}
                  /*statisticsValue={`${}`}*/
                statisticsIcon={'icon-apple-filled'}

        />
        <StatisticsItem
          statisticsName={'Сalories burned'}
                  /*statisticsValue={`${}`}*/
                              statisticsIcon={'icon-burn-filled'}

        />
        <StatisticsItem
          statisticsName={'Calories remaining'}
                  /*statisticsValue={`${}`}*/
            statisticsIcon={'icon-bubble-filled'}

        />
        <StatisticsItem
          statisticsName={'Sports remaining'}
          /*statisticsValue={} */ 
        statisticsIcon={'icon-running-filled'}

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