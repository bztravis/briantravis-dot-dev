import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

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
      <body className={CabinetGrotesk.className}>{children}</body>
    </html>
  );
}
