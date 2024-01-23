
import DatePicker from 'react-datepicker';

import DatePickerStyles from './DatePickerStyles';

// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 import "react-datepicker/dist/react-datepicker.css";

import sprite from '../../img/sprite/symbol-defs.svg';
import css from '../userForm/UserForm.module.css';
import style from "./Calendar.module.css"

export const Calendar = ({ selectedDate, setSelectedDate, display }) => {
//  тут в переданных появился дисплей выше
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (<>
    <style>{DatePickerStyles}</style>
   
    <div className={ css.InputHi} style={{ position: 'relative', display:display}}>  
    {/* это display:display я добавила, куда хочешь, переставь, передается в компоненте, где импортируется календарь как свойство календаря
     */}
        <svg className={style.iconSvg} width="18" height="18">
          <use href={`${sprite}#icon-calendar-normal`}></use>
        </svg>

        <DatePicker  className= {style.myDatePicker}
       selected={selectedDate}
        onChange={handleDateChange}
     
         
        customInput={<input className={css.inputField} style={{ cursor: 'pointer' }} />}
          dateFormat={'dd.MM.yyyy'}
          calendarStartDay={1}
          formatWeekDay={day => day.substring(0, 1)}
        />

       
      {/* </div> */}
    </div></>
  );
};
