import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";

// Lista mjeseci
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Generisanje godina bez lodash
const years = Array.from(
  { length: new Date().getFullYear() - 1990 + 1 },
  (_, i) => 1990 + i
);

// Custom header
const CustomHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled
}) => (
  <div style={{ margin: 10, display: "flex", justifyContent: "center", gap: "5px" }}>
    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
      {"<"}
    </button>

    <select
      value={getYear(date)}
      onChange={({ target: { value } }) => changeYear(+value)}
    >
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>

    <select
      value={getMonth(date)}
      onChange={({ target: { value } }) => changeMonth(+value)}
    >
      {MONTHS.map((month, index) => (
        <option key={month} value={index}>
          {month}
        </option>
      ))}
    </select>

    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
      {">"}
    </button>
  </div>
);

const DataPicker = ({ selected, onChange }) => {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      renderCustomHeader={(props) => <CustomHeader {...props} />}
      maxDate={new Date()}           // nema future datuma
      dateFormat="dd/MM/yyyy"
      showPopperArrow={false}
    />
  );
};

export default DataPicker;