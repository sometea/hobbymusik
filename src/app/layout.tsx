import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { NavBar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

import { CookieBar } from './components/cookiebar/cookiebar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'hobbymusik',
  description: 'musik ist unser hobby',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header><NavBar /></header>
        <main className={`${inter.variable} font-sans flex min-h-[50vh] flex-col items-start justify-between px-4 lg:px-24 lg:max-w-[58rem]`}>
          {children}
        </main>
        <CookieBar />
        <Footer />
      </body>
    </html>
  )
}
