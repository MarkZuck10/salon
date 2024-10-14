import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ selectedDate, onChangeDate }) => {
  return (
    <div className="date-picker box-border border-2 border-black cursor-pointer">
      <DatePicker
        selected={selectedDate}
        onChange={onChangeDate}
        dateFormat="yyyy-MM-dd"
        minDate="2024-06-20"
      />
    </div>
  );
};

export default DateInput;
