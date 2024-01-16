import css from './Diary.module.css';

import TitlePage from '../components/TitlePage/TitlePage';
import DaySwitch from '../components/daySwitch/DaySwitch';
import DayDashboard from '../components/dayDashboard/DayDashboard';
import DayProducts from '../components/dayProducts/DayProducts';
import DayExercises from '../components/dayExercises/DayExercises';

import { fetchAllDiary } from "../redux/diary/diaryOperations";


import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import formatDate from '../function/formatData';

export default function Diary() {

     const dispatch = useDispatch();
    const [selectedDate, setSelectedDate] = useState(null);/*початкова дата не обрана*/
    /*Данні щоденника мають змінюватись при змінні  selectedDate*/
     useEffect(() => {
    const fetchDate = () => {
      if (selectedDate) {
        const date = {
          date: selectedDate,
        };
        dispatch(fetchAllDiary(date));
      }
    };
    fetchDate();
  }, [dispatch, selectedDate]);

/*Обробка вибраної дати */
   const handleDate = async (date) => {
    const formatedDate = formatDate(date);
    await setSelectedDate(formatedDate);
  };
  

    return (
        <div className ={css.diaryPage}>
            <div className={css.calendarCont}>
                    <TitlePage children = "Diary" />

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
