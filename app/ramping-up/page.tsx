'use client';

import { useState, useEffect } from 'react';
import Clock from '@/components/Clock';
import Countdown from '@/components/Countdown';
import styles from './page.module.scss';

const END_DATES = [new Date('May 28')] as const;

const page = () => {
  const [endDate, setEndDate] = useState<(typeof END_DATES)[number]>(
    END_DATES[0]
  );
  return (
    <div className={styles.container}>
      <Clock />
      <Countdown endDate={endDate} />
      <select>
        {END_DATES.map((date) => (
          <option key={date.toISOString()}>Until {date}</option>
        ))}
      </select>
    </div>
  );
};

export default page;
