import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { NavBar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'hobbymusik',
  description: 'musik ist unser hobby',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header><NavBar /></header>
        {children}
        <Footer />
      </body>
    </html>
  )
}
