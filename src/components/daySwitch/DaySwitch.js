import { forwardRef, useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import style from "./DaySwitch.module.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const OwnIconCalendar = () => {
  return <div className={style.calendarIconBody}>
    <div className={style.calendarIconLine}>
      <span></span>
      <span></span>
    </div>
  </div>
}

const DaySwitch = () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  // потрібна дата реєстрації користувача
  const [dateRegistration] = useState(new Date(selectedDate).setDate(new Date(selectedDate).getDate() - 1))

  const CustomInput = forwardRef(({value, onClick}, ref) => {
    return (
      <div className={style.body}>
        <div className={style.dateButton} onClick={onClick} ref={ref}>
          {format(selectedDate, "dd/MM/yyyy")}
        </div>
        <OwnIconCalendar/>
        <div className={style.arrowsBody}>
                    <span className={style.arrowsLeft}
                          onClick={() => {
                            if (selectedDate !== dateRegistration) {
                              setSelectedDate(new Date(selectedDate).setDate(new Date(selectedDate).getDate() - 1))
                            }
                          }}>
                    </span>
          <span className={style.arrowsRight}
                onClick={() =>
                  setSelectedDate(new Date(selectedDate).setDate(new Date(selectedDate).getDate() + 1))}
          ></span>
        </div>
      </div>
    );
  });

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
        }}
        customInput={<CustomInput/>}
        dateFormat={"dd MM yyyy"}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
        minDate={dateRegistration}
      />
    </>
  );

};


export default DaySwitch;
