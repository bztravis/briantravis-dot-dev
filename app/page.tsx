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
      <div>
        <p>brian travis [dot] dev</p>
        <div className={styles.links}>
          <a href='https://twitter.com/_briantravis' target='_blank'>
            Twitter
          </a>
          <a href='https://www.linkedin.com/in/brian-z-travis/' target='_blank'>
            LinkedIn
          </a>
          <a href='https://github.com/bztravis' target='_blank'>
            GitHub
          </a>
        </div>
      </div>
      <div>
        <h1>Coming</h1>
        <h1>Soon</h1>
      </div>
    </div>
  );
}
