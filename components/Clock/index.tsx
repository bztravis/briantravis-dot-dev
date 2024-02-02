import { styleBuilder } from '@/utils/styleBuilder';
import HourHandIcon from '@/public/icons/HourHand.svg';
import MinuteHandIcon from '@/public/icons/MinuteHand.svg';
import styles from './Clock.module.scss';

const Clock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hand}>
        <MinuteHand />
      </div>
      <HourHandIcon />
    </div>
  );
};

function MinuteHand() {
  return (
    <MinuteHandIcon
      className={styleBuilder([styles.minuteHand, styles.hand])}
    />
  );
}

export default Clock;
