import { styleBuilder } from '@/utils/styleBuilder';
import HourHandIcon from '@/public/icons/HourHand.svg';
import MinuteHandIcon from '@/public/icons/MinuteHand.svg';
import styles from './Clock.module.scss';

type Props = {};

const clock = (props: Props) => {
  return (
    <div className={styles.container}>
      <MinuteHand className={styles.hand} />
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

export default clock;
