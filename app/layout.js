import { Poppins } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'SportSync',
  description: 'SportSync is an online platform that helps people who love sports get together by making it easier to organize, share, and create local sporting events.',
  icons: {
    icon: '/assets/images/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
