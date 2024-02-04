import type { Metadata } from 'next';
import Clock from '@/components/Clock';
import Countdown from '@/components/Countdown';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Ramping Up',
  description: '',
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
