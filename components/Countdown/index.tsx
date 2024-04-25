'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect, useCallback } from 'react';
import { format, parse, intervalToDuration } from 'date-fns';
import type { Duration } from 'date-fns';
import useLocalStorage from '@/hooks/useLocalStorage';

import styles from './Countdown.module.scss';

const END_DATES = [
  new Date('April 27, 2024'),
  new Date('May 2, 2024'),
  new Date('May 13, 2024'),
  new Date('May 28, 2024'), // default
] as const;
const DEFAULT_END_DATE = END_DATES[3];

const DATE_FORMAT_STR = 'MMM do';

const Countdown = () => {
  const [endDate, setEndDate] = useLocalStorage<(typeof END_DATES)[number]>(
    'endDate',
    DEFAULT_END_DATE
  );

  const getDuration = useCallback(() => {
    return intervalToDuration({ start: Date(), end: endDate });
  }, [endDate]);

  const [duration, setDuration] = useState<Duration>(getDuration());

  useEffect(() => {
    setDuration(getDuration());
    const interval = setInterval(() => {
      setDuration(getDuration());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [getDuration]);

  return (
    <div className={styles.container}>
      <DurationDisplay duration={duration} />
      <div className={styles.until}>
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
    </div>
  );

  function dateToReadable(date: Date) {
    return format(date, DATE_FORMAT_STR);
  }
};

type DurationDisplayProps = {
  duration: Duration;
};

function DurationDisplay({ duration }: DurationDisplayProps) {
  return (
    <h3>
      {duration.months ?? 0}
      <span className={styles.annotation}>mon</span>
      {duration.days ?? 0}
      <span className={styles.annotation}>days</span>
      {duration.hours ?? 0}
      <span className={styles.annotation}>hr</span>
      {duration.minutes ?? 0}
      <span className={styles.annotation}>min</span>
      {duration.seconds ?? 0}
      <span className={styles.annotation}>sec</span>
    </h3>
  );
}

export default dynamic(() => Promise.resolve(Countdown), { ssr: false });
