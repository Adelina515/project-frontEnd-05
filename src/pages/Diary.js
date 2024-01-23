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
// import { selectDiaryExercises, selectDiaryProducts } from '../redux/diary/diarySelectors';


export default function Diary() {
  const dispatch = useDispatch();

  // const productsInDiary = useSelector(selectDiaryProducts);
  // const excersisesInDiary = useSelector(selectDiaryExercises);

  const [dateExport, setDateExport] = useState(null);
  
  useEffect(() => {
    const formatted = formatDate(new Date())
    setDateExport(formatted);
    dispatch(fetchAllDiary(formatted));
}, [dateExport, dispatch]);

  
  const handleDate = date => {
  const formatedDate = formatDate(date);
    return formatedDate;
  };

  console.log("dateExport >>", dateExport)
  
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
            <DayExercises selectedDate={dateExport}/>
          </div>
        </div>
      </Container>
    </div>
  );
}
