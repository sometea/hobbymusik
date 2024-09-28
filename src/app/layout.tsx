import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { NavBar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

import { CookieBar } from './components/cookiebar/cookiebar';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <header><NavBar /></header>
        <main className="flex min-h-[50vh] flex-col items-start justify-between p-8 lg:px-24 lg:max-w-6xl">
          {children}
        </main>
        <CookieBar />
        <Footer />
      </body>
    </html>
  )
}
