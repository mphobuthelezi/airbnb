import React, { useState, useEffect } from 'react';
import './CalendarSection.css';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const CalendarSection = ({ startDate, endDate, setStartDate, setEndDate }) => {
  const [nights, setNights] = useState(0);

  useEffect(() => {
    if (startDate && endDate) {
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays);
    } else {
      setNights(0);
    }
  }, [startDate, endDate]);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate || new Date(),
    endDate: endDate || new Date(),
    key: 'selection',
  };

  return (
    <div className="calendar-section">
      <h3>{nights} nights in New York</h3>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        months={2}
        direction="horizontal"
      />
      <button className="clear-dates-button" onClick={() => { setStartDate(null); setEndDate(null); }}>Clear dates</button>
    </div>
  );
};

export default CalendarSection;
