'use client';

import { SessionProvider } from 'next-auth/react';
import Navbar from '../components/Navbar';

const RootLayout = ({ children }) => (
  <html lang="pt">
    <head />
    <SessionProvider>
      <body><Navbar /> {children}</body>
    </SessionProvider>
  </html>
);

export default RootLayout;
