'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect, useCallback } from 'react';
import { format, parse, intervalToDuration } from 'date-fns';
import type { Duration } from 'date-fns';
import useLocalStorage from '@/hooks/useLocalStorage';

import styles from './Countdown.module.scss';

const END_DATES = [new Date('May 13, 2024'), new Date('May 28, 2024')] as const;
const DATE_FORMAT_STR = 'MMM do';

const Countdown = () => {
  const [endDate, setEndDate] = useLocalStorage<(typeof END_DATES)[number]>(
    'endDate',
    END_DATES[0]
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
      <h3>{durationToDisplay(duration)}</h3>
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

  function durationToDisplay(duration: Duration) {
    return `${duration.months ?? 0} mon, ${duration.days ?? 0} days, ${
      duration.hours ?? 0
    } hr, ${duration.minutes ?? 0} min, ${duration.seconds ?? 0} sec`;
  }
};

export default dynamic(() => Promise.resolve(Countdown), { ssr: false });
