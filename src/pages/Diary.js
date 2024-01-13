import css from './Diary.module.css';

//import TitlePage from '../components/titlePage/TitlePage';
import DaySwitch from '../components/daySwitch/DaySwitch';
import DayDashboard from '../components/dayDashboard/DayDashboard';
import DayProducts from '../components/dayProducts/DayProducts';
import DayExercises from '../components/dayExercises/DayExercises';


export default function Diary() {

    return (
        <div className ={css.diaryPage}>
            <div className ={css.calendarCont}>
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
