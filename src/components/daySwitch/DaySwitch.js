import { forwardRef, useEffect, useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import style from './DaySwitch.module.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Calendar } from 'components/calendar/Calendar';

const OwnIconCalendar = () => {
  return (
    <div className={style.calendarIconBody}>
      <div className={style.calendarIconLine}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

const DaySwitch = ({ handleDate }) => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(() => {
      handleDate(selectedDate);

  }, [selectedDate, handleDate]);

  // потрібна дата реєстрації користувача
  const [dateRegistration] = useState(
    new Date(selectedDate).setDate(new Date(selectedDate).getDate() - 1)
  );

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <div className={style.body}>
        <div className={style.dateButton} onClick={onClick} ref={ref}>
          {format(selectedDate, 'dd/MM/yyyy')}
        </div>
        <OwnIconCalendar />
        <div className={style.arrowsBody}>
          <span
            className={style.arrowsLeft}
            onClick={() => {
              if (selectedDate !== dateRegistration) {
                setSelectedDate(
                  new Date(
                    new Date(selectedDate).setDate(
                      new Date(selectedDate).getDate() - 1
                    )
                  )
                );
              }
            }}
          ></span>
          <span
            className={style.arrowsRight}
            onClick={() => {
              const nd = new Date(
                new Date(selectedDate).setDate(
                  new Date(selectedDate).getDate() + 1
                )
              );
              setSelectedDate(nd);
            }}
          ></span>
        </div>
      </div>
    );
  });

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
          handleDate(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        formatWeekDay={day => day.substr(0, 1)}
        minDate={dateRegistration}
      />

      <Calendar display={'none'}></Calendar>
      {/* тут передается дисплей нан */}
    </>
  );
};

export default DaySwitch;
