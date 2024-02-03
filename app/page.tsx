import localFont from 'next/font/local';
import { styleBuilder } from '@/utils/styleBuilder';
import styles from './page.module.scss';

const CabinetGrotesk = localFont({
  src: '../public/fonts/CabinetGrotesk-Variable.ttf',
  display: 'swap',
});

export default function Home() {
  return (
    <div className={styleBuilder([styles.container, CabinetGrotesk.className])}>
      <p>brian travis [dot] dev</p>
      <div>
        <h1>Coming</h1>
        <h1>Soon</h1>
      </div>
    </div>
  );
}
