import css from './Diary.module.css';

import TitlePage from '../components/TitlePage/TitlePage';
import DaySwitch from '../components/daySwitch/DaySwitch';
import DayDashboard from '../components/dayDashboard/DayDashboard';
import DayProducts from '../components/dayProducts/DayProducts';
import DayExercises from '../components/dayExercises/DayExercises';
import { Container } from '../components/Container/Container';

import { fetchAllDiary } from '../redux/diary/diaryOperations';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import formatDate from '../function/formatData';

export default function Diary() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);
  console.log(user);
  const [dateExport, setDateExport] = useState(new Date());
  console.log('dateExport', dateExport);

  /*Обробка вибраної дати */
  const handleDate = date => {
    const formatedDate = formatDate(date);
    setDateExport(formatedDate);
  };

  useEffect(() => {
    dispatch(fetchAllDiary(dateExport));
  }, [dateExport, dispatch]);

  return (
    <div className={css.diary}>
      <Container>
        <div className={css.calendarCont}>
          <TitlePage children="Diary" />

          <div className={css.calendar}>
            <DaySwitch handleDate={handleDate} selectedDate={dateExport} />
          </div>
        </div>
        <div className={css.sectionCont}>
          <DayDashboard />
          <div>
            <DayProducts selectedDate={dateExport} />
            <DayExercises />
          </div>
        </div>
      </Container>
    </div>
  );
}
