
import React from 'react';
import { useSelector } from 'react-redux';
import css from './DayDashboard.module.css';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import {
  selectDiaryProducts,
  selectDiaryExercises,
} from '../../redux';
import { selectUser } from '../../redux/UserPageCntrls/';



const DayDashboard = () => {
  const user = useSelector(selectUser);
  const products = useSelector(selectDiaryProducts);
  const exercises = useSelector(selectDiaryExercises);

  const dailyCalorieIntake = user.profileSettings?.bmr ?? '0';
  const caloriesConsumed = products.reduce(
    (sum, product) => sum + product.calories,
    0
  );
  const caloriesRemaining = dailyCalorieIntake - caloriesConsumed;
  const dailyPhysicalActivity = 110;
  const caloriesBurned = exercises.reduce(
    (sum, exercise) => sum + exercise.calories,
    0
  );
  const timeSport = exercises.reduce((sum, exercise) => sum + exercise.time, 0);

  const sportsRemaining = Math.floor(timeSport / 60) - dailyPhysicalActivity;

  const isCaloriesRemaining =
    caloriesConsumed < dailyCalorieIntake ? 'positive' : 'negative';
  const isSportsRemaining = sportsRemaining > 0 ? 'positive' : 'negative';

  return (
    <div className={css.dayDashboard}>
      <ul className={css.statisticList}>
        {/* ... (тут додаєте ваші компоненти StatisticsItem) */}
        <StatisticsItem
          statisticsName={'Daily calorie intake'}
          statisticsValue={`${dailyCalorieIntake}`}
          statisticPrimary
        />
        <StatisticsItem
          statisticsName={'Daily physical activity'}
          statisticsValue={`${dailyPhysicalActivity} min`}
          statisticPrimary
        />
        <StatisticsItem
          statisticsName={'Сalories consumed'}
          statisticsValue={`${caloriesConsumed}`}
        />
        <StatisticsItem
          statisticsName={'Сalories burned'}
          statisticsValue={`${caloriesBurned}`}
        />
        <StatisticsItem
          statisticsName={'Calories remaining'}
          statisticsValue={`${caloriesRemaining}`}
          fulfilledNorm={isCaloriesRemaining}
        />
        <StatisticsItem
          statisticsName={'Sports remaining'}
          statisticsValue={
            isSportsRemaining === 'positive'
              ? `+${sportsRemaining} min`
              : `${sportsRemaining} min`
          }
          fulfilledNorm={isSportsRemaining}
        />
      </ul>
      <div className={css.adviceWrap}>
        <div className={css.adviceIconWrap}>
          {/* Іконка */}
        </div>
        <p className={css.adviceText}>
          Записуйте всі прийоми їжі у щоденник калорій щодня. Це допоможе
          вам бути уважним до свого харчування та приймати обдумані рішення.
        </p>
      </div>
    </div>
  );
};

export default DayDashboard;