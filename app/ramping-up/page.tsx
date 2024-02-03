import Clock from '@/components/Clock';
import Countdown from '@/components/Countdown';
import styles from './page.module.scss';

const page = () => {
  return (
    <div className={styles.container}>
      <Clock />
      <Countdown />
    </div>
  );
};

export default page;
