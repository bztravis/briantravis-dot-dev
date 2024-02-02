'use client';

import { useState, useEffect } from 'react';
import { format, parse } from 'date-fns';
import styles from './Countdown.module.scss';

const END_DATES = [new Date('May 13'), new Date('May 28')] as const;
const DATE_FORMAT_STR = 'MMM do';

const Countdown = () => {
  const [endDate, setEndDate] = useState<(typeof END_DATES)[number]>(
    END_DATES[0]
  );
  const [duration, setDuration] = useState(0);

  const updateDuration = () => {
    setDuration((prev) => prev + 1);
  };

  useEffect(() => {
    updateDuration();
    const interval = setInterval(() => {
      updateDuration();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h3>{duration}</h3>
      <p>Until </p>
      <select
        value={dateToReadable(endDate)}
        onChange={(e) => {
          setEndDate(parse(e.target.value, DATE_FORMAT_STR, new Date()));
        }}
      >
        {END_DATES.map((date) => (
          <option key={date.toISOString()}>{dateToReadable(date)}</option>
        ))}
      </select>
    </div>
  );

  function dateToReadable(date: Date) {
    return format(date, DATE_FORMAT_STR);
  }
};

export default Countdown;
