import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";

const Pricing = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  return (
    <>
      <DatePicker
      
        selected={selectedDate}
        onChange={(Date) => {
          setSelectedDate(Date);
        }}
      />
      <TimePicker
        selected={selectedTime}
        onChange={(Time) => {
          setSelectedTime(Time);
        }}
      />
    </>
  );
};
export default Pricing;
