import type { Metadata } from 'next';
import Clock from '@/components/Clock';
import Countdown from '@/components/Countdown';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Ramping Up',
  description: 'Countdown to intern start dates at Ramp',
  openGraph: {
    title: 'Ramping Up',
    description: 'Countdown to intern start dates at Ramp',
    url: 'https://briantravis.dev/ramping-up',
    siteName: 'Brian Travis',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/drive-viewer/AEYmBYQMICJJiIwPmQ8USg-_GJiD9JfN76q46U-igf4nkTaVJABVMh6OVZNBQb57Y93Pn2oRTPAPhAsX3mvMQad-2t_Rv4Zouw=s2560', // Must be an absolute URL
        width: 578,
        height: 400,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramping Up',
    description: 'Countdown to intern start dates at Ramp',
    images: [
      'https://lh3.googleusercontent.com/drive-viewer/AEYmBYQMICJJiIwPmQ8USg-_GJiD9JfN76q46U-igf4nkTaVJABVMh6OVZNBQb57Y93Pn2oRTPAPhAsX3mvMQad-2t_Rv4Zouw=s2560',
    ],
  },
};

const page = () => {
  return (
    <div className={styles.container}>
      <main>
        <Clock />
        <Countdown />
      </main>
      <footer>
        <a
          href='https://github.com/bztravis/briantravis-dot-dev'
          className={styles.addDateLink}
        >
          Add your start date
        </a>
      </footer>
    </div>
  );
};

export default page;
