import localFont from 'next/font/local';
import { styleBuilder } from '@/utils/styleBuilder';
import Clock from '@/components/Clock';
import Countdown from '@/components/Countdown';
import styles from './page.module.scss';

const CabinetGrotesk = localFont({
  src: '../../public/fonts/CabinetGrotesk-Variable.ttf',
  display: 'swap',
});

const page = () => {
  return (
    <div className={styleBuilder([styles.container, CabinetGrotesk.className])}>
      <Clock />
      <Countdown />
    </div>
  );
};

export default page;
