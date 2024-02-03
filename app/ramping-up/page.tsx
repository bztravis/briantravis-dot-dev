import type { Metadata } from 'next';
import Clock from '@/components/Clock';
import Countdown from '@/components/Countdown';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Ramping Up',
  description: '',
};

const page = () => {
  return (
    <div className={styles.container}>
      <Clock />
      <Countdown />
    </div>
  );
};

export default page;
