import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Link from 'next/link';
import './globals.css';
import styles from './layout.module.scss';

const CabinetGrotesk = localFont({
  src: '../public/fonts/CabinetGrotesk-Variable.ttf',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Brian Travis',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={CabinetGrotesk.className}>
        <div className={styles.container}>
          <header className={styles.header}>
            <Link href='/' className={styles.rootLink}>
              brian travis [dot] dev
            </Link>
            <div className={styles.links}>
              <a href='https://twitter.com/_briantravis' target='_blank'>
                Twitter
              </a>
              <a
                href='https://www.linkedin.com/in/brian-z-travis/'
                target='_blank'
              >
                LinkedIn
              </a>
              <a href='https://github.com/bztravis' target='_blank'>
                GitHub
              </a>
              <Link href='/essays'>Writing</Link>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
