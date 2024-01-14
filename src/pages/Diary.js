import css from './Diary.module.css';

import TitlePage from '../components/TitlePage/TitlePage';
import DaySwitch from '../components/daySwitch/DaySwitch';
import DayDashboard from '../components/dayDashboard/DayDashboard';
import DayProducts from '../components/dayProducts/DayProducts';
import DayExercises from '../components/dayExercises/DayExercises';

import { fetchAllDiary } from "../../redux/diary/diaryOperations";


import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";



export default function Diary() {

     const dispatch = useDispatch();
    const [selectedDate/* setSelectedDate*/] = useState(null);/*початкова дата не обрана*/
    
     useEffect(() => {
    const fetchDate = () => {/*Данні щоденника мають змінюватись при змінні  selectedDate*/
      if (selectedDate) {
        const date = {
          date: selectedDate,
        };
        dispatch(fetchAllDiary(date));
      }
    };
    fetchDate();
  }, [dispatch, selectedDate]);

    return (
        <div className ={css.diaryPage}>
            <div className={css.calendarCont}>
                    <TitlePage title="Diary" />

                <div className ={css.calendar}>
                    <DaySwitch />
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
