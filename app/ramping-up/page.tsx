import Clock from '@/components/Clock';
import Countdown from '@/components/Countdown';
import styles from './page.module.scss';

type Props = {};

const page = (props: Props) => {
  return (
    <div className={styles.container}>
      <Clock />
      <Countdown />
    </div>
  );
};

export default page;
