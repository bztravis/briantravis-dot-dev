'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  format,
  parse,
  differenceInSeconds,
  intervalToDuration,
  formatDuration,
} from 'date-fns';

import styles from './Countdown.module.scss';

const END_DATES = [new Date('May 13'), new Date('May 28')] as const;
const DATE_FORMAT_STR = 'MMM do';

const Countdown = () => {
  const [endDate, setEndDate] = useState<(typeof END_DATES)[number]>(
    END_DATES[0]
  );
  const [secRemaining, setSecRemaining] = useState(
    differenceInSeconds(Date(), endDate)
  );

  const getDuration = useCallback(() => {
    return differenceInSeconds(Date(), endDate);
  }, [endDate]);

  useEffect(() => {
    setSecRemaining(getDuration());
    const interval = setInterval(() => {
      setSecRemaining(getDuration());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [getDuration]);

  return (
    <div className={styles.container}>
      <h3>
        {formatDuration(intervalToDuration({ start: 0, end: secRemaining }))}
      </h3>
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
