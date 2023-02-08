'use client';

import { SessionProvider } from 'next-auth/react';
import Navbar from '../components/Navbar';

const RootLayout = ({ children /* title */ }) => (
  <html lang="pt">
    {/* <title>{title ? `${title} - Início` : 'Início'}</title> */}
    <SessionProvider>
      <body><Navbar /> {children}</body>
    </SessionProvider>
  </html>
);

export default RootLayout;
