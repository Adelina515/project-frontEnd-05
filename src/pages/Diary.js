import css from './Diary.module.css';

import TitlePage from '../components/TitlePage/TitlePage';
import DaySwitch from '../components/daySwitch/DaySwitch';
import DayDashboard from '../components/dayDashboard/DayDashboard';
import DayProducts from '../components/dayProducts/DayProducts';
import DayExercises from '../components/dayExercises/DayExercises';

//import { fetchAllDiary } from "../redux/diary/diaryOperations";


//import { useDispatch } from "react-redux";
import { /*useEffect,*/ useState } from "react";



export default function Diary() {

     //const dispatch = useDispatch();
    const [/*selectedDate,*/ setSelectedDate] = useState(null);/*початкова дата не обрана*/
    /*Данні щоденника мають змінюватись при змінні  selectedDate*/
     /*useEffect(() => {
    const fetchDate = () => {
      if (selectedDate) {
        const date = {
          date: selectedDate,
        };
        dispatch(fetchAllDiary(date));
      }
    };
    fetchDate();
  }, [dispatch, selectedDate]);*/



/*для форматування дати, переданої як аргумент, у рядок у форматі "рік-місяць-день" */
  const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
  };
/*Обробка вибраної дати */
   const handleDate = async (date) => {
    const formatedDate = formatDate(date);
    await setSelectedDate(formatedDate);
  };
  

    return (
        <div className ={css.diaryPage}>
            <div className={css.calendarCont}>
                    <TitlePage title="Diary" />

                <div className ={css.calendar}>
                    <DaySwitch handleDate={handleDate}/>
                </div>
            </div>
            <div className ={css.sectionCont}>
                <DayDashboard />
                <div>
                    <DayProducts />
                    <DayExercises />
                </div>
            </div>

        </div>
    )
}
