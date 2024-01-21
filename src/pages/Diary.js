import css from './Diary.module.css';

import TitlePage from '../components/TitlePage/TitlePage';
import DaySwitch from '../components/daySwitch/DaySwitch';
import DayDashboard from '../components/dayDashboard/DayDashboard';
import DayProducts from '../components/dayProducts/DayProducts';
import DayExercises from '../components/dayExercises/DayExercises';
import { Container } from '../components/Container/Container';


import { fetchAllDiary } from "../redux/diary/diaryOperations";


import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import formatDate from '../function/formatData';

export default function Diary() {

  const dispatch = useDispatch();
  
    const [selectedDate, setSelectedDate] = useState(new Date());

/*Обробка вибраної дати */
   const handleDate = async (date) => {
    const formatedDate = formatDate(date);
    await setSelectedDate(formatedDate);
  };

    useEffect(() => {
        dispatch(fetchAllDiary("2024-01-15"));
  }, [selectedDate, dispatch]);


  

    return (
        <div className={css.diary}>
            <Container>
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
 
             </Container>
           
        </div>
    )
}
