import css from './Diary.module.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import formatDate from '../function/formatData';

import TitlePage from '../components/TitlePage/TitlePage';
import DaySwitch from '../components/daySwitch/DaySwitch';
import DayDashboard from '../components/dayDashboard/DayDashboard';
import DayProducts from '../components/dayProducts/DayProducts';
import DayExercises from '../components/dayExercises/DayExercises';
import { Container } from '../components/Container/Container';

import { fetchAllDiary } from '../redux/diary/diaryOperations';

export default function Diary() {
  const dispatch = useDispatch();

  const [dateExport, setDateExport] = useState(null);

  useEffect(() => {
    dateExport && dispatch(fetchAllDiary(dateExport)) 
  }, [dateExport, dispatch]);

  const handleDate = date => {
    const formatedDate = formatDate(date);
    setDateExport(formatedDate);
    return formatedDate;
  };

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
            <DayExercises selectedDate={dateExport} />
          </div>
        </div>
      </Container>
    </div>
  );
}
